import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Github, ExternalLink, Cpu, CloudRain, BarChart3, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'ESP8266-based Robot',
      shortDescription: 'Remote and voice-controlled robot using Android app with Wi-Fi connectivity',
      fullDescription: 'Developed an intelligent robot controlled both remotely and via voice commands through a custom Android application. The project demonstrates seamless integration between hardware (ESP8266 microcontroller) and software (Android app) with Wi-Fi communication protocols.',
      icon: Cpu,
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['ESP8266', 'Arduino', 'Android Development', 'Wi-Fi Communication', 'Voice Recognition'],
      problemSolved: 'Creating an accessible and user-friendly robotic control system that can be operated through multiple input methods',
      approach: 'Utilized ESP8266 for wireless connectivity, implemented voice recognition in Android app, and designed a responsive robot chassis with motor control systems',
      keyTakeaways: [
        'Learned IoT communication protocols',
        'Gained experience in mobile app development',
        'Understanding of hardware-software integration'
      ],
      githubUrl: '#',
      demoUrl: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'IoT Weather Monitoring Bot',
      shortDescription: 'Real-time weather monitoring using DHT11 sensor, Firebase, and mobile app',
      fullDescription: 'Built a comprehensive weather monitoring system that collects real-time environmental data using DHT11 temperature and humidity sensors. The system stores data in Firebase and provides access through a mobile application for remote monitoring.',
      icon: CloudRain,
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['DHT11 Sensor', 'Firebase', 'Mobile App Development', 'Real-time Database', 'Arduino'],
      problemSolved: 'Providing real-time environmental monitoring solution for remote locations with data logging capabilities',
      approach: 'Integrated DHT11 sensors with microcontroller, established Firebase connection for data storage, and developed mobile interface for data visualization',
      keyTakeaways: [
        'Experience with sensor integration',
        'Cloud database management skills',
        'Real-time data processing knowledge'
      ],
      githubUrl: '#',
      demoUrl: '#',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Airline Data Analytics Dashboard',
      shortDescription: 'Interactive Power BI dashboard analyzing airline customer data and trends',
      fullDescription: 'Designed and developed an interactive Power BI dashboard to visualize airline customer data, focusing on demographics, travel trends, satisfaction metrics, and class preferences. The dashboard provides actionable insights for business decision-making.',
      icon: BarChart3,
      image: '/placeholder.svg?height=200&width=300',
      technologies: ['Power BI', 'Data Visualization', 'Data Analytics', 'Business Intelligence', 'SQL'],
      problemSolved: 'Transforming raw airline data into meaningful insights for business strategy and customer satisfaction improvement',
      approach: 'Cleaned and processed large datasets, created interactive visualizations, and implemented filtering systems for dynamic data exploration',
      keyTakeaways: [
        'Advanced data visualization skills',
        'Business intelligence concepts',
        'Data-driven decision making experience'
      ],
      githubUrl: '#',
      demoUrl: '#',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in IoT, robotics, and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 bg-muted"
                />
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-3">
                    <selectedProject.icon className="w-8 h-8 text-primary" />
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg bg-muted"
                  />
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Problem Solved</h3>
                    <p className="text-muted-foreground">{selectedProject.problemSolved}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Approach</h3>
                    <p className="text-muted-foreground">{selectedProject.approach}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Takeaways</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {selectedProject.keyTakeaways.map((takeaway: string, index: number) => (
                        <li key={index}>{takeaway}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button onClick={() => window.open(selectedProject.githubUrl, '_blank')}>
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                    <Button variant="outline" onClick={() => window.open(selectedProject.demoUrl, '_blank')}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;