import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";


const TextureSphere = ({position, scale}) => {
  const ref = useRef(null);

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    '/pavingStone/PavingStones092_1K_Color.jpg',
    '/pavingStone/PavingStones092_1K_Displacement.jpg',
    '/pavingStone/PavingStones092_1K_NormalGL.jpg',
    '/pavingStone/PavingStones092_1K_Roughness.jpg',
    '/pavingStone/PavingStones092_1K_AmbientOcclusion.jpg',
  ])

  useFrame((state, delta) => (ref.current.rotation.y -= 0.01));

  return (
    <>
      <mesh
        scale={scale}
        position={position}
        ref={ref}
      >
        <sphereGeometry 
          args={[1, 32, 32]} 
        />
        <meshStandardMaterial
          displacementScale={0.0}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap} 
        />
      </mesh>
    </>
  )
}

export default TextureSphere;