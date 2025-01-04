import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';

// 加载环境变量
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 确保环境变量存在
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectUrl = process.env.NEXT_PUBLIC_APP_URL;

console.log('Environment variables:', {
  clientId: clientId?.substring(0, 10) + '...',
  clientSecret: clientSecret?.substring(0, 5) + '...',
  redirectUrl
});

if (!clientId || !clientSecret || !redirectUrl) {
  throw new Error('Missing required environment variables');
}

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  `${redirectUrl}/api/auth/callback`
);

app.get('/api/auth/google', (_req: Request, res: Response) => {
  try {
    const scopes = [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ];

    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      include_granted_scopes: true
    });

    console.log('Generated auth URL:', authUrl);
    res.redirect(authUrl);
  } catch (error) {
    console.error('Error generating auth URL:', error);
    res.status(500).json({ message: 'Failed to generate auth URL' });
  }
});

app.get('/api/auth/callback', async (req: Request, res: Response) => {
  const { code } = req.query;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ message: 'Authorization code is required' });
  }

  try {
    console.log('Received auth code:', code.substring(0, 10) + '...');
    
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Received tokens:', {
      access_token: tokens.access_token?.substring(0, 10) + '...',
      refresh_token: tokens.refresh_token?.substring(0, 10) + '...',
    });
    
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const { data } = await oauth2.userinfo.get();
    console.log('Received user info:', {
      id: data.id,
      email: data.email,
      name: data.name,
    });

    if (!data.id || !data.email) {
      throw new Error('Failed to get user info');
    }

    const user = {
      id: data.id,
      email: data.email,
      fullName: data.name || null,
      avatarUrl: data.picture || null,
      lastLogin: new Date().toISOString(),
      createdAt: new Date().toISOString()
    };

    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <script>
        window.opener.postMessage(
          { type: 'GOOGLE_SIGN_IN_SUCCESS', user: ${JSON.stringify(user)} },
          '${redirectUrl}'
        );
        window.close();
      </script>
    `);
  } catch (error) {
    console.error('OAuth callback error:', error);
    res.status(500).json({ 
      message: 'Authentication failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Callback URL: ${redirectUrl}/api/auth/callback`);
}); 