import { SchemaType } from '../types/schema';

interface SEOConfigType {
  title: string;
  description: string;
  keywords: string;
  schemaType: SchemaType;
  schemaName: string;
  schemaDescription: string;
  schemaCategory?: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    type: string;
  };
}

export const SEOConfig: Record<string, SEOConfigType> = {
  home: {
    title: 'ExcelEasy - AI-Powered Excel Generation Tool',
    description: 'Transform your data into professional Excel spreadsheets instantly with AI. 100% free to use, no login required. Create complex Excel files, charts, and reports with simple natural language commands.',
    keywords: 'Excel generator, AI Excel, spreadsheet automation, data visualization, business intelligence, office automation',
    schemaType: 'SoftwareApplication',
    schemaName: 'ExcelEasy AI Excel Generator',
    schemaDescription: 'AI-powered Excel spreadsheet generation tool that transforms natural language into professional Excel files with charts, formulas, and data analysis',
    schemaCategory: 'BusinessApplication',
    image: {
      url: '/images/social/home-preview.png',
      alt: 'ExcelEasy - AI Excel Generator',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  workspace: {
    title: 'AI Excel Generator - Create Custom Spreadsheets | ExcelEasy',
    description: 'Generate custom Excel spreadsheets using AI, completely free. Create tables, charts, and reports with natural language. Features include pivot tables, data analysis, and automated formatting. No login required.',
    keywords: 'Excel creator, spreadsheet generator, AI tables, data analysis, business reports, automated Excel',
    schemaType: 'SoftwareApplication',
    schemaName: 'ExcelEasy Workspace',
    schemaDescription: 'Interactive workspace for generating custom Excel spreadsheets with AI, featuring automated table creation, chart generation, and data analysis tools',
    schemaCategory: 'BusinessApplication',
    image: {
      url: '/images/social/workspace-preview.png',
      alt: 'AI Excel Generator Workspace',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  excelFunctions: {
    title: 'Excel Functions & VBA Macro Generator | ExcelEasy',
    description: 'Generate complex Excel functions and VBA macros instantly with AI, free forever. Automate calculations, data processing, and repetitive tasks with natural language commands. No registration needed.',
    keywords: 'Excel functions, VBA macros, Excel automation, formula generator, office scripts, Excel programming',
    schemaType: 'SoftwareApplication',
    schemaName: 'ExcelEasy Function Generator',
    schemaDescription: 'Advanced Excel function and VBA macro generation tool powered by AI, enabling complex automation and calculations through natural language',
    schemaCategory: 'DeveloperApplication',
    image: {
      url: '/images/social/functions-preview.png',
      alt: 'Excel Functions & VBA Generator',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  picToExcel: {
    title: 'Image to Excel Converter - Extract Data from Images | ExcelEasy',
    description: 'Convert images to Excel spreadsheets instantly with AI, 100% free. Extract tables, data, and text from images into editable Excel files. No login required, unlimited usage.',
    keywords: 'image to Excel, OCR Excel, table extraction, data extraction, image recognition Excel',
    schemaType: 'SoftwareApplication',
    schemaName: 'ExcelEasy Image to Excel Converter',
    schemaDescription: 'AI-powered tool that converts images containing tables and data into editable Excel spreadsheets',
    schemaCategory: 'BusinessApplication',
    image: {
      url: '/images/social/pic-to-excel-preview.png',
      alt: 'Image to Excel Converter',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  }
}; 