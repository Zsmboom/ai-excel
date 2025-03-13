import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
// import HowItWorks from '../components/sections/HowItWorks';
import UseCases from '../components/sections/UseCases';
import Benefits from '../components/sections/Benefits';
import Comparison from '../components/sections/Comparison';
import TechnologyInsights from '../components/sections/TechnologyInsights';
import CaseStudies from '../components/sections/CaseStudies';
import ExpertTips from '../components/sections/ExpertTips';
// import Pricing from '../components/sections/Pricing';
import UserComments from '../components/sections/UserComments';
import FAQ from '../components/FAQ';
import { PageSEO } from '../components/seo/PageSEO';

export default function LandingPage() {
  return (
    <>
      <PageSEO page="home" />
      <main>
        <Hero />
        <Features />
        {/* <HowItWorks /> */}
        <UseCases />
        <Benefits />
        <Comparison />
        <TechnologyInsights />
        <CaseStudies />
        <ExpertTips />
        {/* <Pricing /> */}
        <UserComments />
        <FAQ />
      </main>
    </>
  );
}