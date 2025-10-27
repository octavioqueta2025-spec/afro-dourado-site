import { Heart, Users, Award, Clock } from 'lucide-react';
import clinicImage from '@/assets/service-treatment.jpg';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Sobre a{' '}
                <span className="text-primary font-bold">Afro Dourado</span>
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A <strong className="text-primary">Afro Dourado</strong> é uma clínica capilar especializada no 
                cuidado e tratamento de cabelos afro, localizada no coração de Luanda, Angola. 
                Nossa missão é valorizar e cuidar da beleza natural dos cabelos crespos e cacheados.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com anos de experiência e uma equipe de profissionais altamente qualificados, 
                oferecemos tratamentos personalizados que respeitam a textura única de cada cabelo, 
                promovendo saúde, força e brilho natural.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-lg">Nossa Missão</h3>
                </div>
                <p className="text-muted-foreground">
                  Promover autoestima e confiança através de cabelos saudáveis e bem cuidados.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-lg">Nossos Valores</h3>
                </div>
                <p className="text-muted-foreground">
                  Excelência, respeito à diversidade e compromisso com resultados duradouros.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-8">
              <div className="text-center p-4 md:p-6 bg-card rounded-lg shadow-soft">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-foreground">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Clientes Atendidos</div>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-card rounded-lg shadow-soft">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-foreground">5</div>
                <div className="text-xs md:text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={clinicImage} 
                alt="Interior da clínica Afro Dourado"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-4 right-4 md:-bottom-6 md:-left-6 md:right-auto bg-primary text-secondary p-4 md:p-6 rounded-xl md:rounded-2xl shadow-gold animate-float">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold">100%</div>
                <div className="text-xs md:text-sm">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;