
import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


const Booking = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
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
    
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Campos em falta",
        description: "Por favor, selecione uma data e hora para o agendamento.",
        variant: "destructive",
      });
      return;
    }

    const formattedDate = format(selectedDate, "PPP", { locale: ptBR });

    // Create WhatsApp message
    const message = `Olá! Gostaria de agendar uma consulta:
    
🧑‍💼 Nome: ${formData.name}
📞 Telefone: ${formData.phone}
📧 Email: ${formData.email}
💇‍♀️ Serviço: ${formData.service}
📅 Data: ${formattedDate}
🕐 Horário: ${selectedTime}
💬 Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/244932789299?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

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

  const today = new Date();

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
              Escolha a data e hora perfeitas para si. A nossa equipa entrará em contacto 
              pelo WhatsApp para confirmar o agendamento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <Card className="p-8 bg-card shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      <User className="w-4 h-4 inline mr-2" />
                      Nome Completo *
                    </label>
                    <Input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Telefone *
                    </label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+244 123 456 789" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="seuemail@exemplo.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Serviço Desejado *
                  </label>
                  <select name="service" value={formData.service} onChange={handleInputChange} required className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Mensagem Adicional
                  </label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Conte-nos mais sobre suas necessidades..." rows={3} />
                </div>

                <Button type="submit" variant="hero" className="w-full text-lg py-4">
                  Agendar via WhatsApp
                </Button>
              </form>
            </Card>

            {/* Calendar & Time */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border shadow-soft flex justify-center">
                  <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      locale={ptBR}
                      fromDate={today}
                      disabled={{ dayOfWeek: [0] }} // Disables Sundays
                      className="text-foreground"
                      modifiersClassNames={{
                        selected: 'bg-primary text-primary-foreground',
                        today: 'text-primary font-bold'
                      }}
                  />
              </Card>

              {selectedDate && (
                <Card className="p-6 bg-card border-border shadow-soft">
                  <h3 className="font-bold text-lg mb-4 text-foreground flex items-center">
                    <Clock className="w-5 h-5 inline mr-3 text-primary" />
                    Escolha um Horário para {format(selectedDate, "PPP", { locale: ptBR })}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? 'hero' : 'secondary-outline'}
                        onClick={() => setSelectedTime(time)}
                        className='w-full'
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
