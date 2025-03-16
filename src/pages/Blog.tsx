import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import { Helmet } from 'react-helmet';
import { languages } from '../i18n/config';

interface BlogPost {
  id: string;
  translations: {
    [key: string]: {
      title: string;
      preview: string;
      content: string;
    }
  };
  date: string;
  slug: string;
}

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams<{ lang: string }>();
  
  // 构建当前页面的规范URL
  const baseUrl = window.location.origin;
  const canonicalUrl = lang === 'en' 
    ? `${baseUrl}/blog` 
    : `${baseUrl}/${lang}/blog`;

  // 构建多语言链接
  const alternateLinks = languages.map((langItem) => ({
    hrefLang: langItem.code,
    href: langItem.code === 'en' 
      ? `${baseUrl}/blog` 
      : `${baseUrl}/${langItem.code}/blog`
  }));

  return (
    <>
      <Helmet>
        <title>{t('blog.pageTitle')}</title>
        <meta name="description" content={t('blog.pageDescription')} />
        
        {/* 规范链接 */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* 多语言备用链接 */}
        {alternateLinks.map(({ hrefLang, href }) => (
          <link
            key={hrefLang}
            rel="alternate"
            hrefLang={hrefLang}
            href={href}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/blog`}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('blog.pageTitle')} />
        <meta property="og:description" content={t('blog.pageDescription')} />
        <meta property="og:url" content={canonicalUrl} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('blog.pageTitle')} />
        <meta name="twitter:description" content={t('blog.pageDescription')} />
      </Helmet>
      
      <Container maxWidth="lg" sx={{ py: 4, mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('common.blog')}
        </Typography>
        <Grid container spacing={3}>
          {blogPosts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <Card sx={{ p: 3 }}>
                <Link to={`/${lang}/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="h5" gutterBottom>
                    {post.translations[lang]?.title || post.translations['en'].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {post.date}
                  </Typography>
                  <Typography variant="body1">
                    {post.translations[lang]?.preview || post.translations['en'].preview}
                  </Typography>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default BlogPage; 