import React from 'react';
import { Zap, Code, Brain, Users } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { useTranslation } from 'react-i18next';

export function Features() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      <FeatureCard
        icon={<Zap className="h-8 w-8 text-blue-600" />}
        title={t('aboutFeatures.aiGeneration.title')}
        description={t('aboutFeatures.aiGeneration.description')}
      />
      <FeatureCard
        icon={<Code className="h-8 w-8 text-blue-600" />}
        title={t('aboutFeatures.smartFunctions.title')}
        description={t('aboutFeatures.smartFunctions.description')}
      />
      <FeatureCard
        icon={<Brain className="h-8 w-8 text-blue-600" />}
        title={t('aboutFeatures.templates.title')}
        description={t('aboutFeatures.templates.description')}
      />
      <FeatureCard
        icon={<Users className="h-8 w-8 text-blue-600" />}
        title={t('aboutFeatures.forEveryone.title')}
        description={t('aboutFeatures.forEveryone.description')}
      />
    </div>
  );
}