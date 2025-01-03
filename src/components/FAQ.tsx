import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Can AI create an Excel spreadsheet?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, AI can create Excel spreadsheets through natural language descriptions. Users can simply describe their requirements in text, and the AI will generate the desired Excel file with appropriate content and formatting. The generated spreadsheets can be further modified and customized as needed. This approach makes spreadsheet creation more intuitive and efficient, eliminating the need for manual formatting and complex formula writing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 