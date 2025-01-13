import React from 'react';
import { useTranslation } from 'react-i18next';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
import { Box, Typography } from '@mui/material';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
  hashtags?: string[];
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, description, hashtags = ['AIExcel', 'FreeTools'] }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
      <Typography variant="body2">{t('common.share')}:</Typography>
      <FacebookShareButton
        url={url}
        quote={`${title}\n${description}`}
        hashtag={hashtags.map(tag => `#${tag}`).join(' ')}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        via="AIExcel"
        hashtags={hashtags}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </Box>
  );
};

export default ShareButtons; 