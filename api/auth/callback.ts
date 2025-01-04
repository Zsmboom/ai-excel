import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { code } = req.query;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ message: 'Authorization code is required' });
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const { data } = await oauth2.userinfo.get();

    const user = {
      id: data.id!,
      email: data.email!,
      fullName: data.name,
      avatarUrl: data.picture,
      lastLogin: new Date().toISOString(),
      createdAt: new Date().toISOString()
    };

    // 发送用户数据回父窗口
    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <script>
        window.opener.postMessage(
          { type: 'GOOGLE_SIGN_IN_SUCCESS', user: ${JSON.stringify(user)} },
          '*'
        );
        window.close();
      </script>
    `);
  } catch (error) {
    console.error('OAuth callback error:', error);
    res.status(500).json({ message: 'Authentication failed' });
  }
} 