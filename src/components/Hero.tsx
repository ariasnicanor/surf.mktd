import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero background"
          className="w-full h-full object-cover opacity-20 animate-float-bg"
        />
        <div className="absolute inset-0 hero-bg"></div>
        {/* Minimalistic Surfboard Background */}
        <div className="absolute right-[-15%] md:right-[-5%] top-[-5%] md:top-[-10%] opacity-10 rotate-12 bg-contain bg-no-repeat z-0 pointer-events-none">
           <svg width="400" height="1000" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg" className="w-[300px] h-[750px] md:w-[600px] md:h-[1500px]">
              <path d="M50 5 C50 5 15 60 50 190 C85 60 50 5 50 5 Z" fill="none" stroke="hsl(30, 90%, 55%)" strokeWidth="2" />
              <path d="M50 100 L50 190" stroke="hsl(30, 90%, 55%)" strokeWidth="1" />
           </svg>
        </div>

        {/* Minimalistic Wave Background */}
        <div className="absolute left-0 bottom-[10%] w-full opacity-10 pointer-events-none z-0">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path fill="none" stroke="hsl(30, 90%, 55%)" strokeWidth="3" d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,138.7C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Ideas que impactan.</span>
            <br />
            <span className="text-orange">Historias que venden.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Transformamos tu presencia digital con estrategias de redes sociales, publicidad y diseño web que generan resultados reales y medibles.
          </p>

          {/* CTA Button */}
          <div className="animate-scale-in">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-orange hover:bg-orange-dark text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-glow animate-glow-pulse"
            >
              Echa un vistazo a nuestro trabajo
            </Button>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-3 h-3 bg-orange rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-orange rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-20 w-4 h-4 bg-orange rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;