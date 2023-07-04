import { useSpring, animated, config } from "@react-spring/three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { TextureLoader } from "three";


const TextureSphere = ({position, scale : objectScale}) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const { scale } = useSpring({ 
    scale: active ? objectScale * 1.5 : objectScale,
    config: config.wobbly,
  })

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
      <animated.mesh
        scale={scale}
        position={position}
        ref={ref}
        onClick={() => setActive(!active)}
      >
        <animated.sphereGeometry
          args={[1, 32, 32]} 
        />
        
        <animated.meshStandardMaterial
          displacementScale={0.0}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap} 
        />
      </animated.mesh>
    </>
  )
}

export default TextureSphere;