import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

import * as THREE from 'three'
import { HemisphereLight } from 'three'



const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh>
   
    <HemisphereLight
      intensity={0.5}
      groundColor={new THREE.Color('black')}
    />
{/* <hemisphereLight intensity={0.15} groundColor='black' /> */}
      
      
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene}
      />
    </mesh>
  )
}

export default Computers