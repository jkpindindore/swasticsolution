import { useState } from 'react';
import { FileText } from 'lucide-react';
import { InquiryModal } from './InquiryModal';

export function StickyInquiry() {
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowInquiry(true)}
        className="fixed bottom-24 right-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center gap-2 group"
        title="Send Inquiry"
      >
        <FileText size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
          Quick Inquiry
        </span>
      </button>

      {showInquiry && <InquiryModal onClose={() => setShowInquiry(false)} />}
    </>
  );
}
