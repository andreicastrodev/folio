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
import Introduction from "./components/about/Introduction";
import Works from "./components/work/Works";
import WorkDetails from "./components/work/WorkDetails";
function App() {
  return (
    <div className=" flex justify-center bg-primary w-full h-full">
      <div>
        <Header />
        <div className="mt-20 flex justify-center">
          <div className="mt-[-150px] mb-[-200px] h-canvas w-canvas">
            <Canvas>
              <ambientLight />
              <PerspectiveCamera
                makeDefault
                position={[100, 25, 0]}
                fov={50}
                zoom={40}
              />
              <OrbitControls autoRotate={true} zoo />
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
        </div>
        <div className="flex justify-center" >
          <div className="w-2/5">
            <WorkDetails/>
            <Works />
            <Flag />
            <Introduction />
            <Home />
            <Bio />
            <Hobby />
            <FindMe />
          </div>

        </div>

      </div>
    </div >
  );
}

export default App;
