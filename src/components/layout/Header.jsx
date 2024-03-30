import { MdOutlineLightMode, MdLightMode } from "react-icons/md";


const Header = () => {
  return <div className="flex  justify-center p-4 font-sans tracking-widest font-medium items-center  bg-secondary fixed w-full z-10	 backdrop-blur-md

  ">
    <div className="w-1/2 flex justify-evenly items-center">
      <div >
        <h2 className="font-bold text-lg	">Andrei Castro</h2>
      </div>

      <div className="basis-1/2">
        <nav>
          <ul className="flex justify-evenly ">
            <li className="cursor-pointer font-light">About</li>
            <li className="cursor-pointer font-light">Work</li>
            <li className="cursor-pointer font-light">Contact</li>
          </ul>
        </nav>
      </div>

      <div>
        <MdLightMode />
      </div>
    </div>
  </div>

};


export default Header;