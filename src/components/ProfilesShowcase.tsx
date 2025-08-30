import { Github, Linkedin, Trophy, Code, Instagram, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProfilesShowcase = () => {
  const profiles = [
    {
      name: 'GitHub',
      icon: Github,
      description: 'Code Repository & Open Source',
      url: 'https://github.com/iotiangyanu',
      stats: 'View my projects & contributions',
      color: 'text-gray-800 dark:text-gray-200',
      bgColor: 'bg-gray-100 dark:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Professional Network',
      url: 'https://www.linkedin.com/in/gyanesh-dwivedi-698604254/',
      stats: 'Connect with me professionally',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'LeetCode',
      icon: Trophy,
      description: 'Coding Practice & DSA',
      url: 'https://leetcode.com/u/gyaneshdwivedi/',
      stats: 'Problem solving expertise',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      name: 'GeeksforGeeks',
      icon: Code,
      description: 'Technical Articles & Learning',
      url: 'https://www.geeksforgeeks.org/user/gyaneshdwivedi/',
      stats: 'Explore my technical journey',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      name: 'CodeChef',
      icon: Trophy,
      description: 'Competitive Programming',
      url: 'https://www.codechef.com/users/gyaneshdwivedi',
      stats: 'Algorithm competitions & contests',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      description: 'Personal Updates & Insights',
      url: 'https://www.instagram.com/dwivedi__gyanu?igsh=ZmZjNnpkOGt2N2h4',
      stats: 'Follow my journey',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20'
    }
  ];

  return (
    <section id="profiles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect With Me <span className="text-primary">Everywhere</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find me across various platforms where I share my coding journey, professional updates, 
            and connect with the tech community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <Card 
              key={profile.name} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in overflow-hidden border-0 shadow-lg" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <div className={`${profile.bgColor} p-6 transition-all group-hover:scale-105`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-background shadow-md group-hover:scale-110 transition-transform ${profile.color}`}>
                      <profile.icon className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{profile.description}</p>
                  <p className="text-sm font-medium text-primary mb-6">{profile.stats}</p>
                  
                  <Button 
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    variant="outline"
                  >
                    <a 
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Profile
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8">My Digital Presence</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Active Platforms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilesShowcase;