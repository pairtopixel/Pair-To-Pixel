import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import { EarbudsModel } from './EarbudsModel';
import { MouseModel } from './MouseModel';
import { PowerbankModelAlt } from './PowerbankModelAlt';

// Rotating Model Wrapper
const RotatingModel = ({ children, speed = 1 }) => {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed;
    }
  });
  
  return <group ref={groupRef}>{children}</group>;
};

// Individual Product Card
const ProductCard = ({ ModelComponent, title, scale = 1, autoRotate = true, cameraPosition = [0, 0, 5] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full h-[400px] rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: cameraPosition, fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={<Html center><div className="text-white">Loading...</div></Html>}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {autoRotate && !isHovered ? (
            <RotatingModel speed={0.5}>
              <ModelComponent scale={scale} />
            </RotatingModel>
          ) : (
            <ModelComponent scale={scale} />
          )}
          
          {isHovered && (
            <OrbitControls 
              enableZoom={true}
              enablePan={false}
              maxDistance={15}
              minDistance={3}
            />
          )}
        </Suspense>
      </Canvas>
      
      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-white text-lg font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
};

// Main Showcase Section
const ProductShowcase = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12">
        Spin It. Explore It. Experience It.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left Product - Powerbank  */}
      <ProductCard 
          ModelComponent={PowerbankModelAlt}
          title="Power Bank"
          scale={0.5}
          cameraPosition={[0, 0, 8]}
        />
        
        {/* Center Product - Mouse (Larger but zoomed out more) */}
        <ProductCard 
          ModelComponent={MouseModel}
          title="Gaming Mouse"
          scale={0.8}
          cameraPosition={[0, 0, 10]}
        />
        
        {/* Right Product - Earbuds */}
           <ProductCard 
          ModelComponent={EarbudsModel}
          title="Premium Earbuds"
          scale={0.8}
          cameraPosition={[0, 0, 5]}
        />
       
      </div>
    </section>
  );
};

export default ProductShowcase;