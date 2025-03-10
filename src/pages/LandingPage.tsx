import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
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
        {/* <Pricing /> */}
        <UserComments />
        <FAQ />
      </main>
    </>
  );
}