import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumb from '../common/Breadcrumb';
import ErrorBoundary from '../common/ErrorBoundary';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ErrorBoundary>
        <Navbar />
        <div className="flex-grow pt-16">
          <Breadcrumb />
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Layout; 