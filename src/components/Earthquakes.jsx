/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Loïc Norgeot (https://sketchfab.com/norgeotloic)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earthquakes-2000-to-2019-894ad84ceb8b444a91fbc05f20530bcd
title: Earthquakes - 2000 to 2019
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/bkorumaz/3d-project/main/src/3d-assets/earthquakes.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <points geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_3.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_6.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_7.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_9.geometry} material={materials['Scene_-_Root']} />
      </group>
    </group>
  )
}

useGLTF.preload('/earthquakes.gltf')
