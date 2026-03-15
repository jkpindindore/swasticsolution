import { useState } from 'react';
import { Product } from '../types';
import { CheckCircle } from 'lucide-react';
import { InquiryModal } from './InquiryModal';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {product.specs && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specifications:</h4>
              <ul className="space-y-1">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => setShowInquiry(true)}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Inquire Now
          </button>
        </div>
      </div>

      {showInquiry && (
        <InquiryModal
          product={product.name}
          onClose={() => setShowInquiry(false)}
        />
      )}
    </>
  );
}
