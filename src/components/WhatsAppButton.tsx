import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+33782684619";
  const message = encodeURIComponent("Bonjour MoovConseils, j'aimerais discuter d'un projet !");
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
