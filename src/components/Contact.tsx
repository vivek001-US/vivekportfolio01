import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, Phone, Github, MapPin, Code } from 'lucide-react';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };
  const contactInfo = [{
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "palvivek0882@gmail.com",
    link: "mailto:palvivek0882@gmail.com"
  }, {
    icon: <Linkedin className="h-6 w-6" />,
    title: "LinkedIn",
    value: "Vivek Pal",
    link: "https://www.linkedin.com/in/vivek-pal-525052336"
  }, {
    icon: <Github className="h-6 w-6" />,
    title: "GitHub",
    value: "vivek001-US",
    link: "https://github.com/vivek001-US"
  }, {
    icon: <Code className="h-6 w-6" />,
    title: "LeetCode",
    value: "vivekpal01",
    link: "https://leetcode.com/u/vivekpal01/"
  }, {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "+1 (123) 456-7890",
    link: "tel:+11234567890"
  }, {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    value: "Delhi, India",
    link: null
  }];
  return <section id="contact" className="py-20">
      <div className="section-container">
        

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          

          {/* Contact Info */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {contactInfo.map((item, index) => <Card key={index} className="bg-portfolio-card border-none shadow-lg card-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-portfolio-background/30 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-portfolio-cyan hover:underline">
                        {item.value}
                      </a> : <p className="text-portfolio-muted">{item.value}</p>}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;