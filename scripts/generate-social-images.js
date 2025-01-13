import { createCanvas, loadImage, registerFont } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建输出目录
const outputDir = path.join(__dirname, '../public/images/social');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 配置画布尺寸
const width = 1200;
const height = 630;

// 页面配置
const pages = [
  {
    name: 'home',
    title: 'ExcelEasy - AI Excel Generation Tool',
    description: 'Transform your data into Excel spreadsheets instantly with AI',
    features: ['✨ 100% Free to Use', '🔒 No Login Required', '🌍 Multi-language Support']
  },
  {
    name: 'workspace',
    title: 'AI Excel Generator',
    description: 'Create custom Excel spreadsheets using natural language',
    features: ['✨ 100% Free to Use', '🔒 No Login Required', '🌍 Multi-language Support']
  },
  {
    name: 'functions',
    title: 'Excel Functions & VBA Generator',
    description: 'Generate complex Excel functions and VBA macros instantly',
    features: ['✨ 100% Free to Use', '🔒 No Login Required', '🌍 Multi-language Support']
  },
  {
    name: 'pic-to-excel',
    title: 'Image to Excel Converter',
    description: 'Convert images to Excel spreadsheets with AI',
    features: ['✨ 100% Free to Use', '🔒 No Login Required', '🌍 Multi-language Support']
  }
];

async function generateImage(page) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 设置背景
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // 添加渐变背景
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f0f9ff');
  gradient.addColorStop(1, '#ffffff');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // 添加标题
  ctx.font = 'bold 48px Arial';
  ctx.fillStyle = '#1a1a1a';
  ctx.textAlign = 'center';
  ctx.fillText(page.title, width / 2, 150);

  // 添加描述
  ctx.font = '32px Arial';
  ctx.fillStyle = '#4a4a4a';
  ctx.fillText(page.description, width / 2, 220);

  // 添加特性标签
  ctx.font = '24px Arial';
  page.features.forEach((feature, index) => {
    ctx.fillText(feature, width / 2, 320 + index * 40);
  });

  // 保存图片
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, `${page.name}-preview.png`), buffer);
}

// 生成所有页面的预览图片
async function generateAllImages() {
  for (const page of pages) {
    await generateImage(page);
    console.log(`Generated preview image for ${page.name}`);
  }
}

generateAllImages().catch(console.error); 