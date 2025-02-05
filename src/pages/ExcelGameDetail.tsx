import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameDetail {
  id: string;
  name: string;
  description: string;
  howToPlay: string[];
  features: string[];
  image: string;
  downloadUrl: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  skills: string[];
}

const games: Record<string, GameDetail> = {
  'sudoku': {
    id: 'sudoku',
    name: 'Excel 数独',
    description: '在 Excel 中体验经典数独游戏。通过玩游戏提升逻辑思维能力和 Excel 技能。',
    howToPlay: [
      '打开Excel文件后，您会看到一个9x9的数独网格',
      '在空白单元格中填入数字1-9',
      '每行、每列和每个3x3方格中的数字不能重复',
      '填写时，如果输入的数字违反规则，单元格会显示红色警告',
      '所有单元格填写正确后，系统会自动提示游戏完成',
      '点击"新游戏"按钮可以开始新的游戏，可以选择难度级别'
    ],
    features: [
      '经典数独玩法',
      '三种难度可选',
      '实时提示功能',
      '自动记录成绩',
      '简洁清晰的界面'
    ],
    image: '/images/games/sudoku.png',
    downloadUrl: '/games/excel-sudoku.xlsx',
    difficulty: 'intermediate',
    skills: []
  },
  'snake': {
    id: 'snake',
    name: 'Excel 贪吃蛇',
    description: '经典贪吃蛇游戏的Excel版本。使用方向键控制蛇移动，吃到食物可以增加长度和分数。',
    howToPlay: [
      '打开Excel文件并启用宏',
      '点击开始游戏按钮',
      '使用键盘方向键控制蛇的移动',
      '吃到红色食物可以增加分数和蛇的长度',
      '注意避免撞到墙壁或蛇身'
    ],
    features: [
      '经典贪吃蛇玩法',
      '实时分数显示',
      '最高分记录',
      '流畅的游戏体验',
      '简单易上手'
    ],
    image: '/images/games/snake.png',
    downloadUrl: '/games/excel-snake.xlsm',
    difficulty: 'beginner',
    skills: []
  },
  'tetris': {
    id: 'tetris',
    name: 'Excel 俄罗斯方块',
    description: '经典俄罗斯方块游戏的Excel版本。使用方向键移动和旋转方块，消除完整的行获得分数。',
    howToPlay: [
      '打开Excel文件并启用宏',
      '点击开始游戏按钮',
      '使用方向键左右移动方块',
      '上方向键旋转方块，下方向键加速下落',
      '完成一整行可以消除并得分',
      '当方块堆到顶部时游戏结束'
    ],
    features: [
      '经典俄罗斯方块玩法',
      '下一个方块预览',
      '实时分数统计',
      '游戏难度选择',
      '背景音乐'
    ],
    image: '/images/games/tetris.png',
    downloadUrl: '/games/excel-tetris.xlsm',
    difficulty: 'intermediate',
    skills: []
  }
};

const ExcelGameDetail: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  
  const game = gameId ? games[gameId] : null;

  if (!game) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center">
          {t('excelGames.gameNotFound')}
        </Typography>
      </Container>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'success.main';
      case 'intermediate':
        return 'warning.main';
      case 'advanced':
        return 'error.main';
      default:
        return 'text.primary';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Link 
          to={`/${currentLang}/excel-games`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Button startIcon={<ArrowLeft />} sx={{ mb: 2 }}>
            {t('excelGames.backToGames')}
          </Button>
        </Link>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={game.image}
            alt={game.name}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            {game.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {game.description}
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography 
              variant="subtitle2" 
              sx={{ 
                color: getDifficultyColor(game.difficulty),
                mb: 1
              }}
            >
              {t(`excelGames.difficulty.${game.difficulty}`)}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {game.skills.map((skill, index) => (
                <Paper
                  key={index}
                  sx={{
                    px: 1,
                    py: 0.5,
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: '4px'
                  }}
                >
                  {skill}
                </Paper>
              ))}
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Download />}
            href={game.downloadUrl}
            sx={{ mb: 4 }}
          >
            {t('excelGames.downloadGame')}
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            {t('excelGames.howToPlay')}
          </Typography>
          <Paper sx={{ p: 3, mb: 4 }}>
            <ol style={{ paddingLeft: '20px' }}>
              {game.howToPlay.map((step, index) => (
                <li key={index}>
                  <Typography paragraph>
                    {step}
                  </Typography>
                </li>
              ))}
            </ol>
          </Paper>

          <Typography variant="h5" gutterBottom>
            {t('excelGames.features')}
          </Typography>
          <Paper sx={{ p: 3 }}>
            <ul style={{ paddingLeft: '20px' }}>
              {game.features.map((feature, index) => (
                <li key={index}>
                  <Typography paragraph>
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExcelGameDetail; 