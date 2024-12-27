import React from 'react';
import { Info, FileText, Zap } from 'lucide-react';

export function UsageInfo() {
  return (
    <div className="mt-8 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Is ExcelEasy free?</h3>
            <p className="text-gray-600">
              Yes, ExcelEasy offers a free tier! After logging in, you get 10 free generations per month. 
              This allows you to try out our AI-powered Excel generation capabilities without any cost.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">How do I use ExcelEasy?</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                ExcelEasy offers multiple ways to create Excel files:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    AI Generation: Simply describe your Excel needs in natural language, and our AI will create a customized spreadsheet
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Templates: Choose from our collection of pre-built templates and customize them to your needs
                  </span>
                </li>
              </ul>
              <p className="text-gray-600">
                Coming soon: Document conversion feature - Upload Word or PDF files and automatically convert them into well-structured Excel spreadsheets based on your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}