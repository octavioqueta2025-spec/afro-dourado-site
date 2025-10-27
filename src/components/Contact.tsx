import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "+244 926 919 013",
      action: "tel:+244926919013"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+244 926 919 013",
      action: "https://wa.me/244926919013"
    },
    {
      icon: Mail,
      title: "Email",
      value: "contacto@afrodourado.ao",
      action: "mailto:contacto@afrodourado.ao"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Rua Comandante Gika, 123, Maianga, Luanda - Angola",
      action: "https://maps.google.com/?q=Rua+Comandante+Gika+123+Maianga+Luanda+Angola"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em{' '}
              <span className="text-primary font-bold">Contacto</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atender você. Entre em contacto através de qualquer 
              um dos nossos canais de comunicação.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informações de Contacto
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card 
                      key={index}
                      className="p-6 bg-card hover:shadow-soft transition-all duration-300 cursor-pointer border-border"
                      onClick={() => window.open(item.action, '_blank')}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed break-all">{item.value}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>


              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                onClick={() => window.open('https://wa.me/244926919013', '_blank')}
                variant="hero"
                className="flex-1"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                onClick={() => window.open('tel:+244926919013', '_blank')}
                variant="secondary-outline"
                className="flex-1"
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Nossa Localização
              </h3>
              
              <Card className="overflow-hidden border-border">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.4936095142468!2d13.234042!3d-8.838333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTAnMTguMCJTIDEzwrAxNCcwMi42IkU!5e0!3m2!1sen!2sao!4v1626789012345!5m2!1sen!2sao"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Endereço Completo</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Rua Comandante Gika, 123<br />
                      Bairro Maianga<br />
                      Luanda, Angola<br />
                      CEP: 1000-000
                    </p>
                    <Button 
                      onClick={() => window.open('https://maps.google.com/?q=Rua+Comandante+Gika+123+Maianga+Luanda+Angola', '_blank')}
                      variant="link" 
                      className="p-0 mt-2 text-primary"
                    >
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;