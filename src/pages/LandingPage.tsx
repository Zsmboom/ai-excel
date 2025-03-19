import React from 'react';
import Hero from '../components/sections/Hero';
import ToolsHero from '../components/sections/ToolsHero';
import Features from '../components/sections/Features';
import UserGuide from '../components/sections/UserGuide';
// import QuickStart from '../components/sections/QuickStart';
import Benefits from '../components/sections/Benefits';
import Comparison from '../components/sections/Comparison';
import UserComments from '../components/sections/UserComments';
import FAQ from '../components/FAQ';
import { PageSEO } from '../components/seo/PageSEO';
import FeedbackWidget from '../components/common/FeedbackWidget';

export default function LandingPage() {
  return (
    <>
      <PageSEO page="home" />
      <main>
        <Hero />
        <ToolsHero />
        <Features />
        <UserGuide />
        {/* <QuickStart /> */}
        <Benefits />
        <Comparison />
        <UserComments />
        <FAQ />
        <FeedbackWidget />
      </main>
    </>
  );
}