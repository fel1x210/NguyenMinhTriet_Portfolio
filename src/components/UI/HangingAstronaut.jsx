import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { Model as AstronautModel } from './Astronaut';
import { motion } from 'framer-motion';

export default function HangingAstronaut() {
  return (
    <>
      <motion.div 
        className="hero__astronaut-wrapper"
        style={{ left: -253, top: -140 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
      >
        <div className="hero__astronaut-canvas">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Environment preset="city" />
            <Suspense fallback={null}>
              <Float 
                speed={0.9}
                rotationIntensity={0}
                floatIntensity={0.12}
                floatingRange={[-0.01, 0.01]}
              >
                <AstronautModel 
                  scale={1.5}
                  position={[0.83, -1.77, -0.7]}
                  rotation={[-1.63, 0.73, 2.55]}
                />
              </Float>
            </Suspense>
          </Canvas>
        </div>
      </motion.div>
    </>
  );
}