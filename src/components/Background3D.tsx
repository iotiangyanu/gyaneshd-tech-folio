import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import { 
  Sphere, 
  Float, 
  MeshDistortMaterial, 
  Stars,
  Torus,
  Icosahedron,
  MeshWobbleMaterial,
  Environment,
  Sparkles
} from '@react-three/drei';
import * as THREE from 'three';

// Particle System Component
const ParticleField = () => {
  const mesh = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * viewport.width * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, [viewport]);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      mesh.current.rotation.y += 0.002;
      
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + positions[i]) * 0.001;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={2000}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors sizeAttenuation blending={THREE.AdditiveBlending} />
    </points>
  );
};

// Interactive 3D Shapes
const InteractiveShapes = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  
  return (
    <>
      {/* Main floating torus */}
      <Float speed={1} rotationIntensity={2} floatIntensity={1.5}>
        <Torus
          args={[1.5, 0.6, 16, 32]}
          position={[3, 2, -2]}
          onPointerOver={() => setHovered(0)}
          onPointerOut={() => setHovered(null)}
        >
          <MeshWobbleMaterial
            color={hovered === 0 ? "#60a5fa" : "#3b82f6"}
            attach="material"
            factor={0.6}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Torus>
      </Float>

      {/* Icosahedron with distortion */}
      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron
          args={[1.2, 0]}
          position={[-3, -1, -1]}
          onPointerOver={() => setHovered(1)}
          onPointerOut={() => setHovered(null)}
        >
          <MeshDistortMaterial
            color={hovered === 1 ? "#a855f7" : "#8b5cf6"}
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0.2}
            metalness={0.6}
          />
        </Icosahedron>
      </Float>

      {/* Central sphere with enhanced material */}
      <Float speed={0.8} rotationIntensity={1} floatIntensity={1}>
        <Sphere
          args={[1, 64, 64]}
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(2)}
          onPointerOut={() => setHovered(null)}
        >
          <MeshDistortMaterial
            color={hovered === 2 ? "#22d3ee" : "#06b6d4"}
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      {/* Smaller accent spheres */}
      <Float speed={1.5} rotationIntensity={3} floatIntensity={2}>
        <Sphere args={[0.4, 32, 32]} position={[-2, 2, 1]}>
          <MeshWobbleMaterial
            color="#10b981"
            attach="material"
            factor={0.8}
            speed={4}
            roughness={0.3}
            metalness={0.7}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <Sphere args={[0.3, 32, 32]} position={[2, -2, 2]}>
          <MeshWobbleMaterial
            color="#f59e0b"
            attach="material"
            factor={1}
            speed={5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>
    </>
  );
};

// Enhanced lighting setup
const EnhancedLighting = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 3;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 3;
    }
  });
  
  return (
    <>
      <ambientLight intensity={0.3} color="#4f46e5" />
      <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        intensity={1}
        color="#ffffff"
        castShadow
      />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#06b6d4"
      />
    </>
  );
};

const Background3D = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        shadows
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={['#1e293b', 5, 50]} />
          <EnhancedLighting />
          <Environment preset="night" />
          
          {/* Stars background */}
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade={true}
            speed={0.5}
          />
          
          {/* Sparkles effect */}
          <Sparkles
            count={200}
            scale={[10, 10, 10]}
            size={2}
            speed={0.4}
            color="#60a5fa"
          />
          
          {/* Interactive 3D shapes */}
          <InteractiveShapes />
          
          {/* Particle field */}
          <ParticleField />
        </Suspense>
      </Canvas>
      
      {/* Scroll-based overlay effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: Math.min(scrollY / 1000, 0.5)
        }}
      />
    </div>
  );
};

export default Background3D;