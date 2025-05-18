
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Code, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  // State to track which project details are expanded
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  // Toggle project expansion
  const toggleProjectDetails = (index: number) => {
    setExpandedProjects(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const projects = [
    {
      title: "Data-Driven Estimation of Obesity Risk",
      description: "ML model for health risk prediction that analyzes personal health data to estimate obesity risk factors.",
      tags: ["Machine Learning", "Health Tech", "Data Analysis"],
      icon: "🧠",
      details: "Obesity is a major health issue affecting individuals across all age groups. Traditional methods for determining obesity levels often rely on BMI or clinical diagnoses, which may not consider a person's lifestyle comprehensively. With the growing availability of data, machine learning provides a powerful approach to model and predict obesity levels from behavioral and physiological indicators. This project utilizes various machine learning algorithms to classify and predict obesity levels from data collected on dietary habits, physical activity, and other lifestyle factors."
    }, 
    {
      title: "Embedded Line Detection Robot",
      description: "Autonomous robot using sensors & embedded logic to detect and follow line paths for navigation.",
      tags: ["Embedded Systems", "Robotics", "Sensors"],
      icon: "🤖",
      details: "A Self-guided vehicle is an autonomous vehicle designed to follow a specific path, typically represented by a dark line on a light surface. The car is programmed to detect the path and move along it without any manual control. It works by continuously scanning the surface below it and adjusting its direction based on the path's position. When the path curves or changes direction, the car responds by steering itself appropriately to stay aligned. This behavior allows it to navigate tracks accurately and is often used in robotics competitions, smart transportation models, and automation learning projects. The main objective of a line following car is to demonstrate how machines can make decisions and move independently by interpreting visual cues from their environment."
    }, 
    {
      title: "Automatic Street Light",
      description: "Energy-efficient street lighting system that automatically adjusts based on ambient light conditions.",
      tags: ["IoT", "Energy Efficiency", "Embedded Systems"],
      icon: "💡",
      details: "I developed an automatic street light system using basic electronic components such as an IR sensor, battery, diode, resistor, wires, and lights. The IR sensor is used to detect the presence or motion of a person or vehicle. When motion is detected in the sensor's range, it sends a signal that triggers the light to turn on. The system is powered by a battery, which supplies the required DC voltage. A diode is connected in the circuit to prevent reverse current that could damage the components. Resistors are used to limit the current and protect the IR sensor and LEDs from overcurrent. Wires connect all the components in a compact and organized circuit. This system ensures that the street light only turns on when needed, saving energy and reducing unnecessary power consumption. It is especially useful in areas where continuous lighting is not essential, and it also promotes safety and efficiency through automation."
    },
    {
      title: "Regulated Power Supply",
      description: "Electronic circuit providing stable output voltage regardless of input fluctuations or load changes.",
      tags: ["Electronics", "Power Systems", "Circuit Design"],
      icon: "⚡",
      details: "A Regulated Power Supply (RPS) is an electronic device or circuit that provides a constant, stable output voltage regardless of changes in input voltage or load conditions. It ensures that sensitive electronic components receive the correct and safe voltage for proper operation. The basic components of an RPS include a transformer (to step down the AC voltage), a rectifier (to convert AC to DC), a filter (to smooth the output), and a voltage regulator (to maintain a fixed output). RPS units are essential in electronic labs, communication devices, and embedded systems where consistent power is critical to avoid malfunction or damage."
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-portfolio-cyan mx-auto"></div>
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Here are some of my notable projects that demonstrate my skills and interests
            in AI/ML and embedded systems development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-portfolio-card border-none shadow-lg card-hover overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-portfolio-cyan to-portfolio-pink"></div>
              <CardContent className="p-6 pb-2">
                <div className="text-4xl mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-portfolio-muted mb-4">{project.description}</p>
                
                {project.details && (
                  <button 
                    onClick={() => toggleProjectDetails(index)} 
                    className="flex items-center gap-2 text-portfolio-cyan hover:text-portfolio-cyanLight transition-colors mb-2"
                  >
                    <span>{expandedProjects.includes(index) ? 'Hide Details' : 'Show Details'}</span>
                    {expandedProjects.includes(index) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                )}
                
                {expandedProjects.includes(index) && project.details && (
                  <div className="mt-4 text-sm text-portfolio-muted">
                    <h4 className="font-semibold text-portfolio-cyan mb-2">Project Details:</h4>
                    <p className="text-portfolio-muted text-sm leading-relaxed mb-4">{project.details}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="p-6 pt-2">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-portfolio-background/50 px-3 py-1 rounded-full text-xs font-medium text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a 
            href="https://github.com/vivek001-US" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 text-portfolio-cyan hover:text-portfolio-cyanLight transition-colors"
          >
            <span>See more projects on GitHub</span>
            <Code className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
