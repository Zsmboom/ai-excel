import React from 'react';
import { AlertTriangle, XCircle, AlertCircle, Info } from 'lucide-react';

export type ErrorType = 'error' | 'warning' | 'info';

interface ErrorMessageProps {
  type?: ErrorType;
  title?: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  type = 'error',
  title,
  message,
  action,
  onClose
}) => {
  const getIcon = () => {
    switch (type) {
      case 'error':
        return <XCircle className="h-5 w-5 text-red-400" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-400" />;
      default:
        return null;
    }
  };

  const getColors = () => {
    switch (type) {
      case 'error':
        return 'bg-red-50 text-red-700 border-red-100';
      case 'warning':
        return 'bg-yellow-50 text-yellow-700 border-yellow-100';
      case 'info':
        return 'bg-blue-50 text-blue-700 border-blue-100';
      default:
        return '';
    }
  };

  return (
    <div className={`rounded-md p-4 border ${getColors()}`}>
      <div className="flex">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className="text-sm font-medium mb-1">{title}</h3>
          )}
          <div className="text-sm">
            {message}
          </div>
          {action && (
            <div className="mt-4">
              <button
                type="button"
                className={`text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  type === 'error'
                    ? 'text-red-700 hover:text-red-600 focus:ring-red-500'
                    : type === 'warning'
                    ? 'text-yellow-700 hover:text-yellow-600 focus:ring-yellow-500'
                    : 'text-blue-700 hover:text-blue-600 focus:ring-blue-500'
                }`}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            </div>
          )}
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <button
              type="button"
              className="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={onClose}
            >
              <span className="sr-only">关闭</span>
              <XCircle className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage; 