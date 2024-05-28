import shutendoji1 from "../../images/step-1.png";
import shutendoji2 from "../../images/step-2.png";
import shutendoji3 from "../../images/step-3.png";
import shutendoji4 from "../../images/step-4.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const WorkDetails = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }} // Initial position (off-screen bottom)
        animate={{ y: 0 }} // Final position (on-screen top)
        exit={{ y: "100%" }} // Exit position (off-screen bottom)
        transition={{ type: "spring", stiffness: 80, damping: 20 }} // Animation transition
        className=" z-10 w-3/6  px-3 py-2 mt-5  lg:w-4/6  sm:w-10/12 xsm:w-11/12"
      >
        <div>
          <div className="flex items-center">
            <div>
              <Link to="/works" className="text-blueLight tracking-wider">
                Works &nbsp;
              </Link>
              <span>&gt;</span>
            </div>

            <h1 className="ml-2 text-xl font-bold tracking-wider">
              Join &amp; Make
            </h1>
            <span className="ml-2 bg-greenLight text-sm p-0.5 tracking-wider">
              2022
            </span>
          </div>
          <div className="mt-2">
            <p className="tracking-wider">
              &nbsp; &nbsp; &nbsp;Join Make is an innovative platform merging
              traditional Japanese sake brewing with modern technology and
              music. Users can craft their own sake using water, rice, and
              curated music, creating a unique and immersive experience. The
              platform also integrates NFT technology, allowing ownership and
              trading of digital tokens linked to the brewing journey. Initially
              available in Japan and the USA, Join Make aims for global
              expansion, blending cultural heritage with contemporary digital
              trends.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-center">
              <h4 className="uppercase text-sm text-greenDarker font-bold bg-greenLight py-0.5 px-2.5">
                Website
              </h4>
              <span className="ml-2">
                <a href="#" className="text-blueLight tracking-wider">
                  https://stg-app.joinmake.jp/
                </a>
              </span>
            </div>
            <div className="flex items-center mt-2">
              <h4 className="uppercase text-sm text-greenDarker font-bold bg-greenLight py-0.5 px-2.5">
                Platform
              </h4>
              <span className="ml-2 ">Windows/macOS/Linux/iOS/Android</span>
            </div>
            <div className="flex items-center mt-2">
              <h4 className="uppercase text-sm text-greenDarker font-bold bg-greenLight py-0.5 px-2.5">
                Stack
              </h4>
              <span className="ml-2">NodeJS, VueJS, Amazon Web Services</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center items-center">
            <div>
              <img className="block" src={shutendoji1} alt="" />
            </div>
            <div className="mt-5">
              <img className="block" src={shutendoji3} alt="" />
            </div>
            <div className="mt-5">
              <img className="block" src={shutendoji2} alt="" />
            </div>
            <div className="mt-5">
              <img className="block" src={shutendoji4} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkDetails;
