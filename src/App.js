import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";

import "./App.css";

const Box = () => {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      ref={ref}
      onClick={() => {
        api.velocity.set(0, 10, 0);
      }}
    >
      <boxBufferGeometry attach={"geometry"} />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};
const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <boxBufferGeometry attach={"geometry"} args={[100, 100]} />
      <meshLambertMaterial attach="material" color="seaforamgreen" />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}

export default App;
