import React from 'react';
import type { ExcelData } from '../../types/excel';

interface ExcelPreviewProps {
  data: ExcelData[];
}

export function ExcelPreview({ data }: ExcelPreviewProps) {
  return (
    <div className="space-y-8">
      {data.map((sheet, sheetIndex) => (
        <div key={sheetIndex} className="overflow-x-auto">
          <div className="bg-gray-50 px-4 py-2 border-b">
            <h3 className="text-sm font-medium text-gray-700">
              Sheet {sheetIndex + 1}: {sheet.name}
            </h3>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {sheet.headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sheet.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {sheet.headers.map((header, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {row[header]?.toString() || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}