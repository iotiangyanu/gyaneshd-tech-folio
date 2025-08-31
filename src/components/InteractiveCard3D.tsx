import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { 
  RoundedBox,
  Float,
  MeshWobbleMaterial,
  Text,
  Sparkles
} from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveCard3DProps {
  title?: string;
  isHovered?: boolean;
  variant?: 'primary' | 'secondary' | 'accent';
}

const FloatingCard = ({ title, isHovered, variant = 'primary' }: InteractiveCard3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.7) * 0.05;
      
      if (isHovered) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });
  
  const getColor = () => {
    switch (variant) {
      case 'primary': return '#3b82f6';
      case 'secondary': return '#8b5cf6';
      case 'accent': return '#06b6d4';
      default: return '#3b82f6';
    }
  };
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <RoundedBox 
        ref={meshRef}
        args={[2, 1.2, 0.1]} 
        radius={0.1} 
        smoothness={4}
        position={[0, 0, 0]}
      >
        <MeshWobbleMaterial
          color={getColor()}
          factor={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </RoundedBox>
      
      {title && (
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      )}
      
      <Sparkles
        count={20}
        scale={[2, 1.5, 0.2]}
        size={0.5}
        speed={0.3}
        color="white"
      />
    </Float>
  );
};

const InteractiveCard3D: React.FC<InteractiveCard3DProps> = ({ 
  title = "3D Card", 
  isHovered = false, 
  variant = 'primary' 
}) => {
  return (
    <div className="w-full h-32 pointer-events-none">
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
          <ambientLight intensity={0.4} />
          <pointLight position={[3, 3, 3]} intensity={0.8} />
          <pointLight position={[-3, -3, -3]} intensity={0.4} />
          
          <FloatingCard 
            title={title} 
            isHovered={isHovered} 
            variant={variant}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default InteractiveCard3D;