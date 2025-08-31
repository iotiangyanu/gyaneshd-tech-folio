import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import CodingPlatforms from '@/components/CodingPlatforms';
import ProfilesShowcase from '@/components/ProfilesShowcase';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Background3D from '@/components/Background3D';
import MouseFollower3D from '@/components/MouseFollower3D';

const Index = () => {
  useEffect(() => {
    // Apply dark theme by default
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = 'hsl(210, 20%, 8%)';
  }, []);

  return (
    <div className="min-h-screen relative perspective overflow-x-hidden">
      <MouseFollower3D />
      <Background3D />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <CodingPlatforms />
        <ProfilesShowcase />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
