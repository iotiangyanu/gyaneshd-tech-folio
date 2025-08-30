import { Card, CardContent } from '@/components/ui/card';
import { Users, Trophy, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Trained 300+ students in IoT technologies and ESP8266-based robotics'
    },
    {
      icon: Trophy,
      title: 'Leadership',
      description: 'Core Member at IOTuino Technical Club, conducting training sessions'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Developed IoT solutions including weather monitoring and robotics'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Focus on practical applications of technology to solve real-world problems'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and dedicated to continuous learning and sharing knowledge
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                I am a Computer Science Engineering (IoT) student and tech enthusiast with a passion for leveraging programming and problem-solving skills to contribute to impactful projects. My journey in technology has been shaped by curiosity and a commitment to developing innovative solutions.
              </p>
              
              <p className="text-lg leading-relaxed">
                Having worked with various technologies across different domains, I've developed a 
                comprehensive skill set that spans from hardware programming with Arduino to data 
                analytics with Power BI. My experience includes developing IoT applications, creating 
                interactive dashboards, and building robotics projects.
              </p>
              
              <p className="text-lg leading-relaxed">
                Beyond personal projects, I'm deeply committed to knowledge sharing and community building. 
                As a core member of IOTuino Technical Club and a technical trainer, I've had the opportunity 
                to mentor and train hundreds of students, helping them develop their technical skills and 
                passion for technology.
              </p>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Major Projects Completed</div>
              <div className="text-xs text-muted-foreground mt-1">IoT, Robotics, Analytics</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Students Mentored</div>
              <div className="text-xs text-muted-foreground mt-1">Technical Training & Workshops</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Leadership Roles</div>
              <div className="text-xs text-muted-foreground mt-1">Technical Clubs & Societies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;