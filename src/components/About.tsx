import { Calendar, Code, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  const educationItems = [{
    period: "2023-2027",
    title: "B.Tech in AI & ML",
    institution: "University School of Automation & Robotics, Delhi",
    status: "Ongoing"
  }, {
    period: "2020-2023",
    title: "Diploma in Electronics & Communication Engineering",
    institution: "Delhi",
    status: "Completed with 77.8%"
  }, {
    period: "2020",
    title: "Secondary Education (10th)",
    institution: "CBSE",
    status: "Completed"
  }];
  const skills = [{
    category: "Languages",
    items: ["Python", "C/C++", "JavaScript"]
  }, {
    category: "Technologies",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "React"]
  }, {
    category: "Soft Skills",
    items: ["Teamwork", "Leadership", "Problem Solving", "Event Coordination"]
  }];
  return <section id="about" className="py-20 bg-portfolio-card/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-portfolio-cyan mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="lg:col-span-2">
            <Card className="bg-portfolio-card h-full border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-portfolio-cyan">Who I Am</h3>
                <p className="text-lg mb-4 text-zinc-100">
                  I'm Vivek Pal, a second-year B.Tech student specializing in Artificial Intelligence and Machine Learning at the University School of Automation & Robotics in Delhi.
                </p>
                <p className="text-lg mb-4 text-gray-100">
                  My passion lies in creating innovative technological solutions for real-world challenges. I have a particular interest in artificial intelligence, data science, and embedded systems.
                </p>
                <p className="text-lg text-gray-100">
                  I aspire to contribute to research and product development in impactful domains like healthcare, education, and sustainability, leveraging the power of AI to make a positive difference.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div>
            <Card className="bg-portfolio-card h-full border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-portfolio-cyan">Skills</h3>
                
                {skills.map((skillGroup, index) => <div key={index} className="mb-4 last:mb-0">
                    <h4 className="text-lg font-medium text-portfolio-pink mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => <span key={skillIndex} className="bg-portfolio-background px-3 py-1 rounded-full text-sm text-gray-100">
                          {skill}
                        </span>)}
                    </div>
                  </div>)}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Education Timeline</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-portfolio-cyan/30"></div>
            
            {/* Timeline items */}
            {educationItems.map((item, index) => <div key={index} className={`relative flex flex-col md:flex-row items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline bullet */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-portfolio-cyan flex items-center justify-center z-10">
                  <Calendar className="w-4 h-4 text-portfolio-background" />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'} pl-10 md:pl-0`}>
                  <Card className="bg-portfolio-card border-none shadow-lg card-hover">
                    <CardContent className="p-6">
                      <span className="text-sm text-portfolio-pink font-medium">{item.period}</span>
                      <h4 className="text-xl font-semibold mt-1">{item.title}</h4>
                      <p className="text-portfolio-muted">{item.institution}</p>
                      <p className="mt-1 text-sm font-medium text-zinc-300">{item.status}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>)}

            {/* Internship */}
            <div className="relative flex flex-col md:flex-row items-center mb-8">
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-portfolio-pink flex items-center justify-center z-10">
                <Briefcase className="w-4 h-4 text-portfolio-background" />
              </div>
              
              <div className="w-full md:w-[calc(50%-2rem)] pl-10 md:pl-8 md:pr-0">
                <Card className="bg-portfolio-card border-none shadow-lg card-hover">
                  <CardContent className="p-6">
                    <span className="text-sm text-portfolio-pink font-medium">June-July 2022</span>
                    <h4 className="text-xl font-semibold mt-1">Internship</h4>
                    <p className="text-portfolio-muted">BSES Yamuna Power Ltd.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;