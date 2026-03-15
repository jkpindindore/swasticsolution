import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '917987485024';
  const message = 'Hi, I would like to inquire about your testing equipment.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center gap-2 group"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
        Chat with us
      </span>
    </a>
  );
}
