import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  
  // Helper interfaces for environment variable access
  interface EnvConfig {
    VITE_EMAILJS_SERVICE_ID?: string;
    VITE_EMAILJS_TEMPLATE_ID?: string;
    VITE_EMAILJS_PUBLIC_KEY?: string;
    [key: string]: string | undefined;
  }

  interface GlobalConfig {
    process?: {
      env?: {
        NEXT_PUBLIC_EMAILJS_SERVICE_ID?: string;
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?: string;
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?: string;
        [key: string]: string | undefined;
      };
    };
  }

  const viteEnv = (import.meta as unknown as { env: EnvConfig }).env;
  const nextEnv = (globalThis as unknown as GlobalConfig).process?.env;

  const EMAILJS_SERVICE_ID = viteEnv?.VITE_EMAILJS_SERVICE_ID || nextEnv?.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = viteEnv?.VITE_EMAILJS_TEMPLATE_ID || nextEnv?.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = viteEnv?.VITE_EMAILJS_PUBLIC_KEY || nextEnv?.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
      } catch (err) {
        console.warn('emailjs.init failed:', err);
      }
    }
  }, [EMAILJS_PUBLIC_KEY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }
    // Ensure env vars are present
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('Missing EmailJS configuration', { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY });
      toast({
        title: 'Configuración incompleta',
        description: 'No se pudieron leer las credenciales de EmailJS. Verificá las variables de entorno.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error enviando email:', error);
      toast({
        title: 'Error al enviar el mensaje',
        description: 'Intentá nuevamente más tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: (<a href="mailto:surf.mktd@gmail.com">surf.mktd@gmail.com</a>)
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "San Luis, Argentina"
    },
    {
      icon: Phone,
      label: "Teléfonos",
      value: (
        <a href="tel:01131631916" className="text-muted-foreground hover:underline">011 3163-1916</a>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
            }`}>
            ¿Listo para <span className="text-orange">impulsar</span> tu negocio?
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
            }`}>
            Contáctanos hoy y descubre cómo podemos transformar tu presencia digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Envíanos un mensaje</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-input border-glass-border focus:border-orange focus:ring-orange"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input border-glass-border focus:border-orange focus:ring-orange"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-input border-glass-border focus:border-orange focus:ring-orange min-h-[120px]"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-orange hover:bg-orange-dark text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Información de contacto</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Estamos aquí para ayudarte a alcanzar tus objetivos digitales.
                  No dudes en contactarnos para discutir tu próximo proyecto.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 glass-card rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="bg-orange rounded-lg p-3">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional CTA */}
              {/* <div className="glass-card rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  ¿Prefieres hablar directamente?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Agenda una consulta gratuita de 30 minutos
                </p>
                <Button
                  variant="outline"
                  className="border-orange text-orange hover:bg-orange hover:text-primary-foreground transition-all duration-300"
                >
                  Agendar consulta
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;