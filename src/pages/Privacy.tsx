import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield } from 'lucide-react';
import { PageSEO } from '../components/seo/PageSEO';

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO 
        page="privacy"
        lastModified="2025-02-08"
      />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t('privacy.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('privacy.subtitle')}
              </p>
            </div>

            <div className="prose prose-blue max-w-none">
              <section className="mb-12">
                <h2>{t('privacy.dataCollection.title')}</h2>
                <p>{t('privacy.dataCollection.description')}</p>
                <ul>
                  <li>{t('privacy.dataCollection.items.usage')}</li>
                  <li>{t('privacy.dataCollection.items.technical')}</li>
                  <li>{t('privacy.dataCollection.items.cookies')}</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>{t('privacy.dataUsage.title')}</h2>
                <p>{t('privacy.dataUsage.description')}</p>
                <ul>
                  <li>{t('privacy.dataUsage.items.service')}</li>
                  <li>{t('privacy.dataUsage.items.improvement')}</li>
                  <li>{t('privacy.dataUsage.items.communication')}</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>{t('privacy.dataSecurity.title')}</h2>
                <p>{t('privacy.dataSecurity.description')}</p>
                <ul>
                  <li>{t('privacy.dataSecurity.items.encryption')}</li>
                  <li>{t('privacy.dataSecurity.items.access')}</li>
                  <li>{t('privacy.dataSecurity.items.retention')}</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>{t('privacy.userRights.title')}</h2>
                <p>{t('privacy.userRights.description')}</p>
                <ul>
                  <li>{t('privacy.userRights.items.access')}</li>
                  <li>{t('privacy.userRights.items.correction')}</li>
                  <li>{t('privacy.userRights.items.deletion')}</li>
                  <li>{t('privacy.userRights.items.portability')}</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>{t('privacy.contact.title')}</h2>
                <p>{t('privacy.contact.description')}</p>
                <p className="mt-4">
                  Email: <a href="mailto:privacy@exceleasy.org" className="text-blue-600 hover:text-blue-800">
                    privacy@exceleasy.org
                  </a>
                </p>
              </section>

              <section>
                <h2>{t('privacy.updates.title')}</h2>
                <p>{t('privacy.updates.description')}</p>
                <p className="text-sm text-gray-500 mt-4">
                  {t('privacy.lastUpdated')}: 2025-02-08
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy; 