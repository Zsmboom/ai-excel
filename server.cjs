const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const dotenv = require('dotenv');
const path = require('path');
const { useTranslation } = require('react-i18next');

// 加载环境变量
dotenv.config();

const app = express();
const port = 3000;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5177',
  credentials: true
}));
app.use(express.json());

// 提供静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 添加根路由和健康检查
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 确保环境变量存在
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5177';
const redirectUrl = process.env.REDIRECT_URL || `${frontendUrl}/api/auth/callback`;

console.log('Environment variables:', {
  clientId: clientId?.substring(0, 10) + '...',
  clientSecret: clientSecret?.substring(0, 5) + '...',
  frontendUrl,
  redirectUrl
});

if (!clientId || !clientSecret) {
  throw new Error('Missing required environment variables');
}

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectUrl
);

app.get('/api/auth/google', (req, res) => {
  try {
    const scopes = [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ];

    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      include_granted_scopes: true,
      prompt: 'consent'
    });

    console.log('Generated auth URL:', authUrl);
    res.redirect(authUrl);
  } catch (error) {
    console.error('Error generating auth URL:', error);
    res.status(500).json({ message: 'Failed to generate auth URL' });
  }
});

app.get('/api/auth/callback', async (req, res) => {
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
      <!DOCTYPE html>
      <html>
        <head>
          <title>Exceleasy - AI Excel Generation Tool</title>
          <link rel="canonical" href="${frontendUrl}/api/auth/callback" />
        </head>
        <body>
          <script>
            try {
              if (window.opener) {
                window.opener.postMessage(
                  { 
                    type: 'GOOGLE_SIGN_IN_SUCCESS', 
                    user: ${JSON.stringify(user)}
                  }, 
                  '${frontendUrl}'
                );
                window.close();
              } else {
                document.body.innerHTML = 'Authentication successful! You can close this window.';
              }
            } catch (error) {
              console.error('Error posting message:', error);
              document.body.innerHTML = 'Authentication successful! You can close this window.';
            }
          </script>
          <p>Authentication successful! You can close this window.</p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('OAuth callback error:', error);
    res.status(500).json({ 
      message: 'Authentication failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
  }
});

// 添加 Sitemap 路由
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.send(`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${frontendUrl}/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${frontendUrl}/ai-excel-generator</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${frontendUrl}/excel-functions</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    </urlset>
  `);
});

// 添加错误处理中间件
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    message: 'Internal server error',
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// 处理 404 错误
app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    path: req.path
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Frontend URL: ${frontendUrl}`);
  console.log(`Callback URL: ${redirectUrl}`);
  console.log('Available routes:');
  console.log('  - GET /');
  console.log('  - GET /health');
  console.log('  - GET /api/auth/google');
  console.log('  - GET /api/auth/callback');
}); 

async function getUserCountry() {
  const response = await fetch('https://ipinfo.io/json?token=YOUR_API_KEY');
  const data = await response.json();
  return data.country;
} 