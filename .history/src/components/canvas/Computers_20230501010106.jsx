import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three'


const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    import * as THREE from 'three';
    import { useGLTF } from '@react-three/drei';
    
    const Computers = () => {
      const computer = useGLTF("./desktop_pc/scene.gltf")
    
      return (
        <mesh>
          <hemisphereLight
            skyColor={new THREE.Color(0xffffff)}
            groundColor={new THREE.Color(0x444444)}
            intensity={0.5}
          />
          <pointLight intensity={1} position={[0, 10, 0]} />
          <primitive object={computer.scene} />
        </mesh>
      )
    }
    
    export default Computers;
    



  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
          <Computers />
      </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default Computers