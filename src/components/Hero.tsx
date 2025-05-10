
import { Button } from '@/components/ui/button';
import ParticlesBackground from './ParticlesBackground';
import { Bot, Brain, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="section-container relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 text-center md:text-left mt-8 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-portfolio-cyan/10 text-portfolio-cyan border border-portfolio-cyan/20 mb-4">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-sm font-medium">AI & Machine Learning</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-cyan to-portfolio-pink">Vivek Pal</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-portfolio-muted">
            Turning Real-World Challenges Into 
            <span className="relative ml-2">
              <span className="text-portfolio-cyan">Elegant AI Solutions</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-portfolio-cyan to-portfolio-pink"></span>
            </span>
          </h2>
          
          <p className="text-lg text-portfolio-muted max-w-2xl">
            AI & ML student at University School of Automation & Robotics, Delhi. 
            Passionate about solving complex problems with innovative technology solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-portfolio-cyan to-portfolio-cyanLight hover:opacity-90 text-portfolio-background font-medium rounded-full px-8 flex items-center gap-2 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Brain size={18} />
              Explore My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-portfolio-pink text-portfolio-pink hover:bg-portfolio-pink/10 rounded-full px-8 flex items-center gap-2 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Bot size={18} />
              Get In Touch
            </Button>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-portfolio-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-portfolio-cyan"></div>
              <span className="text-sm">AI Algorithms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-portfolio-pink"></div>
              <span className="text-sm">Machine Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-portfolio-cyanLight"></div>
              <span className="text-sm">Data Science</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* AI-themed profile container */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-portfolio-cyan to-portfolio-pink p-[2px] animate-float relative">
              <div className="w-full h-full rounded-full bg-portfolio-background flex items-center justify-center overflow-hidden p-2 relative">
                <div className="absolute inset-0 z-0">
                  <div className="w-full h-full opacity-20">
                    {/* Binary pattern background */}
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <text x="8" y="8" fill="currentColor" className="text-portfolio-cyan text-[2px]">
                        {Array(600).fill().map((_, i) => Math.round(Math.random())).join('')}
                      </text>
                      <text x="8" y="11" fill="currentColor" className="text-portfolio-cyan text-[2px]">
                        {Array(600).fill().map((_, i) => Math.round(Math.random())).join('')}
                      </text>
                      {Array(45).fill().map((_, i) => (
                        <text key={i} x="8" y={14 + i * 3} fill="currentColor" className="text-portfolio-cyan text-[2px]">
                          {Array(600).fill().map((_, j) => Math.round(Math.random())).join('')}
                        </text>
                      ))}
                    </svg>
                  </div>
                </div>
                <div className="z-10 text-center">
                  <div className="mb-3">
                    <Brain size={32} className="text-portfolio-cyan mx-auto" />
                  </div>
                  <p className="text-portfolio-cyan text-sm font-semibold">Profile Picture</p>
                  <p className="text-portfolio-muted text-xs mt-2">Add your photo here</p>
                </div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-portfolio-cyan animate-pulse"></div>
              <div className="absolute bottom-6 -left-4 w-6 h-6 rounded-full bg-portfolio-pink animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-12 -right-6 w-8 h-8 rounded-full border-2 border-portfolio-cyanLight opacity-50"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-portfolio-card py-2 px-4 rounded-full flex items-center gap-2 border border-portfolio-cyan/20">
              <span className="inline-block w-2 h-2 rounded-full bg-portfolio-cyan animate-pulse"></span>
              <span className="text-xs text-portfolio-muted">AI Processing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
