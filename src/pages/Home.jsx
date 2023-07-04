import { Canvas } from "@react-three/fiber";
import Monkey from "../components/Monkey";
import TextureSphere from "../components/TextureSphere";


const Home = () => {
  return (
      <div className="bg-blue-400" style={{height: '90vh', width: '90vh'}}>
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
        >
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 5, 10]} color={[1.0, 1.0, 1.0]} />
          <Monkey position={[0, 2, 0]} scale={0.75}/>
          <TextureSphere scale={1.0} position={[0, -1, 0]}/>
        </Canvas>
      </div>
  );
}
export default Home;