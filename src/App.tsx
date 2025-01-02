import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import Workspace from './pages/Workspace';
import ExcelFunctions from './pages/ExcelFunctions';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ai-excel-generator" element={<Workspace />} />
          <Route path="/excel-functions" element={<ExcelFunctions />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}