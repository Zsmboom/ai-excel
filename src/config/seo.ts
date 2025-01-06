import i18next from 'i18next';

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
    get title() { return i18next.t('seo.home.title') },
    get description() { return i18next.t('seo.home.description') },
    get keywords() { return i18next.t('seo.home.keywords') },
    schemaType: 'WebApplication',
    get schemaName() { return i18next.t('seo.home.schemaName') },
    get schemaDescription() { return i18next.t('seo.home.schemaDescription') },
    schemaCategory: 'BusinessApplication'
  },
  workspace: {
    get title() { return i18next.t('seo.workspace.title') },
    get description() { return i18next.t('seo.workspace.description') },
    get keywords() { return i18next.t('seo.workspace.keywords') },
    schemaType: 'WebApplication',
    get schemaName() { return i18next.t('seo.workspace.schemaName') },
    get schemaDescription() { return i18next.t('seo.workspace.schemaDescription') },
    schemaCategory: 'BusinessApplication'
  },
  functions: {
    get title() { return i18next.t('seo.functions.title') },
    get description() { return i18next.t('seo.functions.description') },
    get keywords() { return i18next.t('seo.functions.keywords') },
    schemaType: 'SoftwareApplication',
    get schemaName() { return i18next.t('seo.functions.schemaName') },
    get schemaDescription() { return i18next.t('seo.functions.schemaDescription') },
    schemaCategory: 'DeveloperApplication'
  }
}; 