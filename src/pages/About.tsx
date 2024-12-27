import React from 'react';
import { FileSpreadsheet } from 'lucide-react';
import { Features } from '../components/about/Features';
import { Step } from '../components/about/Step';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <FileSpreadsheet className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Making Excel Simple for Everyone
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ExcelEasy is your AI-powered companion for all things Excel, designed to solve every Excel challenge and make spreadsheet work effortless.
          </p>
        </div>

        <Features />

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We believe that everyone should have access to the full power of Excel without the steep learning curve. ExcelEasy combines advanced AI technology with user-friendly design to solve common Excel challenges:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              Complex formula creation and troubleshooting
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              Time-consuming manual data organization
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              Repetitive spreadsheet creation and formatting
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              VBA macro development for automation
            </li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How ExcelEasy Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number="1"
              title="Describe Your Needs"
              description="Simply tell us what you want to create in plain language"
            />
            <Step
              number="2"
              title="AI Processing"
              description="Our AI analyzes your request and generates the perfect solution"
            />
            <Step
              number="3"
              title="Get Results"
              description="Download your ready-to-use Excel file or copy the generated formulas"
            />
          </div>
        </div>
      </div>
    </div>
  );
}