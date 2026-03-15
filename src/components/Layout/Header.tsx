import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Page } from '../../types';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentPage, navigate } = useRouter();

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Products', page: 'products' },
    { label: 'Industries', page: 'industries' },
    { label: 'Blog', page: 'blog' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+917987485024" className="flex items-center gap-1 hover:text-orange-400">
              <Phone size={14} />
              <span>+91 7987485024</span>
            </a>
            <a href="mailto:enquiry@swasticsolutions.in" className="flex items-center gap-1 hover:text-orange-400">
              <Mail size={14} />
              <span>enquiry@swasticsolutions.in</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              SS
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Swastic Solutions</h1>
              <p className="text-xs text-gray-600">Industrial Testing Equipment</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                className={`font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  navigate(item.page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 ${
                  currentPage === item.page
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
