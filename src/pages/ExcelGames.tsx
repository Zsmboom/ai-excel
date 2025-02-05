import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Game {
  id: string;
  name: string;
  description: string;
  image: string;
}

const ExcelGames: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || i18n.language || 'en';

  const games: Game[] = [
    {
      id: 'sudoku',
      name: 'Excel Sudoku',
      description: 'Classic Sudoku game built in Excel. Practice your logical thinking and Excel skills.',
      image: '/images/games/sudoku.png'
    },
    {
      id: 'snake',
      name: 'Excel Snake',
      description: 'The classic Snake game recreated in Excel. Use arrow keys to control the snake.',
      image: '/images/games/snake.png'
    },
    {
      id: 'tetris',
      name: 'Excel Tetris',
      description: 'Play the famous Tetris game built entirely in Excel formulas and VBA.',
      image: '/images/games/tetris.png'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        {t('excelGames.title')}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        {t('excelGames.subtitle')}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {games.map((game) => (
          <Grid item key={game.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{
                  height: 200,
                  objectFit: 'cover',
                }}
                image={game.image}
                alt={game.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {game.name}
                </Typography>
                <Typography paragraph>
                  {game.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Link 
                    to={`/${currentLang}/excel-games/${game.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<ChevronRight />}
                    >
                      {t('excelGames.viewDetails')}
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExcelGames; 