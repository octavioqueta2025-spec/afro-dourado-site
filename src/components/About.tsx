import aboutImage from '@/assets/atendimento-personalizado.jpg';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sua Jornada Capilar Começa <span className="text-primary">Aqui</span>
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Desde 2017, a <strong className="text-primary">Afro Dourado</strong> é uma referência em saúde e estética capilar em Angola, com unidades em Luanda e Huambo.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Somos um centro especializado em terapia capilar, dedicado ao diagnóstico, tratamento e acompanhamento de problemas do couro cabeludo e dos fios de cabelo, como alopecias, dermatites, seborreias, caspa, queda capilar e fragilidade dos fios.
                </p>
              </div>

              <button 
                onClick={() => scrollToSection('contato')}
                className="mt-8 bg-secondary text-secondary-foreground font-semibold py-3 px-8 rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-elegant-dark h-[400px] lg:h-[500px]">
              <img 
                src={aboutImage} 
                alt="Equipe da Afro Dourado realizando um atendimento personalizado"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;