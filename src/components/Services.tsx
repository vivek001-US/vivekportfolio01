
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with HTML/CSS/JS and modern frameworks to create responsive, user-friendly experiences.",
      icon: <Code className="w-10 h-10 text-portfolio-cyan" />,
    },
    {
      title: "Database Support",
      description: "Database design, implementation, and optimization using MySQL, Oracle, and MongoDB for efficient data management.",
      icon: <Database className="w-10 h-10 text-portfolio-cyan" />,
    },
    {
      title: "AI/ML Development",
      description: "Custom machine learning solutions for prediction, classification, and data analysis tailored to specific business needs.",
      icon: <Brain className="w-10 h-10 text-portfolio-cyan" />,
    },
    {
      title: "Embedded Projects",
      description: "Custom microcontroller-based systems for prototypes or academic projects focusing on efficient hardware-software integration.",
      icon: <Cpu className="w-10 h-10 text-portfolio-cyan" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-portfolio-card/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
          <div className="mt-2 h-1 w-20 bg-portfolio-cyan mx-auto"></div>
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Here are the services I offer, leveraging my expertise in software development,
            AI/ML, and embedded systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-portfolio-card border-none shadow-lg card-hover h-full"
            >
              <CardContent className="p-8 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 bg-portfolio-background/30 p-4 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-portfolio-muted">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
