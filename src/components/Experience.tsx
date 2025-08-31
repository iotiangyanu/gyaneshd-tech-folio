import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Trophy, Calendar, MapPin, Lightbulb } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Core Member',
      organization: 'IOTuino - Technical Club of RKGIT',
      duration: 'May 2024 - Present',
      type: 'Leadership Role',
      location: 'RKGIT, Ghaziabad',
      icon: Trophy,
      status: 'Current',
      responsibilities: [
        'Conducted training sessions for students on IoT technologies',
        'Organized technical workshops and hands-on learning sessions',
        'Mentored junior students in IoT project development',
        'Coordinated club activities and technical events',
        'Promoted IoT awareness and practical learning among students'
      ],
      achievements: [
        'Successfully organized multiple IoT workshops',
        'Increased student participation in IoT projects',
        'Built strong technical community within the college'
      ],
      skills: ['Leadership', 'IoT Training', 'Technical Mentorship', 'Event Organization']
    },
    {
      title: 'Technical Trainer',
      organization: 'Sthapatya - Technical Society of RKGIT',
      duration: '2023 - 2024',
      type: 'Training & Mentorship',
      location: 'RKGIT, Ghaziabad',
      icon: BookOpen,
      status: 'Completed',
      responsibilities: [
        'Mentored and trained 300+ students in intra-college competition',
        'Specialized training on ESP8266-based Robot development',
        'Conducted hands-on sessions for "Smart Site Aspirant" competition',
        'Provided technical guidance and problem-solving support',
        'Developed training materials and curriculum for robotics'
      ],
      achievements: [
        'Successfully trained over 300 students',
        'High success rate in competition participation',
        'Recognized for outstanding mentorship quality',
        'Contributed to competition success of many participants'
      ],
      skills: ['Technical Training', 'Robotics', 'ESP8266', 'Mentorship', 'Curriculum Development']
    }
  ];

  const impactStats = [
    {
      number: '300+',
      label: 'Students Trained',
      description: 'Direct mentorship and training',
      icon: Users
    },
    {
      number: '2+',
      label: 'Leadership Roles',
      description: 'Technical clubs and societies',
      icon: Trophy
    },
    {
      number: '10+',
      label: 'Workshops Conducted',
      description: 'IoT and robotics training sessions',
      icon: Lightbulb
    },
    {
      number: '1+',
      label: 'Years Experience',
      description: 'In technical training and mentorship',
      icon: Calendar
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driving technical education and fostering innovation through mentorship and leadership
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="space-y-8 max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <exp.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <p className="text-primary font-medium text-lg">{exp.organization}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant={exp.status === 'Current' ? 'default' : 'secondary'}>
                        {exp.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, rIndex) => (
                          <li key={rIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-accent">Key Achievements:</h4>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Skills Developed:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, sIndex) => (
                            <Badge key={sIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Impact & Reach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-6">Leadership Philosophy</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              "I believe in empowering others through knowledge sharing and hands-on learning. 
              My experience in training over 300 students has taught me that the best way to learn 
              is by doing, and the best way to grow is by helping others grow. Through my roles 
              in technical clubs and societies, I've focused on creating inclusive learning 
              environments where students can explore, experiment, and excel in emerging technologies."
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Collaborative Learning</h4>
              <p className="text-sm text-muted-foreground">
                Fostering environments where students learn from each other and grow together
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Innovation Focus</h4>
              <p className="text-sm text-muted-foreground">
                Encouraging creative thinking and practical application of technology
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Excellence Driven</h4>
              <p className="text-sm text-muted-foreground">
                Setting high standards and supporting students to achieve their best potential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;