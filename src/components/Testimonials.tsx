import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import testimonialPhoto from '@/assets/testimonial-queta.png';
import testimonialMenga from '@/assets/testimonial-menga.jpg';
import testimonialEdgar from '@/assets/testimonial-edgar.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Edgar de Sena",
      role: "Engenheiro Electrotécnico",
      image: testimonialEdgar,
      rating: 5,
      text: "A Afro Dourado transformou completamente o meu cabelo! Depois do tratamento para queda, meu cabelo ficou mais forte e saudável. A equipe é muito profissional e atenciosa. Recomendo a todos!"
    },
    {
      name: "Octávio Queta",
      role: "Analista de Sistemas",
      image: testimonialPhoto,
      rating: 5,
      text: "Excelente clínica! O tratamento a laser foi surpreendente. Meu cabelo estava muito danificado e agora está completamente recuperado. O atendimento é excepcional e os resultados são visíveis."
    },
    {
      name: "Menga Gaston",
      role: "Economista",
      image: testimonialMenga,
      rating: 5,
      text: "Profissionais extremamente qualificados! A hidratação profunda que fizeram no meu cabelo foi incrível. Nunca vi meu cabelo tão macio e brilhante. Voltarei sempre!"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Dizem Nossos{' '}
            <span className="text-primary font-bold">Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de clientes que confiaram na Afro Dourado para transformar 
            a saúde e beleza de seus cabelos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Clientes Felizes</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">1200+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Tratamentos</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Anos Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;