import { Sparkles, Droplets, Scissors, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Terapias Capilares",
      description: "Tratamentos especializados para fortalecer e revitalizar cabelos afro, promovendo crescimento saudável.",
      features: ["Análise capilar detalhada", "Tratamento personalizado", "Produtos naturais"],
      price: "Desde 8.000 Kz"
    },
    {
      icon: Shield,
      title: "Tratamento de Queda e Calvície",
      description: "Soluções avançadas para combater a queda de cabelo e estimular o crescimento natural.",
      features: ["Diagnóstico profissional", "Terapia regenerativa", "Acompanhamento contínuo"],
      price: "Desde 12.000 Kz"
    },
    {
      icon: Droplets,
      title: "Controle de Caspa",
      description: "Tratamento eficaz para eliminar a caspa e manter o couro cabeludo saudável.",
      features: ["Limpeza profunda", "Produtos anticaspa", "Orientação preventiva"],
      price: "Desde 6.000 Kz"
    },
    {
      icon: Scissors,
      title: "Hidratação Profunda",
      description: "Hidratação intensiva para cabelos ressecados, devolvendo maciez e brilho natural.",
      features: ["Máscaras nutritivas", "Óleos essenciais", "Tratamento duradouro"],
      price: "Desde 7.500 Kz"
    },
    {
      icon: Zap,
      title: "Terapia a Laser",
      description: "Tecnologia avançada para estimular a circulação e fortalecer os folículos capilares.",
      features: ["Equipamento moderno", "Sessões personalizadas", "Resultados comprovados"],
      price: "Desde 15.000 Kz"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos{' '}
            <span className="text-primary font-bold">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de tratamentos especializados para cabelos afro, 
            com técnicas modernas e produtos de qualidade premium.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-2xl font-bold text-primary mb-6">{service.price}</div>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => scrollToSection('agendamento')}
                    variant="secondary-outline"
                    className="w-full transition-all duration-300"
                  >
                    Agendar Consulta
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-card p-8 rounded-2xl shadow-soft">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-muted-foreground mb-6">
            Entre em contacto conosco para uma consulta personalizada e descubra o melhor tratamento para o seu cabelo.
          </p>
          <Button 
            onClick={() => scrollToSection('contato')}
            variant="hero"
          >
            Falar Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;