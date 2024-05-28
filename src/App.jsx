import { Suspense } from "react";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
} from "@react-three/drei";
import { Route, Routes } from "react-router-dom";
import Works from "./components/work/Works";
import Shutendoji from "./components/work/Work-1";
import Com from "../public/Com";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <div className=" flex justify-center bg-primary w-full h-full">
      <div>
        <Header />
        <div className="mt-20 flex justify-center">
          <div className="mt-[-150px] mb-[-200px] h-canvas w-canvas xsm:w-sxm">
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
        <div className="flex justify-center">
        <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/shutendoji" element={<Shutendoji />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
