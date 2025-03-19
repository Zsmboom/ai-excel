import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, FileText, Wrench, Image, BarChart, PlusCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function ExcelToolsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const location = useLocation();

  // Check if current path corresponds to a tool
  const isToolActive = (path: string) => {
    return location.pathname === path;
  };

  // Define Excel tools list
  const excelTools = [
    {
      name: t('common.excelGenerator'),
      path: '/workspace',
      icon: <FileText className="h-5 w-5" />,
      description: 'Generate Excel spreadsheets with AI'
    },
    {
      name: t('common.excelFunctions'),
      path: '/excel-functions',
      icon: <Wrench className="h-5 w-5" />,
      description: 'Excel function lookup and explanations'
    },
    {
      name: t('common.picToExcel'),
      path: '/pic-to-excel',
      icon: <Image className="h-5 w-5" />,
      description: 'Convert images to Excel data'
    },
    {
      name: t('common.excelChart'),
      path: '/ai-excel-chart',
      icon: <BarChart className="h-5 w-5" />,
      description: 'AI-powered chart generation'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when clicking a menu item
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
          excelTools.some(tool => isToolActive(tool.path))
            ? 'text-blue-600 bg-blue-50'
            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{t('common.excelTools')}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
          <div className="px-4 py-2 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-700">Excel Tools</h3>
            <p className="text-xs text-gray-500 mt-1">Select a tool to get started</p>
          </div>
          
          <div className="py-2">
            {excelTools.map((tool) => (
              <Link
                key={tool.path}
                to={tool.path}
                className={`flex items-start px-4 py-3 hover:bg-gray-50 transition-colors ${
                  isToolActive(tool.path) ? 'bg-blue-50' : ''
                }`}
                onClick={handleMenuItemClick}
              >
                <div className={`p-2 rounded-md mr-3 ${isToolActive(tool.path) ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                  {tool.icon}
                </div>
                <div>
                  <div className={`text-sm font-medium ${isToolActive(tool.path) ? 'text-blue-600' : 'text-gray-700'}`}>
                    {tool.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{tool.description}</div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="px-4 py-2 border-t border-gray-100">
            <Link
              to="/workspace"
              className="flex items-center justify-center w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md text-sm font-medium transition-colors"
              onClick={handleMenuItemClick}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Create New Spreadsheet
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}