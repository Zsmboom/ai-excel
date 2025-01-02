import React from 'react';
import { Menu, X, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExcelToolsMenu } from './ExcelToolsMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FileSpreadsheet className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">ExcelEasy</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ExcelToolsMenu />
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <ExcelToolsMenu />
              <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;