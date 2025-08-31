import { Button } from '@/components/ui/button';
import { ArrowDown, Eye } from 'lucide-react';
import portfolioConfig from '@/config/portfolio.json';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-primary/10 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 animate-float">
              CSE (IoT) Student & Tech Enthusiast
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi — I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {portfolioConfig.personal.name}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              {portfolioConfig.personal.description}
            </p>

            <div className="flex justify-center sm:justify-start mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Projects
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{portfolioConfig.stats.projects}</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{portfolioConfig.stats.studentsTrained}</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <img 
                    src={portfolioConfig.personal.heroImage} 
                    alt={`${portfolioConfig.personal.name} - CSE IoT Student and Tech Enthusiast`} 
                    className="w-full h-full rounded-full object-cover object-center animate-float"
                    loading="eager"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold animate-float" style={{ animationDelay: '1s' }}>
                IoT
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold animate-float" style={{ animationDelay: '2s' }}>
                AI
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;