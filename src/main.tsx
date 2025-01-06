import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18n from './i18n/config';
import App from './App';
import './index.css';

// 从 localStorage 获取之前保存的语言偏好
const savedLanguage = localStorage.getItem('preferredLanguage');
if (savedLanguage) {
  i18n.changeLanguage(savedLanguage);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
