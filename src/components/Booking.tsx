import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    'Avaliação Gratuita',
    'Terapias Capilares',
    'Tratamento de Queda e Calvície',
    'Controle de Caspa',
    'Hidratação Profunda',
    'Terapia a Laser'
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de agendar uma consulta:
    
🧑‍💼 Nome: ${formData.name}
📞 Telefone: ${formData.phone}
📧 Email: ${formData.email}
💇‍♀️ Serviço: ${formData.service}
📅 Data: ${formData.date}
🕐 Horário: ${formData.time}
💬 Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/244932789299?text=${encodeURIComponent(message)}`;
    
    // Try to open WhatsApp with fallback
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      // Fallback: try opening with location.href
      window.location.href = whatsappUrl;
    }

    toast({
      title: "Agendamento Enviado!",
      description: "Redirecionando para WhatsApp para confirmar sua consulta.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="agendamento" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Agende Sua{' '}
              <span className="text-primary font-bold">Avaliação Gratuita</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contacto via WhatsApp 
              para confirmar seu agendamento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="p-8 bg-card shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      <User className="w-4 h-4 inline mr-2" />
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome completo"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Telefone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+244 123 456 789"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seuemail@exemplo.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Serviço Desejado *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Data Preferida *
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Horário Preferido *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                    >
                      <option value="">Selecione um horário</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Mensagem Adicional
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full text-lg py-4">
                  Agendar via WhatsApp
                </Button>
              </form>
            </Card>

            {/* Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border shadow-soft">
                <h3 className="font-bold text-lg mb-4 text-foreground">Por que agendar conosco?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Avaliação gratuita e completa do seu cabelo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Diagnóstico profissional personalizado</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Plano de tratamento sob medida</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Acompanhamento contínuo dos resultados</span>
                  </li>
                </ul>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
