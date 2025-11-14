import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Model as PowerbankModel } from './PowerbankModel'; 

function PowerbankScene() {
  return (
    <div className="h-[400px] sm:h-[500px] md:h-[600px] w-full" style={{ background: '#1E1E1E' }}> 
      <Canvas 
        camera={{ position: [2, 0, 5], fov: 40 }}
        dpr={[1, 2]} 
      >
        <Suspense fallback={<Html center style={{ color: 'white' }}><span className="text-xs sm:text-sm">Loading 3D Model...</span></Html>}>
          
          <PowerbankModel 
            position={[0, -0.5, 0]} 
            rotation={[0, 0.5, 0]} 
          />

          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Environment preset="city" /> 

          <OrbitControls 
            enableZoom={true} 
            maxPolarAngle={Math.PI / 2} 
          />
        
        </Suspense>
      </Canvas>
    </div>
  );
}

export default PowerbankScene;