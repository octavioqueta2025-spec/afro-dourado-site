import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais sobre os tratamentos capilares da Afro Dourado.";
    const whatsappUrl = `https://wa.me/244926919013?text=${encodeURIComponent(message)}`;
    
    // Try to open WhatsApp with fallback
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      // Fallback: try opening with location.href
      window.location.href = whatsappUrl;
    }
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default WhatsAppFloat;