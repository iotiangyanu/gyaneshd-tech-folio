import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Cpu, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python (DSA)', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-yellow-600' },
        { name: 'C (Basic)', level: 70, color: 'from-gray-500 to-gray-600' },
        { name: 'HTML/CSS', level: 85, color: 'from-orange-500 to-orange-600' }
      ]
    },
    {
      title: 'Database & Backend',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'Firebase', level: 80, color: 'from-yellow-500 to-orange-600' }
      ]
    },
    {
      title: 'IoT & Hardware',
      icon: Cpu,
      skills: [
        { name: 'Arduino (Basic)', level: 75, color: 'from-teal-500 to-cyan-600' },
        { name: 'ESP8266', level: 80, color: 'from-purple-500 to-purple-600' },
        { name: 'DHT11 Sensors', level: 75, color: 'from-green-500 to-green-600' }
      ]
    },
    {
      title: 'Data Analytics',
      icon: Brain,
      skills: [
        { name: 'Power BI', level: 85, color: 'from-yellow-500 to-red-600' },
        { name: 'Data Visualization', level: 80, color: 'from-indigo-500 to-purple-600' }
      ]
    }
  ];

  const certifications = [
    'Programming in Python by Meta (Coursera)',
    'Generative AI (Form IBM Skill Build)',
    'Data Analytics using Power BI'
  ];

  const tools = [
    'Git & GitHub',
    'Android Development',
    'Mobile App Integration',
    'IoT Communication Protocols',
    'Robotics Control Systems',
    'Real-time Data Processing'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning from programming to IoT development and data analytics
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Technical Proficiency</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Combining strong programming fundamentals with practical IoT development experience 
            and data analytics capabilities. Passionate about learning new technologies and 
            applying them to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;