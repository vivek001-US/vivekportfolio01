
import { Button } from '@/components/ui/button';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="section-container relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block">Hi, I'm</span>
            <span className="text-portfolio-cyan">Vivek Pal</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-portfolio-muted">
            Turning Real-World Challenges Into Elegant AI Solutions
          </h2>
          <p className="text-lg text-portfolio-muted max-w-2xl">
            AI & ML student at University School of Automation & Robotics, Delhi. 
            Passionate about solving complex problems with innovative technology solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="bg-portfolio-cyan hover:bg-portfolio-cyanLight text-portfolio-background font-medium rounded-full px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView()}
            >
              Explore My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-portfolio-pink text-portfolio-pink hover:bg-portfolio-pink/10 rounded-full px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-portfolio-cyan to-portfolio-pink p-1 animate-float">
            <div className="w-full h-full rounded-full bg-portfolio-background flex items-center justify-center">
              <div className="text-center">
                <p className="text-portfolio-cyan text-sm">Profile Picture</p>
                <p className="text-portfolio-muted text-xs mt-2">Add your photo here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
