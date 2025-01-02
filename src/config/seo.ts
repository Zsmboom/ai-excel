interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  schemaType: 'WebApplication' | 'SoftwareApplication';
  schemaName: string;
  schemaDescription: string;
  schemaCategory: string;
}

export const SEOConfig: Record<string, PageSEO> = {
  home: {
    title: 'ExcelEasy - AI-Powered Excel Generation Tool',
    description: 'Transform your data into professional Excel spreadsheets instantly with AI. Our tool helps you create complex Excel files, charts, and reports with simple natural language commands.',
    keywords: 'Excel generator, AI Excel, spreadsheet automation, data visualization, business intelligence, office automation',
    schemaType: 'WebApplication',
    schemaName: 'ExcelEasy AI Excel Generator',
    schemaDescription: 'AI-powered Excel spreadsheet generation tool that transforms natural language into professional Excel files with charts, formulas, and data analysis',
    schemaCategory: 'BusinessApplication'
  },
  workspace: {
    title: 'AI Excel Generator - Create Custom Spreadsheets | ExcelEasy',
    description: 'Generate custom Excel spreadsheets using AI. Create tables, charts, and reports with natural language. Features include pivot tables, data analysis, and automated formatting.',
    keywords: 'Excel creator, spreadsheet generator, AI tables, data analysis, business reports, automated Excel',
    schemaType: 'WebApplication',
    schemaName: 'ExcelEasy Workspace',
    schemaDescription: 'Interactive workspace for generating custom Excel spreadsheets with AI, featuring automated table creation, chart generation, and data analysis tools',
    schemaCategory: 'BusinessApplication'
  },
  functions: {
    title: 'Excel Functions & VBA Macro Generator | ExcelEasy',
    description: 'Generate complex Excel functions and VBA macros instantly with AI. Automate calculations, data processing, and repetitive tasks with natural language commands.',
    keywords: 'Excel functions, VBA macros, Excel automation, formula generator, office scripts, Excel programming',
    schemaType: 'SoftwareApplication',
    schemaName: 'ExcelEasy Function Generator',
    schemaDescription: 'Advanced Excel function and VBA macro generation tool powered by AI, enabling complex automation and calculations through natural language',
    schemaCategory: 'DeveloperApplication'
  }
}; 