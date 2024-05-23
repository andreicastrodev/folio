import { useEffect, useRef, useState } from "react";
import {  MdLightMode } from "react-icons/md";
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
      className=" top-0 left-0 right-0 flex  justify-center p-4 font-sans tracking-widest font-medium items-center  bg-secondary fixed w-full z-20	 backdrop-blur-md

  "
    >
      <div className="w-full flex justify-between items-center">
        <Link to='/'>
          <h2 className="font-bold text-lg	">Andrei Castro</h2>
        </Link>

        <div className="flex justify-evenly items-center	">
          <div ref={navRef} className="mr-3">
            <button onClick={handleNavToggle} className={`relative border border-solid border-greenLight hover:bg-greenLight ${navToggle ? 'bg-greenLight' : ''} px-3 py-2`}>
              <RxHamburgerMenu className="text-2xl" />
            </button>
            {navToggle && (
            <div  className="absolute transform translate-x-[-134.33333px] translate-y-[16px] translate-z-0  w-1/6 bg-white p-3">
              <nav className="flex">
                <ul className="w-full">
                  <li className="cursor-pointer p-2 hover:bg-greenLight " onClick={handleNavToggle}>
                    <a href="" className="font-medium">
                      Works
                    </a>
                  </li>
                  <li className="cursor-pointer p-2 hover:bg-greenLight " onClick={handleNavToggle}>
                    <a href="" className="font-medium">
                      Posts
                    </a>
                  </li>
                  <li className="cursor-pointer p-2 hover:bg-greenLight " onClick={handleNavToggle}>
                    <a href="" className="font-medium">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            )}
          </div>
          <div>
            <button className="border border-solid border-greenLight hover:bg-greenLight px-3 py-2">
              <MdLightMode className="text-2xl" />
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
