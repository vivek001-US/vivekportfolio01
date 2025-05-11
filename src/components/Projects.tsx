import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Code } from 'lucide-react';
const Projects = () => {
  const projects = [{
    title: "Data-Driven Estimation of Obesity Risk",
    description: "ML model for health risk prediction that analyzes personal health data to estimate obesity risk factors.",
    tags: ["Machine Learning", "Health Tech", "Data Analysis"],
    icon: "🧠"
  }, {
    title: "Embedded Line Detection Robot",
    description: "Autonomous robot using sensors & embedded logic to detect and follow line paths for navigation.",
    tags: ["Embedded Systems", "Robotics", "Sensors"],
    icon: "🤖"
  }, {
    title: "Automatic Street Light",
    description: "Energy-efficient street lighting system that automatically adjusts based on ambient light conditions.",
    tags: ["IoT", "Energy Efficiency", "Embedded Systems"],
    icon: "💡"
  }];
  return <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-portfolio-cyan mx-auto"></div>
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Here are some of my notable projects that demonstrate my skills and interests
            in AI/ML and embedded systems development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <Card key={index} className="bg-portfolio-card border-none shadow-lg card-hover overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-portfolio-cyan to-portfolio-pink"></div>
              <CardContent className="p-6 pb-0">
                <div className="text-4xl mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-portfolio-muted">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-4">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="bg-portfolio-background/50 px-3 py-1 rounded-full text-xs font-medium text-zinc-300">
                      {tag}
                    </span>)}
                </div>
              </CardFooter>
            </Card>)}
        </div>

        <div className="flex justify-center mt-10">
          <button className="group flex items-center gap-2 text-portfolio-cyan hover:text-portfolio-cyanLight transition-colors">
            <span>See more projects on GitHub</span>
            <Code className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>;
};
export default Projects;