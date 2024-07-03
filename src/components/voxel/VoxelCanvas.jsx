import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
} from "@react-three/drei";

import Com from "../../../public/Com";
import "../../App.css";

const VoxelCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <PerspectiveCamera
        makeDefault
        position={[100, 25, 0]}
        fov={50}
        zoom={50}
      />
      <OrbitControls autoRotate={true} enableZoom={false} enablePan={false} />
      <Suspense fallback={null}>
        <Com />
      </Suspense>
      <ContactShadows
        opacity={1}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
    </Canvas>
  );
};

export default VoxelCanvas;
