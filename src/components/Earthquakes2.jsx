/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Loïc Norgeot (https://sketchfab.com/norgeotloic)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earthquakes-2010-2011-3a57cfbbcb1c45278c13bc66886dd6ee
title: Earthquakes - 2010 & 2011
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/bkorumaz/3d-project/main/src/images/earthquakes2.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.035}>
        <points geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_3.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} />
      </group>
    </group>
  )
}

useGLTF.preload('/earthquakes2.gltf')
