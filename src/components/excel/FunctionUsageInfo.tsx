import React from 'react';
import { Info, Calculator, Code } from 'lucide-react';

export function FunctionUsageInfo() {
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
              This allows you to try out our AI-powered Excel function generation capabilities without any cost.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">How do I use ExcelEasy Functions?</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                ExcelEasy Functions helps you create Excel solutions in two ways:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Calculator className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Excel Formulas: Generate complex Excel formulas with step-by-step implementation guides
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    VBA Macros: Create custom VBA macro code to automate Excel tasks and processes
                  </span>
                </li>
              </ul>
              <p className="text-gray-600">
                Simply describe what you want to achieve in natural language, and our AI will generate the appropriate Excel formula or VBA code along with detailed instructions on how to use it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}