import type { AnalysisResult } from '../types/excel';

const CELL_WIDTH = 150;
const CELL_HEIGHT = 40;
const HEADER_HEIGHT = 50;
const PADDING = 20;
const FONT_FAMILY = 'Arial, sans-serif';

export function renderExcelToImage(data: AnalysisResult): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  
  // Calculate dimensions
  const sheet = data.structure.sheets[0]; // We'll show the first sheet
  const totalWidth = (sheet.headers.length * CELL_WIDTH) + (PADDING * 2);
  const totalHeight = (sheet.data.length * CELL_HEIGHT) + HEADER_HEIGHT + (PADDING * 2);
  
  canvas.width = totalWidth;
  canvas.height = totalHeight;
  
  // Draw background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, totalWidth, totalHeight);
  
  // Draw header
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(PADDING, PADDING, totalWidth - (PADDING * 2), HEADER_HEIGHT);
  
  // Header text
  ctx.fillStyle = '#374151';
  ctx.font = 'bold 14px ' + FONT_FAMILY;
  sheet.headers.forEach((header, index) => {
    ctx.fillText(
      header,
      PADDING + (index * CELL_WIDTH) + 10,
      PADDING + 30
    );
  });
  
  // Draw grid lines
  ctx.strokeStyle = '#e5e7eb';
  ctx.beginPath();
  
  // Vertical lines
  for (let i = 0; i <= sheet.headers.length; i++) {
    ctx.moveTo(PADDING + (i * CELL_WIDTH), PADDING);
    ctx.lineTo(PADDING + (i * CELL_WIDTH), totalHeight - PADDING);
  }
  
  // Horizontal lines
  for (let i = 0; i <= sheet.data.length + 1; i++) {
    ctx.moveTo(PADDING, PADDING + (i * CELL_HEIGHT));
    ctx.lineTo(totalWidth - PADDING, PADDING + (i * CELL_HEIGHT));
  }
  
  ctx.stroke();
  
  // Draw data
  ctx.fillStyle = '#111827';
  ctx.font = '14px ' + FONT_FAMILY;
  sheet.data.forEach((row, rowIndex) => {
    sheet.headers.forEach((header, colIndex) => {
      const value = row[header]?.toString() || '';
      ctx.fillText(
        value,
        PADDING + (colIndex * CELL_WIDTH) + 10,
        PADDING + HEADER_HEIGHT + (rowIndex * CELL_HEIGHT) + 25
      );
    });
  });
  
  return canvas.toDataURL('image/png');
}