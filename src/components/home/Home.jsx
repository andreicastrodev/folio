import Flag from "../layout/Flag";
import Introduction from "../about/Introduction";
import Bio from "../about/Bio";
import Hobby from "../about/Hobby";
import FindMe from "../about/FindMe";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }} // Initial position (off-screen bottom)
        animate={{ y: 0 }} // Final position (on-screen top)
        exit={{ y: "100%" }} // Exit position (off-screen bottom)
        transition={{ type: "spring", stiffness: 80, damping: 20 }} // Animation transition 
        className="flex font-sans tracking-wide flex-col mt-5 w-3/6 lg:w-4/6 sm:w-10/12 xsm:w-full"
      >
      <Flag/>
      <Introduction/>
      <div className="px-9 py-2 flex flex-col items-center">
        <div className="">
          <h1 className="text-2xl xsm:text-1xl font-bold underline underline-offset-8 decoration-4">Work</h1>
          <p className="text-1xl xsm:text-lg mt-2 ">
            I&apos;m a dedicated web developer based in Manila, Philippines, 
            specializing in full-stack development with expertise in React.js and Node.js. 
            As a digital craftsman,I&apos;m committed to crafting intuitive user experiences 
            that enhance our digital landscape. From sleek frontend interfaces powered by React.js 
            to robust backend solutions utilizing Node.js, I blend creativity and technical prowess to 
            build seamless web applications.
          </p>
        </div>
        <div className="mt-3">
        <Link to="/works" className="cursor-pointer	 py-3 px-5 text-white font-medium	 tracking-wide	 spacing-5 text-lg hover:bg-greenDark	bg-green inline-block rounded-lg" >My portfolio &gt;</Link>
        </div>
      </div>
      <Bio/>
      <Hobby/>
      <FindMe/>

      </motion.div>
    </AnimatePresence>

  );
};

export default Home;
