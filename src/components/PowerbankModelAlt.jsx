import React from 'react'
import { useGLTF } from '@react-three/drei'

export function PowerbankModelAlt(props) {
  const { nodes, materials } = useGLTF('/models/powerbank_HT for_web.glb')
  
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Scene || nodes[Object.keys(nodes)[0]]} />
    </group>
  )
}

useGLTF.preload('/models/powerbank_HT for_web.glb')