import { Phone } from 'lucide-react';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a 
        href="tel:+244937665990" 
        className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-white shadow-lg transition-transform hover:scale-105"
      >
        <Phone size={20} />
        <span className="font-semibold">Ligar Agora</span>
      </a>
    </div>
  );
};

export default FloatingCTA;
