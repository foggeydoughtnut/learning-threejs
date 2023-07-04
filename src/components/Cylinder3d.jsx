import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react"

const Cylinder3d = ({ position, wireframe, scale }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      position={position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(e) => setClicked(!clicked)}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
    >
      <cylinderGeometry args={scale} />
      <meshStandardMaterial
        wireframe={wireframe}
        color={hovered ? "red" : "blue"}
      />
    </mesh>
  )
}
export default Cylinder3d;