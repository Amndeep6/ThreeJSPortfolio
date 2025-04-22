"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Group } from "three";

function Model({ isMobile }: { isMobile: boolean }) {
  const modelRef = useRef<Group>(null);
  
  // Rotate the model
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <group ref={modelRef} scale={isMobile ? 1.5 : 2.5} position={[0, -1, 0]}>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial 
            color="#4169e1" 
            wireframe 
          />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial 
            color="#4169e1" 
            metalness={0.6}
            roughness={0.2}
            opacity={0.6}
            transparent
          />
        </mesh>
      </group>
    </mesh>
  );
}

export default function HeroModel() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if the device is mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!mounted) {
    return <div className="w-full h-[350px] md:h-[500px] bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>;
  }

  return (
    <div className="w-full h-[350px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full"
      >
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model isMobile={isMobile} />
        <Preload all />
      </Canvas>
    </div>
  );
} 