import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                SS
              </div>
              <h3 className="text-xl font-bold text-white">Swastic Solutions</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Leading supplier of industrial material testing machines, metallurgical equipment, and laboratory testing instruments.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('home')} className="hover:text-orange-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="hover:text-orange-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigate('products')} className="hover:text-orange-400 transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => navigate('industries')} className="hover:text-orange-400 transition-colors">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="hover:text-orange-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Universal Testing Machine</li>
              <li>Hardness Testing Machines</li>
              <li>Metallurgical Microscope</li>
              <li>Profile Projector</li>
              <li>Salt Spray Chamber</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>A1 104 Shubh Labh Vaily, Shri Mangal Nagar, Near Bangali Square, Indore MP 452018</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+917987485024" className="hover:text-orange-400">
                  +91 7987485024
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:enquiry@swasticsolutions.in" className="hover:text-orange-400">
                  enquiry@swasticsolutions.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={18} />
                <a href="https://www.swasticsolutions.in" className="hover:text-orange-400">
                  www.swasticsolutions.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Swastic Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
