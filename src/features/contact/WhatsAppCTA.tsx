import { MessageCircle } from "lucide-react";

export const WhatsAppCTA = () => {
  return (
    <a
      href="https://wa.me/62211234567?text=Halo%20XERANET%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20IT."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      title="WhatsApp Kami"
      aria-label="WhatsApp Chat"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppCTA;
