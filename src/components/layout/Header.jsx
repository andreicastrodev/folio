import { useEffect, useRef, useState } from "react";
import DarkMode from "../../utils/DarkMode";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavToggle(false); // Close the navigation if clicked outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const handleNavToggle = () => {
    setNavToggle(!navToggle); // Toggle the value of navToggle
  };

  return (
    <div
      className=" top-0 left-0 right-0 flex  justify-center p-4 font-sans tracking-widest font-medium items-center  bg-secondary fixed w-full z-50	 backdrop-blur-md dark:bg-[rgba(32,32,35,0.5)] 

  "
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <Link to="/" className="flex items-center">
            <h2 className="font-bold text-2xl ml-2 font-oldLondon">NXCOLE</h2>
          </Link>
        </div>

        <div className="flex justify-evenly items-center">
          <DarkMode />

          <div ref={navRef} className="mr-3">
            <button
              onClick={handleNavToggle}
              className={`rounded-md relative border border-solid border-greenLight dark:border-[rgba(255,255,255,0.16)] hover:bg-greenLight dark:hover:bg-[rgba(255,255,255,0.08)] ${
                navToggle
                  ? "bg-greenLight dark:bg-[rgba(255,255,255,0.08)]"
                  : ""
              } px-3 py-3`}
            >
              <RxHamburgerMenu className="text-xl" />
            </button>
            {navToggle && (
              <div className="absolute transform translate-x-[-134.33333px] translate-y-[16px] translate-z-0  w-1/6 sm:w-2/6 xsm:w-2/4 bg-white dark:bg-[rgba(255,255,255,0.16)]">
                <nav className="flex">
                  <ul className="w-full">
                    <li
                      className="cursor-pointer p-2 hover:bg-greenLight dark:hover:bg-[rgba(255,255,255,0.16)] p-3"
                      onClick={handleNavToggle}
                    >
                      <Link to="/works" className="block w-full h-full">
                        Works
                      </Link>
                    </li>
                    <li
                      className="cursor-pointer p-2 hover:bg-greenLight dark:hover:bg-[rgba(255,255,255,0.16)] p-3"
                      onClick={handleNavToggle}
                    >
                      <Link to="/contact" className="block w-full h-full">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
          {/* <div>
            <button className="border border-solid border-greenLight hover:bg-greenLight px-3 py-2">
              <MdLightMode className="text-2xl" />
            </button>
            <button></button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
