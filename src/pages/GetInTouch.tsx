
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MessageSquare, Heart } from 'lucide-react';

const GetInTouch = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
        description: "Thank you for reaching out. I'll get back to you soon!"
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-portfolio-background text-portfolio-text flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-portfolio-cyan">Touch</span>
            </h1>
            <div className="h-1 w-24 bg-portfolio-pink mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-portfolio-muted max-w-2xl mx-auto leading-relaxed">
              I'd love to hear from you! Whether you have a question, project idea, or just want to say hello, 
              feel free to drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <Card className="bg-portfolio-card border-none shadow-lg card-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-portfolio-background/30 p-3 rounded-lg text-portfolio-cyan">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <a href="mailto:palvivek0882@gmail.com" className="text-portfolio-cyan hover:underline">
                      palvivek0882@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              {/* Message Card */}
              <Card className="bg-portfolio-card border-none shadow-lg card-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-portfolio-background/30 p-3 rounded-lg text-portfolio-pink">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Message</h3>
                    <p className="text-portfolio-muted">Fill out the form and I'll respond promptly</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Appreciation Card */}
              <Card className="bg-portfolio-card border-none shadow-lg card-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-portfolio-background/30 p-3 rounded-lg text-portfolio-cyan">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Thank You</h3>
                    <p className="text-portfolio-muted">I appreciate you taking the time to connect</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="lg:col-span-2 bg-portfolio-card border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        required 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="border-portfolio-cyan/20 focus:border-portfolio-cyan bg-portfolio-background/30" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="border-portfolio-cyan/20 focus:border-portfolio-cyan bg-portfolio-background/30" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="What's this about?" 
                      required 
                      value={formData.subject} 
                      onChange={handleChange} 
                      className="border-portfolio-cyan/20 focus:border-portfolio-cyan bg-portfolio-background/30" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message" 
                      required 
                      rows={6} 
                      value={formData.message} 
                      onChange={handleChange} 
                      className="border-portfolio-cyan/20 focus:border-portfolio-cyan resize-none bg-portfolio-background/30" 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-portfolio-cyan hover:bg-portfolio-cyanLight text-portfolio-background font-medium rounded-md"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetInTouch;
