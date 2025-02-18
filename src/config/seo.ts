import { SchemaType } from '../types/schema';

interface SEOConfigType {
  title: {
    zh: string;
    en: string;
    de?: string;
    ko?: string;
  };
  description: {
    zh: string;
    en: string;
    de?: string;
    ko?: string;
  };
  keywords: {
    zh: string;
    en: string;
    de?: string;
    ko?: string;
  };
  schemaType: SchemaType;
  schemaName: {
    zh: string;
    en: string;
    de?: string;
    ko?: string;
  };
  schemaDescription: {
    zh: string;
    en: string;
    de?: string;
    ko?: string;
  };
  schemaCategory?: string;
  image: {
    url: string;
    alt: {
      zh: string;
      en: string;
      de?: string;
      ko?: string;
    };
    width: number;
    height: number;
    type: string;
  };
}

export const SEOConfig: Record<string, SEOConfigType> = {
  home: {
    title: {
      zh: 'ExcelEasy - 免费AI智能Excel生成工具 | 自动化办公效率提升',
      en: 'ExcelEasy - AI-Powered Excel Generation Tool | Boost Office Efficiency',
      de: 'ExcelEasy - KI-gestützte Excel-Generierung | Büroeffizienz steigern',
      ko: 'ExcelEasy - AI 기반 Excel 생성 도구 | 업무 효율성 향상'
    },
    description: {
      zh: '使用AI智能技术，一键将自然语言转换为专业Excel表格。支持数据可视化、图表生成、VBA宏等功能，完全免费，无需登录。让Excel工作更轻松、更智能、更高效。',
      en: 'Transform your data into professional Excel spreadsheets instantly with AI. 100% free to use, no login required. Create complex Excel files, charts, and reports with simple natural language commands.',
      de: 'Verwandeln Sie Ihre Daten sofort mit KI in professionelle Excel-Tabellen. 100% kostenlos, keine Anmeldung erforderlich. Erstellen Sie komplexe Excel-Dateien, Diagramme und Berichte mit einfachen Sprachbefehlen.',
      ko: 'AI를 사용하여 데이터를 즉시 전문적인 Excel 스프레드시트로 변환하세요. 100% 무료, 로그인 불필요. 간단한 자연어 명령으로 복잡한 Excel 파일, 차트, 보고서를 작성하세요.'
    },
    keywords: {
      zh: 'Excel生成器, AI Excel, 表格自动化, 数据可视化, 智能办公, 自动化办公',
      en: 'Excel generator, AI Excel, spreadsheet automation, data visualization, business intelligence, office automation',
      de: 'Excel-Generator, KI Excel, Tabellenautomatisierung, Datenvisualisierung, Business Intelligence, Büroautomatisierung',
      ko: 'Excel 생성기, AI Excel, 스프레드시트 자동화, 데이터 시각화, 비즈니스 인텔리전스, 사무 자동화'
    },
    schemaType: 'SoftwareApplication',
    schemaName: {
      zh: 'ExcelEasy AI Excel生成器',
      en: 'ExcelEasy AI Excel Generator',
      de: 'ExcelEasy KI Excel-Generator',
      ko: 'ExcelEasy AI Excel 생성기'
    },
    schemaDescription: {
      zh: 'AI驱动的Excel表格生成工具，将自然语言转换为专业的Excel文件，支持图表、公式和数据分析',
      en: 'AI-powered Excel spreadsheet generation tool that transforms natural language into professional Excel files with charts, formulas, and data analysis',
      de: 'KI-gestütztes Excel-Tabellenkalkulationstool, das natürliche Sprache in professionelle Excel-Dateien mit Diagrammen, Formeln und Datenanalyse umwandelt',
      ko: '자연어를 차트, 수식, 데이터 분석이 포함된 전문 Excel 파일로 변환하는 AI 기반 Excel 스프레드시트 생성 도구'
    },
    schemaCategory: 'BusinessApplication',
    image: {
      url: '/images/social/home-preview.png',
      alt: {
        zh: 'ExcelEasy - AI Excel生成器',
        en: 'ExcelEasy - AI Excel Generator',
        de: 'ExcelEasy - KI Excel-Generator',
        ko: 'ExcelEasy - AI Excel 생성기'
      },
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  workspace: {
    title: 'AI Excel生成器 - 文本智能转Excel | 一键生成专业表格 | ExcelEasy',
    description: '使用AI自然语言处理技术，快速生成专业Excel表格。支持预算表、发票、项目跟踪表和数据分析模板。完全免费，即开即用，让Excel制作更简单。',
    keywords: 'AI Excel生成, Excel自动化, 数据分析, 商业报表, 自动化表格, 专业电子表格',
    schemaType: 'SoftwareApplication',
    schemaName: 'AI Excel Generator',
    schemaDescription: 'Transform text descriptions into professionally formatted Excel spreadsheets using AI. Create budgets, invoices, project trackers, and data analysis templates instantly.',
    schemaCategory: 'BusinessApplication',
    image: {
      url: '/images/social/workspace-preview.png',
      alt: 'AI Excel Generator - Text to Excel Transformation',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  excelFunctions: {
    title: 'Excel函数与VBA宏生成器 | 智能公式生成 | ExcelEasy',
    description: '使用AI技术智能生成Excel函数和VBA宏，永久免费。自动化计算、数据处理和重复任务，支持自然语言命令，无需注册即可使用。',
    keywords: 'Excel函数, VBA宏, Excel自动化, 公式生成器, 办公脚本, Excel编程',
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
    title: {
      zh: '图片转Excel工具 - AI智能提取表格数据 | 免费OCR | ExcelEasy',
      en: 'Image to Excel Converter - Extract Data from Images | Free OCR | ExcelEasy',
      de: 'Bild-zu-Excel-Konverter - Daten aus Bildern extrahieren | Kostenlose OCR | ExcelEasy',
      ko: '이미지를 Excel로 변환 - 이미지에서 데이터 추출 | 무료 OCR | ExcelEasy'
    },
    description: {
      zh: '使用AI技术将图片中的表格和数据智能转换为可编辑的Excel文件。支持表格识别、数据提取、文字识别，完全免费，无限制使用。',
      en: 'Convert images to Excel spreadsheets instantly with AI, 100% free. Extract tables, data, and text from images into editable Excel files. No login required, unlimited usage.',
      de: 'Konvertieren Sie Bilder sofort mit KI in Excel-Tabellen, 100% kostenlos. Extrahieren Sie Tabellen, Daten und Text aus Bildern in bearbeitbare Excel-Dateien.',
      ko: 'AI로 이미지를 즉시 Excel 스프레드시트로 변환, 100% 무료. 이미지에서 표, 데이터, 텍스트를 추출하여 편집 가능한 Excel 파일로 만듭니다.'
    },
    keywords: {
      zh: '图片转Excel, OCR识别, 表格提取, 数据提取, 图像识别Excel',
      en: 'image to Excel, OCR Excel, table extraction, data extraction, image recognition Excel',
      de: 'Bild zu Excel, OCR Excel, Tabellenextraktion, Datenextraktion, Bilderkennung Excel',
      ko: '이미지를 Excel로, OCR Excel, 표 추출, 데이터 추출, 이미지 인식 Excel'
    },
    schemaType: 'SoftwareApplication',
    schemaName: {
      zh: 'ExcelEasy图片转Excel工具',
      en: 'ExcelEasy Image to Excel Converter',
      de: 'ExcelEasy Bild-zu-Excel-Konverter',
      ko: 'ExcelEasy 이미지 Excel 변환기'
    },
    schemaDescription: {
      zh: 'AI驱动的工具，可将包含表格和数据的图片转换为可编辑的Excel表格',
      en: 'AI-powered tool that converts images containing tables and data into editable Excel spreadsheets',
      de: 'KI-gestütztes Tool, das Bilder mit Tabellen und Daten in bearbeitbare Excel-Tabellen umwandelt',
      ko: '표와 데이터가 포함된 이미지를 편집 가능한 Excel 스프레드시트로 변환하는 AI 기반 도구'
    },
    schemaCategory: 'BusinessApplication',
    image: {
      url: '/images/social/pic-to-excel-preview.png',
      alt: {
        zh: '图片转Excel转换器',
        en: 'Image to Excel Converter',
        de: 'Bild-zu-Excel-Konverter',
        ko: '이미지 Excel 변환기'
      },
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  blog: {
    title: {
      zh: 'Excel技巧与AI洞察 | 提升办公效率的专业博客 | ExcelEasy',
      en: 'Excel Tips & AI Insights | Professional Blog for Office Efficiency | ExcelEasy',
      de: 'Excel-Tipps & KI-Einblicke | Professioneller Blog für Büroeffizienz | ExcelEasy',
      ko: 'Excel 팁 및 AI 인사이트 | 업무 효율성을 위한 전문 블로그 | ExcelEasy'
    },
    description: {
      zh: '发现最新Excel使用技巧、AI技术见解和数据处理最佳实践。学习如何使用ExcelEasy提高工作效率，掌握Excel和AI办公技能。',
      en: 'Discover the latest Excel tips, AI technology insights, and data processing best practices. Learn how to improve your productivity with ExcelEasy.',
      de: 'Entdecken Sie die neuesten Excel-Tipps, KI-Technologie-Einblicke und Best Practices für die Datenverarbeitung. Lernen Sie, wie Sie Ihre Produktivität mit ExcelEasy steigern können.',
      ko: '최신 Excel 팁, AI 기술 인사이트, 데이터 처리 모범 사례를 발견하세요. ExcelEasy로 생산성을 향상시키는 방법을 배우세요.'
    },
    keywords: {
      zh: 'Excel技巧, AI见解, 数据处理, Excel教程, 效率提升',
      en: 'Excel tips, AI insights, data processing, Excel tutorials, productivity tips',
      de: 'Excel-Tipps, KI-Einblicke, Datenverarbeitung, Excel-Tutorials, Produktivitätstipps',
      ko: 'Excel 팁, AI 인사이트, 데이터 처리, Excel 튜토리얼, 생산성 팁'
    },
    schemaType: 'Blog',
    schemaName: {
      zh: 'ExcelEasy博客',
      en: 'ExcelEasy Blog',
      de: 'ExcelEasy Blog',
      ko: 'ExcelEasy 블로그'
    },
    schemaDescription: {
      zh: 'Excel技巧、AI技术见解和数据处理最佳实践，帮助您提高工作效率',
      en: 'Excel tips, AI technology insights, and data processing best practices to help you work more efficiently',
      de: 'Excel-Tipps, KI-Technologie-Einblicke und Best Practices für die Datenverarbeitung, die Ihnen helfen, effizienter zu arbeiten',
      ko: 'Excel 팁, AI 기술 인사이트, 데이터 처리 모범 사례로 업무 효율성 향상'
    },
    image: {
      url: '/images/social/blog-preview.png',
      alt: {
        zh: 'ExcelEasy博客',
        en: 'ExcelEasy Blog',
        de: 'ExcelEasy Blog',
        ko: 'ExcelEasy 블로그'
      },
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  aiExcelChart: {
    title: {
      zh: 'AI智能Excel图表生成器 | 专业数据可视化工具 | ExcelEasy',
      en: 'AI Excel Chart Generator - Smart Data Visualization | ExcelEasy',
      de: 'KI Excel-Diagrammgenerator - Intelligente Datenvisualisierung | ExcelEasy',
      ko: 'AI Excel 차트 생성기 - 스마트 데이터 시각화 | ExcelEasy'
    },
    description: {
      zh: '使用AI分析Excel数据并创建专业数据可视化图表。支持柱状图、折线图、饼图、散点图等多种图表类型。完全免费，无需登录。',
      en: 'Use AI to analyze Excel data and create professional data visualization charts. Support bar charts, line charts, pie charts, scatter plots, and more. Free to use, no login required.',
      de: 'Nutzen Sie KI zur Analyse von Excel-Daten und erstellen Sie professionelle Datenvisualisierungsdiagramme. Unterstützt Balken-, Linien-, Kreis-, Streudiagramme und mehr.',
      ko: 'AI를 사용하여 Excel 데이터를 분석하고 전문적인 데이터 시각화 차트를 만드세요. 막대 차트, 선 차트, 파이 차트, 산점도 등을 지원합니다.'
    },
    keywords: {
      zh: 'Excel图表生成, AI数据可视化, Excel数据分析, 图表制作, 数据可视化工具',
      en: 'Excel chart generator, AI data visualization, Excel data analysis, chart creation, data visualization tools',
      de: 'Excel-Diagrammgenerator, KI-Datenvisualisierung, Excel-Datenanalyse, Diagrammerstellung',
      ko: 'Excel 차트 생성기, AI 데이터 시각화, Excel 데이터 분석, 차트 제작, 데이터 시각화 도구'
    },
    schemaType: 'SoftwareApplication',
    schemaName: {
      zh: 'ExcelEasy AI Excel图表生成器',
      en: 'ExcelEasy AI Excel Chart Generator',
      de: 'ExcelEasy KI Excel-Diagrammgenerator',
      ko: 'ExcelEasy AI Excel 차트 생성기'
    },
    schemaDescription: {
      zh: 'AI驱动的Excel图表生成工具，智能分析数据并创建专业的可视化图表',
      en: 'AI-powered Excel chart generation tool that intelligently analyzes data and creates professional visualization charts',
      de: 'KI-gestütztes Excel-Diagrammerstellungstool, das Daten intelligent analysiert und professionelle Visualisierungsdiagramme erstellt',
      ko: '데이터를 지능적으로 분석하고 전문적인 시각화 차트를 만드는 AI 기반 Excel 차트 생성 도구'
    },
    schemaCategory: 'BusinessApplication',
    image: {
      url: '/images/social/chart-preview.png',
      alt: {
        zh: 'AI Excel图表生成器',
        en: 'AI Excel Chart Generator',
        de: 'KI Excel-Diagrammgenerator',
        ko: 'AI Excel 차트 생성기'
      },
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  privacy: {
    title: {
      zh: '隐私政策 | 数据保护承诺 | ExcelEasy',
      en: 'Privacy Policy | Data Protection Commitment | ExcelEasy',
      de: 'Datenschutzerklärung | Datenschutzverpflichtung | ExcelEasy',
      ko: '개인정보 보호정책 | 데이터 보호 약속 | ExcelEasy'
    },
    description: {
      zh: '了解ExcelEasy如何保护您的隐私和处理您的数据。我们的隐私政策详细说明了数据收集、使用和保护措施，确保您的信息安全。',
      en: 'Learn how ExcelEasy protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection, usage, and protection practices.',
      de: 'Erfahren Sie, wie ExcelEasy Ihre Privatsphäre schützt und Ihre Daten verarbeitet. Unsere umfassende Datenschutzerklärung erläutert unsere Praktiken.',
      ko: 'ExcelEasy가 귀하의 개인정보를 보호하고 데이터를 처리하는 방법을 알아보세요. 당사의 개인정보 보호정책은 데이터 수집, 사용 및 보호 방침을 설명합니다.'
    },
    keywords: {
      zh: '隐私政策, 数据保护, 用户隐私, GDPR合规',
      en: 'privacy policy, data protection, user privacy, GDPR compliance',
      de: 'Datenschutzerklärung, Datenschutz, Benutzerprivatsphäre, DSGVO-Konformität',
      ko: '개인정보 보호정책, 데이터 보호, 사용자 개인정보, GDPR 준수'
    },
    schemaType: 'WebPage',
    schemaName: {
      zh: 'ExcelEasy隐私政策',
      en: 'ExcelEasy Privacy Policy',
      de: 'ExcelEasy Datenschutzerklärung',
      ko: 'ExcelEasy 개인정보 보호정책'
    },
    schemaDescription: {
      zh: '详细说明ExcelEasy如何处理和保护用户数据的隐私政策',
      en: 'Comprehensive privacy policy detailing how ExcelEasy handles and protects user data',
      de: 'Umfassende Datenschutzerklärung, die erläutert, wie ExcelEasy Benutzerdaten verarbeitet und schützt',
      ko: 'ExcelEasy가 사용자 데이터를 처리하고 보호하는 방법을 자세히 설명하는 개인정보 보호정책'
    },
    image: {
      url: '/images/social/privacy-preview.png',
      alt: {
        zh: 'ExcelEasy隐私政策',
        en: 'ExcelEasy Privacy Policy',
        de: 'ExcelEasy Datenschutzerklärung',
        ko: 'ExcelEasy 개인정보 보호정책'
      },
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  contact: {
    title: {
      zh: '联系我们 | 获取帮助与支持 | ExcelEasy',
      en: 'Contact Us | Get Help & Support | ExcelEasy',
      de: 'Kontakt | Hilfe & Support | ExcelEasy',
      ko: '문의하기 | 도움말 및 지원 | ExcelEasy'
    },
    description: {
      zh: '随时联系ExcelEasy团队获取帮助。我们提供产品咨询、技术支持和功能反馈等服务，期待为您解答问题。',
      en: 'Get in touch with the ExcelEasy team. We\'re here to help with your questions, feedback, and support needs regarding our AI Excel generation tools.',
      de: 'Kontaktieren Sie das ExcelEasy-Team. Wir helfen Ihnen bei Fragen, Feedback und Unterstützung zu unseren KI-Excel-Generierungstools.',
      ko: 'ExcelEasy 팀에게 문의하세요. AI Excel 생성 도구에 대한 질문, 피드백, 지원이 필요하시면 도와드리겠습니다.'
    },
    keywords: {
      zh: '联系ExcelEasy, 客户支持, 技术支持, 帮助中心',
      en: 'contact ExcelEasy, customer support, technical support, help desk',
      de: 'ExcelEasy kontaktieren, Kundensupport, technischer Support, Helpdesk',
      ko: 'ExcelEasy 문의, 고객 지원, 기술 지원, 헬프 데스크'
    },
    schemaType: 'ContactPage',
    schemaName: {
      zh: 'ExcelEasy联系页面',
      en: 'ExcelEasy Contact Page',
      de: 'ExcelEasy Kontaktseite',
      ko: 'ExcelEasy 문의 페이지'
    },
    schemaDescription: {
      zh: 'ExcelEasy的联系信息和用户支持渠道',
      en: 'Contact information and support channels for ExcelEasy users',
      de: 'Kontaktinformationen und Support-Kanäle für ExcelEasy-Benutzer',
      ko: 'ExcelEasy 사용자를 위한 연락처 정보 및 지원 채널'
    },
    image: {
      url: '/images/social/contact-preview.png',
      alt: {
        zh: '联系ExcelEasy支持',
        en: 'Contact ExcelEasy Support',
        de: 'ExcelEasy Support kontaktieren',
        ko: 'ExcelEasy 지원팀에 문의'
      },
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  notFound: {
    title: {
      zh: '页面未找到 | 404错误 | ExcelEasy',
      en: 'Page Not Found | 404 Error | ExcelEasy',
      de: 'Seite nicht gefunden | 404 Fehler | ExcelEasy',
      ko: '페이지를 찾을 수 없음 | 404 오류 | ExcelEasy'
    },
    description: {
      zh: '抱歉，您访问的页面不存在。请检查网址是否正确，或返回首页继续使用我们的AI Excel生成工具。',
      en: 'The page you are looking for could not be found. Please check the URL or return to our homepage to continue using our AI Excel generation tools.',
      de: 'Die gesuchte Seite wurde nicht gefunden. Bitte überprüfen Sie die URL oder kehren Sie zu unserer Homepage zurück.',
      ko: '찾으시는 페이지를 찾을 수 없습니다. URL을 확인하시거나 홈페이지로 돌아가 AI Excel 생성 도구를 계속 사용해주세요.'
    },
    keywords: {
      zh: '404错误, 页面未找到, 错误页面',
      en: '404 error, page not found, error page',
      de: '404 Fehler, Seite nicht gefunden, Fehlerseite',
      ko: '404 오류, 페이지를 찾을 수 없음, 오류 페이지'
    },
    schemaType: 'WebPage',
    schemaName: {
      zh: 'ExcelEasy 404页面',
      en: 'ExcelEasy 404 Page',
      de: 'ExcelEasy 404 Seite',
      ko: 'ExcelEasy 404 페이지'
    },
    schemaDescription: {
      zh: 'ExcelEasy网站的404错误页面',
      en: 'Page not found error page for ExcelEasy website',
      de: 'Seite nicht gefunden Fehlerseite für ExcelEasy Website',
      ko: 'ExcelEasy 웹사이트의 페이지를 찾을 수 없음 오류 페이지'
    },
    image: {
      url: '/images/social/404-preview.png',
      alt: {
        zh: '页面未找到',
        en: 'Page Not Found',
        de: 'Seite nicht gefunden',
        ko: '페이지를 찾을 수 없음'
      },
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  about: {
    title: '关于ExcelEasy | AI智能Excel生成工具背后的故事',
    description: '了解ExcelEasy如何通过AI技术革新Excel工作方式。探索我们如何将自然语言转换为专业电子表格，提升办公效率。',
    keywords: 'ExcelEasy简介, AI Excel工具, 表格自动化, Excel生成平台, 智能办公工具',
    schemaType: 'AboutPage',
    schemaName: 'About ExcelEasy',
    schemaDescription: 'Learn about ExcelEasy - the AI-powered Excel generation tool that transforms natural language into professional spreadsheets',
    image: {
      url: '/images/social/about-preview.png',
      alt: 'About ExcelEasy',
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  }
}; 