import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { 
  Sphere, 
  Float, 
  MeshDistortMaterial,
  Icosahedron,
  Box,
  MeshWobbleMaterial,
  Sparkles
} from '@react-three/drei';
import * as THREE from 'three';

interface Section3DDecorationProps {
  variant?: 'skills' | 'projects' | 'contact' | 'experience';
  intensity?: number;
}

const SkillsDecoration = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <>
      <Float speed={1.2} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron 
          args={[0.8, 0]} 
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <MeshDistortMaterial
            color={hovered ? "#60a5fa" : "#3b82f6"}
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Icosahedron>
      </Float>
      
      <Sparkles
        count={50}
        scale={[4, 4, 4]}
        size={1}
        speed={0.3}
        color="#8b5cf6"
      />
    </>
  );
};

const ProjectsDecoration = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  
  return (
    <group ref={groupRef}>
      {[...Array(4)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={1} floatIntensity={1.5}>
          <Box
            args={[0.3, 0.3, 0.3]}
            position={[
              Math.cos(i * Math.PI / 2) * 1.5,
              Math.sin(i * Math.PI / 2) * 0.5,
              Math.sin(i * Math.PI / 2) * 1
            ]}
          >
            <MeshWobbleMaterial
              color={`hsl(${200 + i * 30}, 70%, 60%)`}
              factor={0.6}
              speed={2 + i}
              roughness={0.2}
              metalness={0.7}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
};

const ContactDecoration = () => {
  return (
    <>
      <Float speed={0.8} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[0.6, 32, 32]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#10b981"
            distort={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>
      
      <Sparkles
        count={30}
        scale={[3, 3, 3]}
        size={0.8}
        speed={0.4}
        color="#06b6d4"
      />
    </>
  );
};

const ExperienceDecoration = () => {
  const [rotation, setRotation] = useState([0, 0, 0]);
  
  useFrame((state) => {
    setRotation([
      Math.sin(state.clock.elapsedTime * 0.3) * 0.2,
      state.clock.elapsedTime * 0.1,
      Math.cos(state.clock.elapsedTime * 0.2) * 0.1
    ]);
  });
  
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1.5}>
      <Icosahedron 
        args={[0.7, 1]} 
        position={[0, 0, 0]}
        rotation={rotation as [number, number, number]}
      >
        <MeshWobbleMaterial
          color="#f59e0b"
          factor={0.5}
          speed={1.8}
          roughness={0.3}
          metalness={0.6}
        />
      </Icosahedron>
    </Float>
  );
};

const Section3DDecoration: React.FC<Section3DDecorationProps> = ({ 
  variant = 'skills', 
  intensity = 0.3 
}) => {
  const renderDecoration = () => {
    switch (variant) {
      case 'skills':
        return <SkillsDecoration />;
      case 'projects':
        return <ProjectsDecoration />;
      case 'contact':
        return <ContactDecoration />;
      case 'experience':
        return <ExperienceDecoration />;
      default:
        return <SkillsDecoration />;
    }
  };
  
  return (
    <div 
      className="absolute top-1/2 right-8 w-32 h-32 pointer-events-none opacity-60 hidden lg:block"
      style={{ transform: 'translateY(-50%)' }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={intensity} />
          <pointLight position={[2, 2, 2]} intensity={0.6} color="#60a5fa" />
          <pointLight position={[-2, -2, -2]} intensity={0.4} color="#8b5cf6" />
          
          {renderDecoration()}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Section3DDecoration;