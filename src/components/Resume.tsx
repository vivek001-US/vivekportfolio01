
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';

const Resume = () => {
  // Experience data
  const experiences = [
    {
      title: "Software Developer",
      company: "Tech Solutions Inc",
      duration: "2022 - Present",
      description: "Developed and maintained web applications using React and Node.js. Implemented RESTful APIs and improved application performance by 40%."
    },
    {
      title: "Junior Developer",
      company: "Digital Innovations",
      duration: "2020 - 2022",
      description: "Assisted in developing frontend components using React. Collaborated with the design team to implement UI/UX improvements."
    }
  ];

  // Education data
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Tech University",
      duration: "2018 - 2020",
      description: "Specialized in Software Engineering with focus on web technologies and algorithms."
    },
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Engineering College",
      duration: "2014 - 2018",
      description: "Graduated with honors. Completed capstone project on real-time data visualization."
    }
  ];

  // Skills data
  const skills = [
    { name: "React/Next.js", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS/Tailwind", level: 90 },
    { name: "Git/GitHub", level: 85 },
    { name: "MongoDB/SQL", level: 75 }
  ];

  // Certifications data
  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Web Academy",
      year: "2021"
    },
    {
      name: "Advanced React Patterns",
      issuer: "React Training",
      year: "2022"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-portfolio-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-cyan mb-4">My Resume</h2>
          <p className="text-portfolio-muted max-w-2xl mx-auto">
            My professional journey, skills, and qualifications.
          </p>
          <Button className="mt-6 bg-portfolio-cyan hover:bg-portfolio-cyanLight text-portfolio-background rounded-full px-6 py-2">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="h-8 w-8 text-portfolio-cyan mr-4" />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-portfolio-card border-portfolio-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-portfolio-cyan">{exp.title}</h4>
                      <p className="text-portfolio-muted">{exp.company}</p>
                    </div>
                    <span className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-portfolio-accent text-sm">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-portfolio-text">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-portfolio-cyan mr-4" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-portfolio-card border-portfolio-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-portfolio-cyan">{edu.degree}</h4>
                      <p className="text-portfolio-muted">{edu.institution}</p>
                    </div>
                    <span className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-portfolio-accent text-sm">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-portfolio-text">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-portfolio-cyan mr-4" />
            <h3 className="text-2xl font-bold">Skills & Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Technical Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-portfolio-text">{skill.name}</span>
                      <span className="text-portfolio-cyan">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-portfolio-border rounded-full h-2">
                      <div
                        className="bg-portfolio-cyan h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Certifications</h4>
              <Card className="bg-portfolio-card border-portfolio-border">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {certifications.map((cert, index) => (
                      <div 
                        key={index} 
                        className={`${index !== 0 ? 'pt-6 border-t border-portfolio-border' : ''}`}
                      >
                        <h5 className="text-lg font-medium text-portfolio-cyan">{cert.name}</h5>
                        <div className="flex justify-between text-sm mt-2">
                          <span className="text-portfolio-muted">{cert.issuer}</span>
                          <span className="text-portfolio-accent">{cert.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
