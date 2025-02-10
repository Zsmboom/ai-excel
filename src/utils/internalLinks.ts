// 定义所有内部链接路径
export const INTERNAL_PATHS = {
  HOME: '/',
  EXCEL_GENERATOR: '/ai-excel-generator',
  EXCEL_CHART: '/ai-excel-chart',
  BLOG: '/blog',
  CONTACT: '/contact',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;

// 定义相关页面链接
export const RELATED_PAGES: Record<string, string[]> = {
  'ai-excel-generator': [
    INTERNAL_PATHS.EXCEL_CHART,
    INTERNAL_PATHS.BLOG
  ],
  'ai-excel-chart': [
    INTERNAL_PATHS.EXCEL_GENERATOR,
    INTERNAL_PATHS.BLOG
  ],
  'blog': [
    INTERNAL_PATHS.EXCEL_GENERATOR,
    INTERNAL_PATHS.EXCEL_CHART
  ],
  'contact': [
    INTERNAL_PATHS.ABOUT,
    INTERNAL_PATHS.PRIVACY,
    INTERNAL_PATHS.TERMS
  ]
};

// 获取相关页面链接
export const getRelatedPages = (currentPath: string): string[] => {
  const normalizedPath = currentPath.replace(/^\/[a-z]{2}\//, '/');
  const key = Object.keys(RELATED_PAGES).find(k => normalizedPath.includes(k));
  return key ? RELATED_PAGES[key] : [];
};

// 生成面包屑导航数据
export const generateBreadcrumbs = (path: string) => {
  const parts = path.split('/').filter(Boolean);
  const breadcrumbs = [];
  let currentPath = '';

  for (const part of parts) {
    if (['en', 'zh', 'ko', 'de', 'hi'].includes(part)) continue;
    
    currentPath += `/${part}`;
    breadcrumbs.push({
      name: part.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
      item: currentPath
    });
  }

  return breadcrumbs;
};

// 检查是否是内部链接
export const isInternalLink = (path: string): boolean => {
  const normalizedPath = path.replace(/^\/[a-z]{2}\//, '/');
  return Object.values(INTERNAL_PATHS).includes(normalizedPath as any);
}; 