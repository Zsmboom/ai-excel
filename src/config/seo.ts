type LocalizedString = {
  zh: string;
  en: string;
  de?: string;
  ko?: string;
  hi?: string;
};

type SEOConfigType = {
  title: LocalizedString;
  description: LocalizedString;
  keywords: LocalizedString;
  schemaType: SchemaType;
  schemaName?: LocalizedString;
  schemaDescription?: LocalizedString;
  schemaCategory?: string;
  image?: {
    url: string;
    alt: LocalizedString;
    width: number;
    height: number;
    type: string;
  };
};

type SchemaType = 'SoftwareApplication' | 'WebPage' | 'Blog' | 'Article' | 'ContactPage' | 'AboutPage';

export const SEOConfig: Record<string, SEOConfigType> = {
  home: {
    title: {
      zh: 'ExcelEasy - 免费AI Excel生成器 | 无需登录 | 智能办公效率提升',
      en: 'ExcelEasy - Free AI Excel Generator & Function Assistant | No Login Required',
      de: 'ExcelEasy - Kostenloser KI Excel-Generator | Keine Anmeldung erforderlich',
      ko: 'ExcelEasy - 무료 AI Excel 생성기 | 로그인 불필요',
      hi: 'ExcelEasy - मुफ्त AI एक्सेल जनरेटर | लॉगिन की आवश्यकता नहीं'
    },
    description: {
      zh: 'ExcelEasy是您的智能Excel助手，使用AI智能技术，一键将自然语言转换为专业Excel表格。ExcelEasy支持数据可视化、图表生成、VBA宏等功能，完全免费，无需登录。让Excel工作更轻松、更智能、更高效。',
      en: 'ExcelEasy is your AI Excel assistant that transforms text into professional spreadsheets. Create complex Excel files, charts, and reports with AI technology. 100% free, no login required.',
      de: 'Verwandeln Sie Ihre Daten sofort mit KI in professionelle Excel-Tabellen. 100% kostenlos, keine Anmeldung erforderlich. Erstellen Sie komplexe Excel-Dateien, Diagramme und Berichte mit einfachen Sprachbefehlen.',
      ko: 'AI를 사용하여 데이터를 즉시 전문적인 Excel 스프레드시트로 변환하세요. 100% 무료, 로그인 불필요. 간단한 자연어 명령으로 복잡한 Excel 파일, 차트, 보고서를 작성하세요.',
      hi: 'AI के साथ अपने डेटा को तुरंत पेशेवर Excel स्प्रेडशीट में बदलें। 100% मुफ्त, लॉगिन की आवश्यकता नहीं। सरल प्राकृतिक भाषा कमांड के साथ जटिल Excel फाइलें, चार्ट और रिपोर्ट बनाएं।'
    },
    keywords: {
      zh: 'ExcelEasy,Excel生成器,AI Excel,ExcelEasy在线,ExcelEasy免费,表格自动化,数据可视化,智能办公,自动化办公,Excel助手,AI办公,智能表格,在线Excel,ExcelEasy工具',
      en: 'Excel generator,AI Excel,spreadsheet automation,data visualization,business intelligence,office automation,Excel assistant,AI office,smart spreadsheet,online Excel',
      de: 'Excel-Generator,KI Excel,Tabellenautomatisierung,Datenvisualisierung,Business Intelligence,Büroautomatisierung,Excel-Assistent,KI-Büro,intelligente Tabellenkalkulation,Online-Excel',
      ko: 'Excel 생성기,AI Excel,스프레드시트 자동화,데이터 시각화,비즈니스 인텔리전스,사무 자동화,Excel 어시스턴트,AI 오피스,스마트 스프레드시트,온라인 Excel',
      hi: 'Excel जनरेटर,AI Excel,स्प्रेडशीट स्वचालन,डेटा विज़ुअलाइज़ेशन,बिजनेस इंटेलिजेंस,कार्यालय स्वचालन,Excel सहायक,AI कार्यालय,स्मार्ट स्प्रेडशीट,ऑनलाइन Excel'
    },
    schemaType: 'SoftwareApplication',
    schemaName: {
      zh: 'ExcelEasy AI Excel生成器',
      en: 'ExcelEasy AI Excel Generator',
      de: 'ExcelEasy KI Excel-Generator',
      ko: 'ExcelEasy AI Excel 생성기',
      hi: 'ExcelEasy AI Excel जनरेटर'
    },
    schemaDescription: {
      zh: 'AI驱动的Excel表格生成工具，将自然语言转换为专业Excel文件',
      en: 'AI-powered Excel spreadsheet generation tool that transforms natural language into professional Excel files',
      de: 'KI-gestütztes Excel-Tabellenkalkulationstool, das natürliche Sprache in professionelle Excel-Dateien umwandelt',
      ko: '자연어를 전문 Excel 파일로 변환하는 AI 기반 Excel 스프레드시트 생성 도구',
      hi: 'AI द्वारा संचालित Excel स्प्रेडशीट जनरेशन टूल जो प्राकृतिक भाषा को पेशेवर Excel फाइलों में बदलता है'
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
    title: {
      zh: 'AI Excel生成器 - 文本智能转Excel | 一键生成专业表格 | ExcelEasy',
      en: 'AI Excel Generator - Text to Excel | Create Professional Spreadsheets | ExcelEasy',
      de: 'KI Excel-Generator - Text zu Excel | Professionelle Tabellen erstellen | ExcelEasy',
      ko: 'AI Excel 생성기 - 텍스트를 Excel로 | 전문 스프레드시트 생성 | ExcelEasy',
      hi: 'AI Excel जनरेटर - टेक्स्ट से Excel | पेशेवर स्प्रेडशीट बनाएं | ExcelEasy'
    },
    description: {
      zh: '使用AI自然语言处理技术，快速生成专业Excel表格。支持预算表、发票、项目跟踪表和数据分析模板。完全免费，即开即用，让Excel制作更简单。',
      en: 'Create professional Excel spreadsheets with AI natural language processing. Generate budgets, invoices, project trackers, and data analysis templates instantly. Free to use with no setup required.',
      de: 'Erstellen Sie professionelle Excel-Tabellen sofort mit KI-Sprachverarbeitung. Unterstützung für Budgets, Rechnungen, Projekt-Tracker und Datenanalysevorlagen. Kostenlos nutzbar, keine Einrichtung erforderlich.',
      ko: 'AI 자연어 처리를 사용하여 전문적인 Excel 스프레드시트를 즉시 생성하세요. 예산, 송장, 프로젝트 추적기 및 데이터 분석 템플릿을 지원합니다. 무료로 사용 가능하며 설정이 필요하지 않습니다.',
      hi: 'AI प्राकृतिक भाषा प्रसंस्करण का उपयोग करके तुरंत पेशेवर Excel स्प्रेडशीट बनाएं। बजट, चालान, प्रोजेक्ट ट्रैकर और डेटा विश्लेषण टेम्पलेट के लिए समर्थन। उपयोग करने के लिए मुफ्त, कोई सेटअप आवश्यक नहीं।'
    },
    keywords: {
      zh: 'AI Excel生成,Excel自动化,数据分析,商业报表,自动化表格,专业电子表格,Excel助手,智能表格生成',
      en: 'AI Excel generation,Excel automation,data analysis,business reports,automated spreadsheets,professional spreadsheets,Excel assistant,smart table generation',
      de: 'KI Excel-Generierung,Excel-Automatisierung,Datenanalyse,Geschäftsberichte,automatisierte Tabellen,professionelle Tabellenkalkulationen,Excel-Assistent,intelligente Tabellenerstellung',
      ko: 'AI Excel 생성,Excel 자동화,데이터 분석,비즈니스 보고서,자동화된 스프레드시트,전문 스프레드시트,Excel 어시스턴트,스마트 테이블 생성',
      hi: 'AI Excel जनरेशन,Excel स्वचालन,डेटा विश्लेषण,व्यापार रिपोर्ट,स्वचालित स्प्रेडशीट,पेशेवर स्प्रेडशीट,Excel सहायक,स्मार्ट टेबल जनरेशन'
    },
    schemaType: 'SoftwareApplication',
    schemaName: {
      zh: 'ExcelEasy AI Excel生成器',
      en: 'ExcelEasy AI Excel Generator',
      de: 'ExcelEasy KI Excel-Generator',
      ko: 'ExcelEasy AI Excel 생성기',
      hi: 'ExcelEasy AI Excel जनरेटर'
    },
    schemaDescription: {
      zh: '使用AI技术将文本描述转换为专业格式的Excel表格。支持预算、发票、项目跟踪和数据分析模板。',
      en: 'Transform text descriptions into professionally formatted Excel spreadsheets using AI. Create budgets, invoices, project trackers, and data analysis templates instantly.',
      de: 'Verwandeln Sie Textbeschreibungen mit KI in professionell formatierte Excel-Tabellen. Erstellen Sie sofort Budgets, Rechnungen, Projekt-Tracker und Datenanalysevorlagen.',
      ko: 'AI를 사용하여 텍스트 설명을 전문적으로 포맷된 Excel 스프레드시트로 변환합니다. 예산, 송장, 프로젝트 추적기 및 데이터 분석 템플릿을 즉시 생성하세요.',
      hi: 'AI का उपयोग करके टेक्स्ट विवरण को पेशेवर रूप से फॉर्मेट किए गए Excel स्प्रेडशीट में बदलें। बजट, चालान, प्रोजेक्ट ट्रैकर और डेटा विश्लेषण टेम्पलेट तुरंत बनाएं।'
    },
    schemaCategory: 'BusinessApplication',
    image: {
      url: '/images/social/workspace-preview.png',
      alt: {
        zh: 'AI Excel生成器 - 文本转Excel工具',
        en: 'AI Excel Generator - Text to Excel Tool',
        de: 'KI Excel-Generator - Text zu Excel Tool',
        ko: 'AI Excel 생성기 - 텍스트를 Excel로 변환 도구',
        hi: 'AI Excel जनरेटर - टेक्स्ट से Excel टूल'
      },
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  excelFunctions: {
    title: {
      zh: 'Excel函数与VBA宏生成器 | 智能公式生成 | ExcelEasy',
      en: 'Excel Functions & VBA Macro Generator | Smart Formula Creation | ExcelEasy',
      de: 'Excel-Funktionen & VBA-Makro-Generator | Intelligente Formelerstellung | ExcelEasy',
      ko: 'Excel 함수 및 VBA 매크로 생성기 | 스마트 수식 생성 | ExcelEasy',
      hi: 'Excel फंक्शन और VBA मैक्रो जनरेटर | स्मार्ट फॉर्मूला क्रिएशन | ExcelEasy'
    },
    description: {
      zh: '使用AI技术智能生成Excel函数和VBA宏，永久免费。自动化计算、数据处理和重复任务，支持自然语言命令，无需注册即可使用。',
      en: 'Generate Excel functions and VBA macros with AI technology. Automate calculations, data processing, and repetitive tasks using natural language commands. Free to use with no registration required.',
      de: 'Generieren Sie Excel-Funktionen und VBA-Makros intelligent mit KI-Technologie, für immer kostenlos. Automatisieren Sie Berechnungen, Datenverarbeitung und sich wiederholende Aufgaben mit natürlichen Sprachbefehlen, keine Registrierung erforderlich.',
      ko: 'AI 기술을 사용하여 Excel 함수와 VBA 매크로를 지능적으로 생성하세요, 영구 무료. 자연어 명령으로 계산, 데이터 처리, 반복 작업을 자동화하세요, 등록이 필요하지 않습니다.',
      hi: 'AI तकनीक का उपयोग करके Excel फंक्शन और VBA मैक्रो को बुद्धिमानी से जनरेट करें, हमेशा के लिए मुफ्त। प्राकृतिक भाषा कमांड के साथ गणना, डेटा प्रोसेसिंग और दोहराव कार्यों को स्वचालित करें, पंजीकरण की आवश्यकता नहीं है।'
    },
    keywords: {
      zh: 'Excel函数,VBA宏,Excel自动化,公式生成器,办公脚本,Excel编程,智能函数,自动化工具',
      en: 'Excel functions,VBA macros,Excel automation,formula generator,office scripts,Excel programming,smart functions,automation tools',
      de: 'Excel-Funktionen,VBA-Makros,Excel-Automatisierung,Formelgenerator,Office-Skripte,Excel-Programmierung,intelligente Funktionen,Automatisierungstools',
      ko: 'Excel 함수,VBA 매크로,Excel 자동화,수식 생성기,오피스 스크립트,Excel 프로그래밍,스마트 함수,자동화 도구',
      hi: 'Excel फंक्शन,VBA मैक्रो,Excel स्वचालन,फॉर्मूला जनरेटर,ऑफिस स्क्रिप्ट,Excel प्रोग्रामिंग,स्मार्ट फंक्शन,स्वचालन टूल'
    },
    schemaType: 'SoftwareApplication',
    schemaName: {
      zh: 'ExcelEasy函数生成器',
      en: 'ExcelEasy Function Generator',
      de: 'ExcelEasy Funktionsgenerator',
      ko: 'ExcelEasy 함수 생성기',
      hi: 'ExcelEasy फंक्शन जनरेटर'
    },
    schemaDescription: {
      zh: 'AI驱动的高级Excel函数和VBA宏生成工具，通过自然语言实现复杂的自动化和计算',
      en: 'Advanced Excel function and VBA macro generation tool powered by AI, enabling complex automation and calculations through natural language',
      de: 'Fortgeschrittenes Excel-Funktions- und VBA-Makro-Generierungstool, das durch KI komplexe Automatisierung und Berechnungen über natürliche Sprache ermöglicht',
      ko: 'AI 기반의 고급 Excel 함수 및 VBA 매크로 생성 도구, 자연어를 통한 복잡한 자동화 및 계산 지원',
      hi: 'AI द्वारा संचालित उन्नत Excel फंक्शन और VBA मैक्रो जनरेशन टूल, प्राकृतिक भाषा के माध्यम से जटिल स्वचालन और गणना को सक्षम करता है'
    },
    schemaCategory: 'DeveloperApplication',
    image: {
      url: '/images/social/functions-preview.png',
      alt: {
        zh: 'Excel函数和VBA生成器',
        en: 'Excel Functions & VBA Generator',
        de: 'Excel-Funktionen & VBA-Generator',
        ko: 'Excel 함수 및 VBA 생성기',
        hi: 'Excel फंक्शन और VBA जनरेटर'
      },
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
      ko: '이미지를 Excel로 변환 - 이미지에서 데이터 추출 | 무료 OCR | ExcelEasy',
      hi: 'छवि को Excel में बदलने के उपकरण - AI के साथ टेबल डेटा निकालें | मुफ्त OCR | ExcelEasy'
    },
    description: {
      zh: '使用AI技术将图片中的表格和数据智能转换为可编辑的Excel文件。支持表格识别、数据提取、文字识别，完全免费，无限制使用。',
      en: 'Convert images to editable Excel files with AI technology. Extract tables, data, and text from pictures with high accuracy. Free to use with unlimited conversions, no login needed.',
      de: 'Konvertieren Sie Bilder sofort mit KI in Excel-Tabellen, 100% kostenlos. Extrahieren Sie Tabellen, Daten und Text aus Bildern in bearbeitbare Excel-Dateien.',
      ko: 'AI로 이미지를 즉시 Excel 스프레드시트로 변환, 100% 무료. 이미지에서 표, 데이터, 텍스트를 추출하여 편집 가능한 Excel 파일로 만듭니다.',
      hi: 'AI के साथ छवियों से टेबल डेटा निकालें। 100% मुफ्त, अनिश्चित उपयोग।'
    },
    keywords: {
      zh: '图片转Excel, OCR识别, 表格提取, 数据提取, 图像识别Excel',
      en: 'image to Excel, OCR Excel, table extraction, data extraction, image recognition Excel',
      de: 'Bild zu Excel, OCR Excel, Tabellenextraktion, Datenextraktion, Bilderkennung Excel',
      ko: '이미지를 Excel로, OCR Excel, 표 추출, 데이터 추출, 이미지 인식 Excel',
      hi: 'छवि को Excel में बदलने के उपकरण, OCR Excel, टेबल निकालने, डेटा निकालने, छवि पहचान Excel'
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
      ko: 'Excel 팁 및 AI 인사이트 | 업무 효율성을 위한 전문 블로그 | ExcelEasy',
      hi: 'Excel टिप्स और AI अंदाज़ | कार्यालय दक्षता के लिए पेशेवर ब्लॉग | ExcelEasy'
    },
    description: {
      zh: '发现最新Excel使用技巧、AI技术见解和数据处理最佳实践。学习如何使用ExcelEasy提高工作效率，掌握Excel和AI办公技能。',
      en: 'Discover the latest Excel tips, AI technology insights, and data processing best practices. Learn how to improve your productivity with ExcelEasy.',
      de: 'Entdecken Sie die neuesten Excel-Tipps, KI-Technologie-Einblicke und Best Practices für die Datenverarbeitung. Lernen Sie, wie Sie Ihre Produktivität mit ExcelEasy steigern können.',
      ko: '최신 Excel 팁, AI 기술 인사이트, 데이턄 처리 모범 사례를 발견하세요. ExcelEasy로 생산성을 향상시키는 방법을 배우세요.',
      hi: 'Excel टिप्स और AI अंदाज़ के बारे में जानें। ExcelEasy का उपयोग करके आपकी उत्पादकता बढ़ाने का तरीका सीखें।'
    },
    keywords: {
      zh: 'Excel技巧, AI见解, 数据处理, Excel教程, 效率提升',
      en: 'Excel tips, AI insights, data processing, Excel tutorials, productivity tips',
      de: 'Excel-Tipps, KI-Einblicke, Datenverarbeitung, Excel-Tutorials, Produktivitätstipps',
      ko: 'Excel 팁, AI 인사이트, 데이터 처리, Excel 튜토리얼, 생산성 팁',
      hi: 'Excel टिप्स, AI अंदाज़, डेटा प्रोसेसिंग, Excel ट्यूटोरियल, उत्पादकता टिप्स'
    },
    schemaType: 'Blog',
    schemaName: {
      zh: 'ExcelEasy博客',
      en: 'ExcelEasy Blog',
      de: 'ExcelEasy Blog',
      ko: 'ExcelEasy 블로그',
      hi: 'ExcelEasy ब्लॉग'
    },
    schemaDescription: {
      zh: 'Excel技巧、AI技术见解和数据处理最佳实践，帮助您提高工作效率',
      en: 'Excel tips, AI technology insights, and data processing best practices to help you work more efficiently',
      de: 'Excel-Tipps, KI-Technologie-Einblicke und Best Practices für die Datenverarbeitung, die Ihnen helfen, effizienter zu arbeiten',
      ko: 'Excel 팁, AI 기술 인사이트, 데이터 처리 모범 사례로 업무 효율성 향상',
      hi: 'Excel टिप्स, AI अंदाज़, डेटा प्रोसेसिंग बेस्ट प्रक्रियाएं, आपको कार्य को अधिक कुशलता से करने में मदद करती हैं।'
    },
    image: {
      url: '/images/social/blog-preview.png',
      alt: {
        zh: 'ExcelEasy博客',
        en: 'ExcelEasy Blog',
        de: 'ExcelEasy Blog',
        ko: 'ExcelEasy 블로그',
        hi: 'ExcelEasy ब्लॉग'
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
      ko: 'AI Excel 차트 생성기 - 스마트 데이터 시각화 | ExcelEasy',
      hi: 'AI Excel चार्ट जनरेटर - स्मार्ट डेटा विज़ुअलाइज़ेशन | ExcelEasy'
    },
    description: {
      zh: '使用AI分析Excel数据并创建专业数据可视化图表。支持柱状图、折线图、饼图、散点图等多种图表类型。完全免费，无需登录。',
      en: 'Analyze Excel data and create professional charts with AI. Generate bar, line, pie, and scatter plots instantly. Enhance data visualization with smart insights, completely free.',
      de: 'Nutzen Sie KI zur Analyse von Excel-Daten und erstellen Sie professionelle Datenvisualisierungsdiagramme. Unterstützt Balken-, Linien-, Kreis-, Streudiagramme und mehr.',
      ko: 'AI를 사용하여 Excel 데이터를 분석하고 전문적인 데이터 시각화 차트를 만드세요. 막대 차트, 선 차트, 파이 차트, 산점도 등을 지원합니다.',
      hi: 'AI के साथ Excel डेटा को विश्लेषण करें और पेशेवर डेटा विज़ुअलाइज़ेशन चार्ट बनाएं। 100% मुफ्त, लॉगिन की आवश्यकता नहीं।'
    },
    keywords: {
      zh: 'Excel图表生成, AI数据可视化, Excel数据分析, 图表制作, 数据可视化工具',
      en: 'Excel chart generator, AI data visualization, Excel data analysis, chart creation, data visualization tools',
      de: 'Excel-Diagrammgenerator, KI-Datenvisualisierung, Excel-Datenanalyse, Diagrammerstellung',
      ko: 'Excel 차트 생성기, AI 데이터 시각화, Excel 데이터 분석, 차트 제작, 데이터 시각화 도구',
      hi: 'Excel चार्ट जनरेटर, AI डेटा विज़ुअलाइज़ेशन, Excel डेटा विश्लेषण, चार्ट बनाने, डेटा विज़ुअलाइज़ेशन उपकरण'
    },
    schemaType: 'SoftwareApplication',
    schemaName: {
      zh: 'ExcelEasy AI Excel图表生成器',
      en: 'ExcelEasy AI Excel Chart Generator',
      de: 'ExcelEasy KI Excel-Diagrammgenerator',
      ko: 'ExcelEasy AI Excel 차트 생성기',
      hi: 'ExcelEasy AI Excel चार्ट जनरेटर'
    },
    schemaDescription: {
      zh: 'AI驱动的Excel图表生成工具，智能分析数据并创建专业的可视化图表',
      en: 'AI-powered Excel chart generation tool that intelligently analyzes data and creates professional visualization charts',
      de: 'KI-gestütztes Excel-Diagrammerstellungstool, das Daten intelligent analysiert und professionelle Visualisierungsdiagramme erstellt',
      ko: '데이터를 지능적으로 분석하고 전문적인 시각화 차트를 만드는 AI 기반 Excel 차트 생성 도구',
      hi: 'AI के साथ Excel चार्ट जनरेटर, डेटा को विश्लेषण करें और पेशेवर विज़ुअलाइज़ेशन चार्ट बनाएं।'
    },
    schemaCategory: 'BusinessApplication',
    image: {
      url: '/images/social/chart-preview.png',
      alt: {
        zh: 'AI Excel图表生成器',
        en: 'AI Excel Chart Generator',
        de: 'KI Excel-Diagrammgenerator',
        ko: 'AI Excel 차트 생성기',
        hi: 'AI Excel चार्ट जनरेटर'
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
      ko: '개인정보 보호정책 | 데이터 보호 약속 | ExcelEasy',
      hi: 'गोपनीयता नीति | डेटा सुरक्षा वादा | ExcelEasy'
    },
    description: {
      zh: '了解ExcelEasy如何保护您的隐私和处理您的数据。我们的隐私政策详细说明了数据收集、使用和保护措施，确保您的信息安全。',
      en: 'Learn how ExcelEasy protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection, usage, and protection practices.',
      de: 'Erfahren Sie, wie ExcelEasy Ihre Privatsphäre schützt und Ihre Daten verarbeitet. Unsere umfassende Datenschutzerklärung erläutert unsere Praktiken.',
      ko: 'ExcelEasy가 귀하의 개인정보를 보호하고 데이터를 처리하는 방법을 알아보세요. 당사의 개인정보 보호정책은 데이터 수집, 사용 및 보호 방침을 설명합니다.',
      hi: 'ExcelEasy को गोपनीयता और डेटा को कैसे सुरक्षित करते हैं और कैसे उपयोग करते हैं जानें। हमारी गोपनीयता नीति हमारी डेटा संग्रह, उपयोग और सुरक्षा प्रक्रियाएं स्पष्ट करती है।'
    },
    keywords: {
      zh: '隐私政策, 数据保护, 用户隐私, GDPR合规',
      en: 'privacy policy, data protection, user privacy, GDPR compliance',
      de: 'Datenschutzerklärung, Datenschutz, Benutzerprivatsphäre, DSGVO-Konformität',
      ko: '개인정보 보호정책, 데이터 보호, 사용자 개인정보, GDPR 준수',
      hi: 'गोपनीयता नीति, डेटा सुरक्षा, उपयोगकर्ता गोपनीयता, GDPR कन्फोर्मिटी'
    },
    schemaType: 'WebPage',
    schemaName: {
      zh: 'ExcelEasy隐私政策',
      en: 'ExcelEasy Privacy Policy',
      de: 'ExcelEasy Datenschutzerklärung',
      ko: 'ExcelEasy 개인정보 보호정책',
      hi: 'ExcelEasy गोपनीयता नीति'
    },
    schemaDescription: {
      zh: '详细说明ExcelEasy如何处理和保护用户数据的隐私政策',
      en: 'Comprehensive privacy policy detailing how ExcelEasy handles and protects user data',
      de: 'Umfassende Datenschutzerklärung, die erläutert, wie ExcelEasy Benutzerdaten verarbeitet und schützt',
      ko: 'ExcelEasy가 사용자 데이터를 처리하고 보호하는 방법을 자세히 설명하는 개인정보 보호정책',
      hi: 'गोपनीयता नीति जो ExcelEasy को उपयोगकर्ता डेटा कैसे संग्रह करते हैं और कैसे सुरक्षित करते हैं विस्तृत वर्णन करती है।'
    },
    image: {
      url: '/images/social/privacy-preview.png',
      alt: {
        zh: 'ExcelEasy隐私政策',
        en: 'ExcelEasy Privacy Policy',
        de: 'ExcelEasy Datenschutzerklärung',
        ko: 'ExcelEasy 개인정보 보호정책',
        hi: 'ExcelEasy गोपनीयता नीति'
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
      ko: '문의하기 | 도움말 및 지원 | ExcelEasy',
      hi: 'संपर्क करें | मदद और समर्थन प्राप्त करें | ExcelEasy'
    },
    description: {
      zh: '随时联系ExcelEasy团队获取帮助。我们提供产品咨询、技术支持和功能反馈等服务，期待为您解答问题。',
      en: 'Get in touch with the ExcelEasy team. We\'re here to help with your questions, feedback, and support needs regarding our AI Excel generation tools.',
      de: 'Kontaktieren Sie das ExcelEasy-Team. Wir helfen Ihnen bei Fragen, Feedback und Unterstützung zu unseren KI-Excel-Generierungstools.',
      ko: 'ExcelEasy 팀에게 문의하세요. AI Excel 생성 도구에 대한 질문, 피드백, 지원이 필요하시면 도와드리겠습니다.',
      hi: 'ExcelEasy टीम को संपर्क करें। हम आपको उपयोग करते हुए और उपयोग करते हुए आपकी समस्याओं और समर्थन की आवश्यकताओं के बारे में आपकी मदद करने के लिए यहां हैं।'
    },
    keywords: {
      zh: '联系ExcelEasy, 客户支持, 技术支持, 帮助中心',
      en: 'contact ExcelEasy, customer support, technical support, help desk',
      de: 'ExcelEasy kontaktieren, Kundensupport, technischer Support, Helpdesk',
      ko: 'ExcelEasy 문의, 고객 지원, 기술 지원, 헬프 데스크',
      hi: 'ExcelEasy संपर्क करें, ग्राहक समर्थन, तकनीकी समर्थन, हेल्प डेस्क'
    },
    schemaType: 'ContactPage',
    schemaName: {
      zh: 'ExcelEasy联系页面',
      en: 'ExcelEasy Contact Page',
      de: 'ExcelEasy Kontaktseite',
      ko: 'ExcelEasy 문의 페이지',
      hi: 'ExcelEasy संपर्क पेज'
    },
    schemaDescription: {
      zh: 'ExcelEasy的联系信息和用户支持渠道',
      en: 'Contact information and support channels for ExcelEasy users',
      de: 'Kontaktinformationen und Support-Kanäle für ExcelEasy-Benutzer',
      ko: 'ExcelEasy 사용자를 위한 연락처 정보 및 지원 채널',
      hi: 'ExcelEasy के संपर्क और उपयोगकर्ता समर्थन चैनल'
    },
    image: {
      url: '/images/social/contact-preview.png',
      alt: {
        zh: '联系ExcelEasy支持',
        en: 'Contact ExcelEasy Support',
        de: 'ExcelEasy Support kontaktieren',
        ko: 'ExcelEasy 지원팀에 문의',
        hi: 'ExcelEasy समर्थन टीम संपर्क करें'
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
      ko: '페이지를 찾을 수 없음 | 404 오류 | ExcelEasy',
      hi: 'पेज नहीं मिला | 404 त्रुटि | ExcelEasy'
    },
    description: {
      zh: '抱歉，您访问的页面不存在。请检查网址是否正确，或返回首页继续使用我们的AI Excel生成工具。',
      en: 'The page you are looking for could not be found. Please check the URL or return to our homepage to continue using our AI Excel generation tools.',
      de: 'Die gesuchte Seite wurde nicht gefunden. Bitte überprüfen Sie die URL oder kehren Sie zu unserer Homepage zurück.',
      ko: '찾으시는 페이지를 찾을 수 없습니다. URL을 확인하시거나 홈페이지로 돌아가 AI Excel 생성 도구를 계속 사용해주세요.',
      hi: 'वांछित पेज नहीं मिला। कृपया URL को जाँचें या ExcelEasy के होमपेज पर वापस जाएं और हमारे AI Excel जनरेशन टूल्स का उपयोग जारी रखें।'
    },
    keywords: {
      zh: '404错误, 页面未找到, 错误页面',
      en: '404 error, page not found, error page',
      de: '404 Fehler, Seite nicht gefunden, Fehlerseite',
      ko: '404 오류, 페이지를 찾을 수 없음, 오류 페이지',
      hi: '404 त्रुटि, पेज नहीं मिला, त्रुटि पेज'
    },
    schemaType: 'WebPage',
    schemaName: {
      zh: 'ExcelEasy 404页面',
      en: 'ExcelEasy 404 Page',
      de: 'ExcelEasy 404 Seite',
      ko: 'ExcelEasy 404 페이지',
      hi: 'ExcelEasy 404 पेज'
    },
    schemaDescription: {
      zh: 'ExcelEasy网站的404错误页面',
      en: 'Page not found error page for ExcelEasy website',
      de: 'Seite nicht gefunden Fehlerseite für ExcelEasy Website',
      ko: 'ExcelEasy 웹사이트의 페이지를 찾을 수 없음 오류 페이지',
      hi: 'ExcelEasy वेबसाइट के 404 त्रुटि पेज'
    },
    image: {
      url: '/images/social/404-preview.png',
      alt: {
        zh: '页面未找到',
        en: 'Page Not Found',
        de: 'Seite nicht gefunden',
        ko: '페이지를 찾을 수 없음',
        hi: 'पेज नहीं मिला'
      },
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  },
  about: {
    title: {
      zh: '关于ExcelEasy | AI智能Excel生成工具背后的故事',
      en: 'About ExcelEasy | The Story Behind AI Excel Generation Tool',
      de: 'Über ExcelEasy | Die Geschichte hinter dem KI Excel-Generierungstool',
      ko: 'ExcelEasy 소개 | AI Excel 생성 도구의 이야기',
      hi: 'ExcelEasy के बारे में | AI Excel जनरेशन टूल की कहानी'
    },
    description: {
      zh: '了解ExcelEasy如何通过AI技术革新Excel工作方式。探索我们如何将自然语言转换为专业电子表格，提升办公效率。',
      en: 'Discover how ExcelEasy revolutionizes Excel workflows with AI technology. Explore how we transform natural language into professional spreadsheets to boost office efficiency.',
      de: 'Erfahren Sie, wie ExcelEasy Excel-Workflows mit KI-Technologie revolutioniert. Entdecken Sie, wie wir natürliche Sprache in professionelle Tabellenkalkulationen umwandeln.',
      ko: 'ExcelEasy가 AI 기술로 Excel 워크플로우를 혁신하는 방법을 알아보세요. 자연어를 전문 스프레드시트로 변환하여 업무 효율성을 높이는 방법을 살펴보세요.',
      hi: 'जानें कैसे ExcelEasy AI तकनीक के साथ Excel कार्यप्रवाह को क्रांतिकारी बनाता है। देखें कैसे हम प्राकृतिक भाषा को पेशेवर स्प्रेडशीट में बदलते हैं।'
    },
    keywords: {
      zh: 'ExcelEasy简介,AI Excel工具,表格自动化,Excel生成平台,智能办公工具',
      en: 'about ExcelEasy,AI Excel tool,spreadsheet automation,Excel generation platform,smart office tools',
      de: 'über ExcelEasy,KI Excel-Tool,Tabellenautomatisierung,Excel-Generierungsplattform,intelligente Bürowerkzeuge',
      ko: 'ExcelEasy 소개,AI Excel 도구,스프레드시트 자동화,Excel 생성 플랫폼,스마트 오피스 도구',
      hi: 'ExcelEasy परिचय,AI Excel टूल,स्प्रेडशीट स्वचालन,Excel जनरेशन प्लेटफॉर्म,स्मार्ट ऑफिस टूल्स'
    },
    schemaType: 'AboutPage',
    schemaName: {
      zh: '关于ExcelEasy',
      en: 'About ExcelEasy',
      de: 'Über ExcelEasy',
      ko: 'ExcelEasy 소개',
      hi: 'ExcelEasy के बारे में'
    },
    schemaDescription: {
      zh: '了解ExcelEasy - 将自然语言转换为专业电子表格的AI驱动Excel生成工具',
      en: 'Learn about ExcelEasy - the AI-powered Excel generation tool that transforms natural language into professional spreadsheets',
      de: 'Erfahren Sie mehr über ExcelEasy - das KI-gestützte Excel-Generierungstool, das natürliche Sprache in professionelle Tabellenkalkulationen umwandelt',
      ko: 'ExcelEasy 알아보기 - 자연어를 전문 스프레드시트로 변환하는 AI 기반 Excel 생성 도구',
      hi: 'ExcelEasy के बारे में जानें - AI संचालित Excel जनरेशन टूल जो प्राकृतिक भाषा को पेशेवर स्प्रेडशीट में बदलता है'
    },
    image: {
      url: '/images/social/about-preview.png',
      alt: {
        zh: '关于ExcelEasy',
        en: 'About ExcelEasy',
        de: 'Über ExcelEasy',
        ko: 'ExcelEasy 소개',
        hi: 'ExcelEasy के बारे में'
      },
      width: 1200,
      height: 630,
      type: 'image/png'
    }
  }
}; 