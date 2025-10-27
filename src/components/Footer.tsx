import { Heart, Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">AD</span>
              </div>
              <span className="text-xl font-bold text-primary">Afro Dourado</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Especialistas em tratamentos capilares para cabelos afro em Luanda. 
              Cuidamos da saúde e beleza do seu cabelo com profissionalismo e dedicação.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/afrodourado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/afrodourado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@afrodourado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/244926919013" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-white/80 hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-white/80 hover:text-primary transition-colors"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-white/80 hover:text-primary transition-colors"
              >
                Nossos Serviços
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-left text-white/80 hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-white/80 hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Nossos Serviços</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-white/80">Terapias Capilares</span>
              <span className="text-white/80">Tratamento de Queda</span>
              <span className="text-white/80">Controle de Caspa</span>
              <span className="text-white/80">Hidratação Profunda</span>
              <span className="text-white/80">Terapia a Laser</span>
              <button 
                onClick={() => scrollToSection('agendamento')}
                className="text-left text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Avaliação Gratuita →
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/80">+244 926 919 013</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/80">contacto@afrodourado.ao</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
              © 2025 Afro Dourado. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-xs md:text-sm text-center md:text-right">
              Feito por Octávio Queta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;