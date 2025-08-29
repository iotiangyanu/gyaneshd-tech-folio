import { Github, Linkedin, Award, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CodingPlatforms = () => {
  const platforms = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Professional Network',
      url: 'https://www.linkedin.com/in/gyaneshdwivedi/',
      stats: 'Connect with me',
      color: 'text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      description: 'Code Repository',
      url: 'https://github.com/gyaneshdwivedi',
      stats: 'View my projects',
      color: 'text-gray-800 dark:text-gray-200'
    },
    {
      name: 'LeetCode',
      icon: Trophy,
      description: 'Coding Practice',
      url: 'https://leetcode.com/u/gyaneshdwivedi/',
      stats: 'Problem Solver',
      color: 'text-orange-500'
    },
    {
      name: 'GeeksforGeeks',
      icon: Award,
      description: 'Programming Platform',
      url: 'https://www.geeksforgeeks.org/user/gyaneshdwivedi/',
      stats: 'Technical Articles',
      color: 'text-green-600'
    },
    {
      name: 'CodeChef',
      icon: Trophy,
      description: 'Competitive Programming',
      url: 'https://www.codechef.com/users/gyaneshdwivedi',
      stats: 'Algorithm Expert',
      color: 'text-amber-600'
    }
  ];

  return (
    <section id="platforms" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Coding <span className="text-primary">Platforms</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Connect with me across various coding and professional platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {platforms.map((platform, index) => (
            <Card key={platform.name} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 rounded-full bg-background group-hover:scale-110 transition-transform ${platform.color}`}>
                    <platform.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                <p className="text-sm font-medium text-primary mb-4">{platform.stats}</p>
                <a 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                >
                  Visit Profile
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;