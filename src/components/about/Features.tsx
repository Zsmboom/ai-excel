import React from 'react';
import { Zap, Code, Brain, Users } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      <FeatureCard
        icon={<Zap className="h-8 w-8 text-blue-600" />}
        title="AI-Powered Generation"
        description="Transform text descriptions into complete Excel spreadsheets instantly"
      />
      <FeatureCard
        icon={<Code className="h-8 w-8 text-blue-600" />}
        title="Smart Functions"
        description="Get expert help with Excel formulas and VBA macros"
      />
      <FeatureCard
        icon={<Brain className="h-8 w-8 text-blue-600" />}
        title="Intelligent Templates"
        description="Access pre-built templates for common business needs"
      />
      <FeatureCard
        icon={<Users className="h-8 w-8 text-blue-600" />}
        title="For Everyone"
        description="From beginners to Excel experts, we've got you covered"
      />
    </div>
  );
}