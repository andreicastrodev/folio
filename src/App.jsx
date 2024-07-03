import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Works from "./components/work/Works";
import Shutendoji from "./components/work/Work-1";
import "./App.css";
import Contact from "./components/about/Contact";
import { motion, AnimatePresence } from "framer-motion";
import VoxelCanvas from "./components/voxel/VoxelCanvas";
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

function App() {
  const location = useLocation();

  return (
    <div className="flex justify-center bg-primary w-full h-full dark:text-white dark:bg-bodyBG ">
      <div>
        <Header />
        <div className="mt-20 flex justify-center">
          <div className="mt-[-150px] mb-[-200px] h-canvas w-canvas xsm:w-sxm">
            <VoxelCanvas/>
          </div>
        </div>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <motion.div
            key={location.pathname}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut" }}
            className="flex justify-center z-40"
          >
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/shutendoji" element={<Shutendoji />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer/>

      </div>
    </div>
  );
}

export default App;
