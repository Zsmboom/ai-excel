import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 为 window 对象添加 gtag 类型定义
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

/**
 * 自定义 Hook，用于跟踪页面浏览和事件
 * 在路由变化时自动发送页面浏览事件到 Google Analytics
 */
export const useAnalytics = () => {
  const location = useLocation();
  
  // 在路由变化时发送页面浏览事件
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-N24H0824RF', {
        page_path: location.pathname + location.search
      });
      console.log('页面浏览已跟踪:', location.pathname);
    }
  }, [location]);
  
  /**
   * 跟踪自定义事件
   * @param action 事件动作
   * @param category 事件类别
   * @param label 事件标签
   * @param value 事件值（可选）
   */
  const trackEvent = (action: string, category: string, label: string, value?: number) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
      console.log('事件已跟踪:', action, category, label);
    }
  };
  
  return { trackEvent };
}; 