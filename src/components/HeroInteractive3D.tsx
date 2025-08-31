import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { 
  Sphere, 
  Float, 
  MeshDistortMaterial,
  Torus,
  Cylinder,
  MeshWobbleMaterial,
  Text3D,
  Center
} from '@react-three/drei';
import * as THREE from 'three';

const HolographicRings = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.3;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });
  
  return (
    <group ref={group}>
      {[...Array(5)].map((_, i) => (
        <Torus
          key={i}
          args={[2 + i * 0.5, 0.05, 16, 32]}
          position={[0, 0, i * 0.2]}
          rotation={[Math.PI / 2, 0, i * 0.2]}
        >
          <meshBasicMaterial 
            color={`hsl(${220 + i * 20}, 70%, 60%)`}
            transparent
            opacity={0.6 - i * 0.1}
          />
        </Torus>
      ))}
    </group>
  );
};

const TechSpheres = () => {
  return (
    <>
      <Float speed={1} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[0.3, 32, 32]} position={[2.5, 1, 0]}>
          <MeshWobbleMaterial
            color="#3b82f6"
            factor={0.6}
            speed={2}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.25, 32, 32]} position={[-2, 0.5, 0.5]}>
          <MeshWobbleMaterial
            color="#8b5cf6"
            factor={0.8}
            speed={3}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[0.2, 32, 32]} position={[1.5, -1.5, -0.5]}>
          <MeshWobbleMaterial
            color="#06b6d4"
            factor={1}
            speed={4}
            roughness={0.1}
            metalness={0.7}
          />
        </Sphere>
      </Float>
    </>
  );
};

const DataStreams = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((child, i) => {
        child.rotation.z = state.clock.elapsedTime * (0.5 + i * 0.1);
      });
    }
  });
  
  return (
    <group ref={linesRef}>
      {[...Array(8)].map((_, i) => (
        <Cylinder
          key={i}
          args={[0.02, 0.02, 4, 8]}
          position={[
            Math.cos(i * Math.PI / 4) * 3,
            Math.sin(i * Math.PI / 4) * 0.5,
            Math.sin(i * Math.PI / 4) * 2
          ]}
          rotation={[0, 0, i * Math.PI / 4]}
        >
          <meshBasicMaterial 
            color={`hsl(${180 + i * 20}, 80%, 50%)`}
            transparent
            opacity={0.4}
          />
        </Cylinder>
      ))}
    </group>
  );
};

const HeroInteractive3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#60a5fa" />
          <pointLight position={[-5, -5, -5]} intensity={0.6} color="#8b5cf6" />
          
          <HolographicRings />
          <TechSpheres />
          <DataStreams />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroInteractive3D;