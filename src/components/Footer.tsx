import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, Download, Github, Linkedin, Code, FileText, Trophy } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/gyaneshhdwivedii'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/gyaneshdwivedi'
    },
    {
      icon: Code,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/gyaneshdwivedi/'
    },
    {
      icon: FileText,
      label: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/user/gyaneshdwivedi/'
    },
    {
      icon: Trophy,
      label: 'CodeChef',
      href: 'https://www.codechef.com/users/gyaneshdwivedi'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mr-3">
                GD
              </div>
              <div>
                <h3 className="text-xl font-bold">Gyanesh Dwivedi</h3>
                <p className="text-sm text-muted-foreground">CSE (IoT) Student & Tech Enthusiast</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Passionate about IoT, robotics, and emerging technologies. 
              Always eager to learn, share knowledge, and collaborate on innovative projects.
            </p>
            
            {/* Resume Download */}
            <Button className="mb-4">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            
            {/* Contact Info */}
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>📧 g.dwivedi8924@gmail.com</p>
              <p>📱 +91 9696553118</p>
              <p>📍 Ghaziabad, Uttar Pradesh, India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Gyanesh Dwivedi. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Built for showcasing innovation in technology</span>
          </div>
        </div>

        {/* Tech Stack Attribution */}
        <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
          <div className="text-center text-xs text-muted-foreground">
            <p>This portfolio showcases projects in IoT, Robotics, Data Analytics, and Web Development</p>
            <p className="mt-1">
              Technologies: React • TypeScript • Tailwind CSS • Vite • Shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;