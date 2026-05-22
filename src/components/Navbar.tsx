import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/15 backdrop-blur-xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img src={logo} alt="Surf Marketing Logo" className="h-12 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-orange transition-colors animated-underline"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-orange transition-colors animated-underline"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-foreground hover:text-orange transition-colors animated-underline"
            >
              Clientes
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-orange transition-colors animated-underline"
            >
              Contacto
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-orange hover:bg-orange-dark text-primary-foreground font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-glow"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;