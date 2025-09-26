import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Computer Science Engineering (IoT)',
      institution: 'Raj Kumar Goel Institute of Technology',
      location: 'Ghaziabad, Uttar Pradesh',
      duration: '2022 - 2026',
      type: 'Bachelor\'s Degree',
      icon: GraduationCap,
      highlights: [
        'Specialized in Internet of Things (IoT)',
        'Strong foundation in Computer Science fundamentals',
        'Active participation in technical clubs and societies'
      ]
    },
    {
      degree: 'Class XII (CBSE)',
      institution: 'Stepping Stone Inter College',
      location: 'Gorakhpur, Uttar Pradesh',
      duration: '2020 - 2022',
      status: 'Completed',
      type: 'Higher Secondary',
      icon: GraduationCap,
      highlights: [
        'Science stream with focus on Mathematics and Physics',
        'Foundation for engineering studies',
        'Developed analytical and problem-solving skills'
      ]
    }
  ];

  const participations = [
    {
      title: 'Data Analytics using Power BI',
      organization: 'TECHTIP24',
      type: 'Seminar',
      date: 'October 2023',
      icon: TrendingUp,
      description: 'Attended seminar on advanced data analytics techniques using Power BI'
    },
    {
      title: 'IoT Innovate Challenge Workshop & Competition',
      organization: 'IoTuino Club',
      type: 'Workshop & Competition',
      date: 'December 2023',
      icon: Award,
      description: 'Participated in IoT innovation workshop and competition, showcasing technical skills'
    },
    {
      title: '3-Day IoT Workshop',
      organization: 'Dept. of CSE (IoT), RKGIT',
      type: 'Workshop',
      date: 'January 2024',
      icon: GraduationCap,
      description: 'Intensive workshop on IoT technologies and practical implementations'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Learning</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning journey in technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Background</h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <edu.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {edu.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    {edu.status && (
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">{edu.status}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Workshops & Participations */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Workshops & Participations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participations.map((participation, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <participation.icon className="w-5 h-5 text-accent" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {participation.type}
                    </Badge>
                  </div>
                  
                  <h4 className="font-semibold mb-2 line-clamp-2">{participation.title}</h4>
                  <p className="text-sm text-primary font-medium mb-2">{participation.organization}</p>
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {participation.date}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {participation.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Stats */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8">Academic Journey</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Final Year</div>
              <div className="text-sm text-muted-foreground">Engineering Student</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">71.32%</div>
              <div className="text-sm text-muted-foreground">Upto 6th Semester</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Technical Workshops</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Certified Courses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;