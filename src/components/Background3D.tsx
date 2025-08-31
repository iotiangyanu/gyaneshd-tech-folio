import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Sphere, Float, MeshDistortMaterial } from '@react-three/drei';

const FloatingGeometry = () => {
  return (
    <>
      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[2, 0, 0]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.4}
            metalness={0.1}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
        <Sphere args={[0.5, 32, 32]} position={[-2, 1, -1]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0.6}
            metalness={0.2}
          />
        </Sphere>
      </Float>
      
      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.8, 48, 48]} position={[0, -1, -2]}>
          <MeshDistortMaterial
            color="#06b6d4"
            attach="material"
            distort={0.2}
            speed={1.5}
            roughness={0.3}
            metalness={0.15}
          />
        </Sphere>
      </Float>
    </>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} intensity={1} />
          <FloatingGeometry />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;