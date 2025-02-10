import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SmartLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  ariaLabel?: string;
  onClick?: () => void;
  isExternal?: boolean;
  rel?: string;
  prefetch?: boolean;
}

export const SmartLink: React.FC<SmartLinkProps> = ({
  to,
  children,
  className = '',
  title,
  ariaLabel,
  onClick,
  isExternal = false,
  rel = '',
  prefetch = true
}) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  // 处理内部链接的语言前缀
  const getLocalizedPath = (path: string) => {
    // 如果是外部链接，直接返回
    if (isExternal || path.startsWith('http')) {
      return path;
    }

    // 确保路径以/开头
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    // 添加语言前缀
    return `/${i18n.language}${normalizedPath}`;
  };

  // 获取链接的rel属性
  const getLinkRel = () => {
    const relParts = [];

    // 外部链接的安全设置
    if (isExternal) {
      relParts.push('noopener', 'noreferrer');
    }

    // 添加自定义rel
    if (rel) {
      relParts.push(rel);
    }

    return relParts.join(' ');
  };

  // 获取aria标签
  const getAriaLabel = () => {
    if (ariaLabel) return ariaLabel;
    if (typeof children === 'string') return children;
    return title;
  };

  // 判断是否是当前页面
  const isCurrent = location.pathname === getLocalizedPath(to);

  // 外部链接使用a标签
  if (isExternal) {
    return (
      <a
        href={to}
        className={className}
        title={title}
        aria-label={getAriaLabel()}
        rel={getLinkRel()}
        onClick={onClick}
        target="_blank"
      >
        {children}
      </a>
    );
  }

  // 内部链接使用Link组件
  return (
    <Link
      to={getLocalizedPath(to)}
      className={className}
      title={title}
      aria-label={getAriaLabel()}
      aria-current={isCurrent ? 'page' : undefined}
      onClick={onClick}
      rel={getLinkRel()}
      onMouseEnter={() => {
        if (prefetch) {
          // 这里可以添加路由预加载逻辑
        }
      }}
    >
      {children}
    </Link>
  );
}; 