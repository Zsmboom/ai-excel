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

// 添加sitemap路由
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://exceleasy.org';
  const languages = ['en', 'zh', 'ko', 'de', 'hi'];
  
  const routes = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    { path: '/ai-excel-generator', changefreq: 'weekly', priority: 0.9 },
    { path: '/ai-excel-chart', changefreq: 'weekly', priority: 0.9 },
    { path: '/blog', changefreq: 'weekly', priority: 0.8 },
    { path: '/contact', changefreq: 'monthly', priority: 0.7 },
    { path: '/about', changefreq: 'monthly', priority: 0.7 },
    { path: '/privacy', changefreq: 'monthly', priority: 0.6 },
    { path: '/terms', changefreq: 'monthly', priority: 0.6 }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${routes.map(route => {
    // 为英文版本使用根路径（不带语言前缀）
    const routePath = route.path === '/' ? '' : route.path;
    const enUrl = `${baseUrl}${routePath}`.replace(/\/+/g, '/').replace(/\/$/, '');
    
    return `
  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    ${languages.filter(lang => lang !== 'en').map(lang => {
      const langUrl = `${baseUrl}/${lang}${routePath}`.replace(/\/+/g, '/').replace(/\/$/, '');
      return `
    <xhtml:link 
      rel="alternate" 
      hreflang="${lang}" 
      href="${langUrl}"/>`
    }).join('')}
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>
  ${languages.filter(lang => lang !== 'en').map(lang => {
    // 修复：确保非英语URL格式正确
    const langUrl = `${baseUrl}/${lang}${routePath}`.replace(/\/+/g, '/').replace(/\/$/, '');
    return `
  <url>
    <loc>${langUrl}</loc>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    ${languages.filter(l => l !== 'en').map(l => {
      const otherLangUrl = `${baseUrl}/${l}${routePath}`.replace(/\/+/g, '/').replace(/\/$/, '');
      return `
    <xhtml:link 
      rel="alternate" 
      hreflang="${l}" 
      href="${otherLangUrl}"/>`
    }).join('')}
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
  }).join('')}`;
  }).join('')}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(xml);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Callback URL: ${redirectUrl}/api/auth/callback`);
}); 