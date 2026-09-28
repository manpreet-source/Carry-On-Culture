"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, RoundedBox, ContactShadows } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function Case() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.18;
  });
  return (
    <group ref={ref} rotation={[0.04, -0.28, 0.02]}>
      <RoundedBox args={[2.7, 3.6, 0.95]} radius={0.22} smoothness={5}>
        <meshStandardMaterial color="#20201d" metalness={0.78} roughness={0.24} />
      </RoundedBox>
      <mesh position={[0, 0.18, 0.5]}>
        <boxGeometry args={[1.7, 2.55, 0.035]} />
        <meshStandardMaterial color="#e8e2d6" metalness={0.15} roughness={0.55} />
      </mesh>
      {[-0.92, 0.92].map((x) => (
        <mesh key={x} position={[x, -1.25, 0.48]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.14, 24]} />
          <meshStandardMaterial color="#151513" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export function CarryOnScene() {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <div aria-hidden="true" className="h-[420px] w-full md:h-[560px]">
      <Canvas camera={{ position: [4.4, 1.7, 6.8], fov: 34 }} dpr={[1, 1.6]} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 5, 5]} intensity={4} />
        <pointLight position={[-3, 1, 2]} intensity={16} color="#9ee9df" distance={8} />
        <Float speed={1.1} rotationIntensity={0.16} floatIntensity={0.55}>
          <Case />
        </Float>
        <ContactShadows position={[0, -2.05, 0]} opacity={0.34} scale={7} blur={2.6} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
