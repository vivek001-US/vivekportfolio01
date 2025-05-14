
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-portfolio-background border-t border-portfolio-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-muted">
              © {currentYear} Vivek Pal. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/vivek001-US"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-muted hover:text-portfolio-cyan transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://leetcode.com/u/vivekpal01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-muted hover:text-portfolio-cyan transition-colors"
            >
              <Code className="h-5 w-5" />
              <span className="sr-only">LeetCode</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-pal-525052336"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-muted hover:text-portfolio-cyan transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:palvivek0882@gmail.com"
              className="text-portfolio-muted hover:text-portfolio-cyan transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
