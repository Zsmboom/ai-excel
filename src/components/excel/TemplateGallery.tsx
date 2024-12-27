import React from 'react';
import { FileSpreadsheet } from 'lucide-react';
import { excelTemplates } from '../../data/excelTemplates';
import type { ExcelTemplate } from '../../types/excel';

interface TemplateGalleryProps {
  onSelectTemplate: (template: ExcelTemplate) => void;
}

export function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Excel Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {excelTemplates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelectTemplate(template)}
            className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <FileSpreadsheet className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{template.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}