import { Suspense } from "react";
import Home from "./components/home/Home";
import Flag from "./components/layout/Flag";
import Header from "./components/layout/Header";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
} from "@react-three/drei";
import Com from "../public/Com";
import "./App.css";
import Bio from "./components/about/Bio";
import Hobby from "./components/about/Hobby";
import FindMe from "./components/about/FindMe";
function App() {
  return (
    <div className=" flex justify-center">
      <div className="w-3/6">
        <Header />
        <div className="mt-10">
          <Canvas>
            <ambientLight />
            <PerspectiveCamera
              makeDefault
              position={[50, 50, 100]}
              fov={50}
              zoom={80}
            />
            <OrbitControls autoRotate={true} />
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
        </div>

        <Flag />
        <Home />
        <Bio/>
        <Hobby/>
        <FindMe/>
      </div>
    </div>
  );
}

export default App;
