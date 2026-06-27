import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

function FloatingShape() {
  const meshRef = useRef();

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    // Base rotation
    meshRef.current.rotation.x = elapsed * 0.2;
    meshRef.current.rotation.y = elapsed * 0.15;
    
    // Mouse hover reaction
    meshRef.current.rotation.x += state.pointer.y * 0.4;
    meshRef.current.rotation.y += state.pointer.x * 0.4;

    // Subtle scale pulsing
    const scale = 1 + Math.sin(elapsed * 2) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={meshRef}>
      {/* Outer glowing wireframe Torus Knot */}
      <mesh>
        <torusKnotGeometry args={[1, 0.35, 120, 16]} />
        <meshStandardMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.4}
          emissive="#22d3ee"
          emissiveIntensity={1.5}
        />
      </mesh>
      {/* Inner solid mesh with custom glass-like material */}
      <mesh>
        <torusKnotGeometry args={[0.96, 0.3, 100, 16]} />
        <meshStandardMaterial
          color="#4f46e5"
          transparent
          opacity={0.7}
          roughness={0.1}
          metalness={0.8}
          emissive="#4f46e5"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef();

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = elapsed * 0.02;
    pointsRef.current.rotation.x = state.pointer.y * 0.05;
  });

  return (
    <group ref={pointsRef}>
      <Stars
        radius={100}
        depth={50}
        count={2500}
        factor={4}
        saturation={0.5}
        fade
        speed={1}
      />
    </group>
  );
}

function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-transparent overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ec4899" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#22d3ee" />
        <directionalLight position={[0, 5, 5]} intensity={0.8} color="#ffffff" />
        
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
          <FloatingShape />
        </Float>
        
        <ParticleField />
      </Canvas>
    </div>
  );
}

export default ThreeScene;
