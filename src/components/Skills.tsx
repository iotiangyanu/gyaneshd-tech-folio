import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript', icon: '💛' },
        { name: 'C', icon: '⚡' },
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
      ]
    },
    {
      category: 'Database & Backend',
      skills: [
        { name: 'MySQL', icon: '🗄️' },
        { name: 'Firebase', icon: '🔥' },
      ]
    },
    {
      category: 'IoT & Hardware',
      skills: [
        { name: 'Arduino', icon: '🔧' },
        { name: 'ESP8266', icon: '📡' },
        { name: 'DHT11 Sensors', icon: '🌡️' },
        { name: 'IoT Integration', icon: '🔗' },
      ]
    },
    {
      category: 'Data Analytics & Tools',
      skills: [
        { name: 'Power BI', icon: '📊' },
        { name: 'Data Analysis', icon: '📈' },
        { name: 'Problem Solving', icon: '🧩' },
        { name: 'DSA', icon: '⚙️' },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.category} className="animate-fade-in" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
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