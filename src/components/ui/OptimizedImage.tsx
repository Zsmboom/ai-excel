import React from 'react';
import { useTranslation } from 'react-i18next';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallback?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fallback = '/images/placeholder.png',
  ...props
}) => {
  const { t } = useTranslation();
  const [error, setError] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  // 处理图片加载错误
  const handleError = () => {
    setError(true);
    if (fallback) {
      console.warn(`图片加载失败: ${src}, 使用备用图片`);
    }
  };

  // 处理图片加载完成
  const handleLoad = () => {
    setLoaded(true);
  };

  // 生成更丰富的alt文本
  const getEnhancedAlt = () => {
    // 如果已经提供了完整的alt文本，直接使用
    if (alt.length > 20) return alt;

    // 否则尝试从t函数获取更丰富的描述
    const translationKey = `images.${alt.toLowerCase().replace(/\s+/g, '_')}`;
    const translation = t(translationKey, '', { returnNull: true });
    return translation || alt;
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <img
        src={error ? fallback : src}
        alt={getEnhancedAlt()}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onError={handleError}
        onLoad={handleLoad}
        className={`
          transition-opacity duration-300
          ${loaded ? 'opacity-100' : 'opacity-0'}
          ${className}
        `}
        {...props}
      />
      
      {/* 加载状态指示器 */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      
      {/* 错误状态指示器 */}
      {error && !fallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-400">
            {t('common.imageLoadError')}
          </span>
        </div>
      )}
    </div>
  );
}; 