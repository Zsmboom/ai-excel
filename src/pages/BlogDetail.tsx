import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, IconButton, Box, Paper, Chip, Divider, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { zhCN, enUS, de } from 'date-fns/locale';
import blogPosts from '../data/blogPosts';
import { Helmet } from 'react-helmet';
import { languages } from '../i18n/config';

const getLocale = (lang: string) => {
  switch (lang) {
    case 'zh':
      return zhCN;
    case 'de':
      return de;
    default:
      return enUS;
  }
};

const BlogDetail: React.FC = () => {
  const { slug, lang = 'en' } = useParams<{ slug: string; lang: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const post = blogPosts.find((p) => p.slug === slug);
  const content = post?.translations[lang] || post?.translations['en'];

  if (!post || !content) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, mt: 8 }}>
        <Typography variant="h4" component="h1">
          {t('blog.postNotFound')}
        </Typography>
      </Container>
    );
  }

  const baseUrl = window.location.origin;
  const canonicalUrl = lang === 'en' 
    ? `${baseUrl}/blog/${post.slug}` 
    : `${baseUrl}/${lang}/blog/${post.slug}`;

  // 构建多语言链接
  const alternateLinks = languages.map((langItem) => ({
    hrefLang: langItem.code,
    href: langItem.code === 'en' 
      ? `${baseUrl}/blog/${post.slug}` 
      : `${baseUrl}/${langItem.code}/blog/${post.slug}`
  }));

  const formattedDate = format(new Date(post.date), 'PPP', { locale: getLocale(lang) });

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: content.title,
          text: content.preview,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        // TODO: 显示复制成功提示
      }
    } catch (error) {
      console.error('分享失败:', error);
    }
  };

  // 文章结构化数据
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': content.title,
    'description': content.preview,
    'image': `${window.location.origin}/images/blog/${post.id}.jpg`,
    'datePublished': post.date,
    'dateModified': post.date,
    'author': {
      '@type': 'Organization',
      'name': 'ExcelEasy',
      'url': window.location.origin
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'ExcelEasy',
      'logo': {
        '@type': 'ImageObject',
        'url': `${window.location.origin}/logo.png`
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.preview} />
        
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
          href={`${baseUrl}/blog/${post.slug}`}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.preview} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${window.location.origin}/images/blog/${post.id}.jpg`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.preview} />
        <meta name="twitter:image" content={`${window.location.origin}/images/blog/${post.id}.jpg`} />
        
        {/* 结构化数据 */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      
      <Container maxWidth="lg" sx={{ py: 4, mt: 8 }}>
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton onClick={() => navigate(`/${lang}/blog`)} aria-label={t('common.back')}>
            <ArrowBackIcon />
          </IconButton>
          <Button
            startIcon={<ShareIcon />}
            onClick={handleShare}
            variant="outlined"
            color="primary"
          >
            {t('common.share')}
          </Button>
        </Box>

        <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: 'background.paper' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {content.title}
          </Typography>
          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {formattedDate}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Chip label="Excel" size="small" />
            <Chip label="AI" size="small" />
          </Box>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
            {content.preview}
          </Typography>
        </Paper>

        <Paper elevation={0} sx={{ p: 4, bgcolor: 'background.paper' }}>
          <Box className="markdown-body" sx={{
            '& img': {
              maxWidth: '100%',
              height: 'auto'
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
              mt: 4,
              mb: 2
            },
            '& p': {
              mb: 2,
              lineHeight: 1.8
            },
            '& ul, & ol': {
              mb: 2,
              pl: 3
            },
            '& li': {
              mb: 1
            },
            '& pre': {
              p: 2,
              borderRadius: 1,
              bgcolor: 'grey.100',
              overflow: 'auto'
            },
            '& code': {
              fontFamily: 'monospace',
              p: 0.5,
              borderRadius: 0.5,
              bgcolor: 'grey.100'
            },
            '& a': {
              color: '#0066cc',
              textDecoration: 'underline',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: '#003d7a'
              }
            }
          }}>
            <ReactMarkdown>{content.content}</ReactMarkdown>
          </Box>
        </Paper>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(`/${lang}/blog`)}
            variant="text"
          >
            {t('blog.backToBlog')}
          </Button>
          <Button
            startIcon={<ShareIcon />}
            onClick={handleShare}
            variant="contained"
            color="primary"
          >
            {t('common.share')}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default BlogDetail; 