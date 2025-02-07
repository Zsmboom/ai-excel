import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

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
}

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams<{ lang: string }>();

  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('common.blog')}
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card sx={{ p: 3 }}>
              <Link to={`/${lang}/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
  );
};

export default BlogPage; 