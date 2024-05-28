import shutendoji from "../../images/banner-1.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Works = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }} // Initial position (off-screen bottom)
        animate={{ y: 0 }} // Final position (on-screen top)
        exit={{ y: "100%" }} // Exit position (off-screen bottom)
        transition={{ type: "spring", stiffness: 80, damping: 20 }} // Animation transition
        className="mt-5 ml-6"
      >
        <h1 className="text-2xl font-bold ">Works</h1>
        <Link to="/works/shutendoji" className="flex flex-wrap justify-between">
          <div className="mt-5 basis-2/5">
            <div className="flex flex-col justify-center items-center">
              <img
                className="h-32 w-full rounded-2xl	"
                src={shutendoji}
                alt=""
              />
              <div className="flex flex-col justify-center items-center mt-3">
                <h1 className="text-lg">Join &amp; Make</h1>
                <p className="text-center text-sm	">
                Brew your own Japanese sake with water, rice, and music. Experience a new way of making sake.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default Works;
