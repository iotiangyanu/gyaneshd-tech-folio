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

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Header />
      <main>
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
