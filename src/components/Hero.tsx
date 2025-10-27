import { ArrowDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/clinic-interior.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen relative flex items-center bg-background pt-24 md:pt-28">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-left bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-up [animation-delay:200ms]">
            Desperte a Beleza do Seu{' '}
            <span className="text-primary font-extrabold">
              Cabelo Afro
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-2xl mx-auto animate-fade-up [animation-delay:400ms] font-medium">
            Na Afro Dourado, celebramos a força e a beleza natural dos seus fios. Tratamentos especializados para você brilhar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-up [animation-delay:600ms]">
          <Button 
            onClick={() => scrollToSection('agendamento')}
            variant="hero"
            size="lg"
            className="text-lg px-8 py-4 font-semibold"
          >
            Avaliação Gratuita
          </Button>
          <Button 
            variant="secondary-outline"
            onClick={() => scrollToSection('servicos')}
            size="lg"
            className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold"
          >
            Nossos Serviços
          </Button>
          </div>

          {/* Special Offers */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-fade-up [animation-delay:800ms]">
            <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-primary mb-2 text-base md:text-lg">Avaliação Gratuita</h3>
              <p className="text-xs md:text-sm text-secondary font-medium">Diagnóstico completo do seu cabelo sem custo</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-primary mb-2 text-base md:text-lg">Tratamento Personalizado</h3>
              <p className="text-xs md:text-sm text-secondary font-medium">Cada cabelo é único, nosso cuidado também</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg sm:col-span-2 md:col-span-1">
              <h3 className="font-bold text-primary mb-2 text-base md:text-lg">Garantia de Resultados</h3>
              <p className="text-xs md:text-sm text-secondary font-medium">Comprometidos com sua satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;
