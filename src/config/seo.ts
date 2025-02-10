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
  },
  blog: {
    title: 'Blog - Excel Tips & AI Insights | ExcelEasy',
    description: 'Discover the latest Excel tips, AI technology insights, and data processing best practices. Learn how to improve your productivity with ExcelEasy.',
    keywords: 'Excel tips, AI insights, data processing, productivity tips, Excel tutorials, AI technology',
    schemaType: 'WebSite',
    schemaName: 'ExcelEasy Blog',
    schemaDescription: 'Excel tips, AI technology insights, and data processing best practices to help you work more efficiently',
    image: {
      url: '/images/social/blog-preview.png',
      alt: 'ExcelEasy Blog',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  aiExcelChart: {
    title: 'AI Excel Chart Generator - Smart Data Visualization | ExcelEasy',
    description: 'Use AI to analyze Excel data and create professional data visualization charts. Support bar charts, line charts, pie charts, scatter plots, and more. Free to use, no login required.',
    keywords: 'Excel chart generator, AI data visualization, Excel data analysis, chart creation, data visualization tools',
    schemaType: 'SoftwareApplication',
    schemaName: 'ExcelEasy AI Excel Chart Generator',
    schemaDescription: 'AI-powered Excel chart generation tool that intelligently analyzes data and creates professional visualization charts',
    schemaCategory: 'BusinessApplication',
    image: {
      url: '/images/social/chart-preview.png',
      alt: 'AI Excel Chart Generator',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  privacy: {
    title: 'Privacy Policy | ExcelEasy - AI Excel Generator',
    description: 'Learn how ExcelEasy protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection, usage, and protection practices.',
    keywords: 'privacy policy, data protection, user privacy, data security, GDPR compliance, data handling',
    schemaType: 'WebPage',
    schemaName: 'ExcelEasy Privacy Policy',
    schemaDescription: 'Comprehensive privacy policy detailing how ExcelEasy handles and protects user data',
    image: {
      url: '/images/social/privacy-preview.png',
      alt: 'ExcelEasy Privacy Policy',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  contact: {
    title: 'Contact Us | ExcelEasy - AI Excel Generator',
    description: 'Get in touch with the ExcelEasy team. We\'re here to help with your questions, feedback, and support needs regarding our AI Excel generation tools.',
    keywords: 'contact us, customer support, help desk, technical support, feedback, business inquiries',
    schemaType: 'ContactPage',
    schemaName: 'ExcelEasy Contact Page',
    schemaDescription: 'Contact information and support channels for ExcelEasy users',
    image: {
      url: '/images/social/contact-preview.png',
      alt: 'Contact ExcelEasy Support',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  notFound: {
    title: 'Page Not Found | ExcelEasy - AI Excel Generator',
    description: 'The page you are looking for could not be found. Please check the URL or return to our homepage to continue using our AI Excel generation tools.',
    keywords: '404, page not found, error page, missing page',
    schemaType: 'WebPage',
    schemaName: 'ExcelEasy 404 Page',
    schemaDescription: 'Page not found error page for ExcelEasy website',
    image: {
      url: '/images/social/404-preview.png',
      alt: 'Page Not Found',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  }
}; 