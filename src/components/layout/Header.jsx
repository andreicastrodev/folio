import { MdOutlineLightMode, MdLightMode  } from "react-icons/md";


const Header = () => {
  return <div className="flex  justify-between p-5 font-sans tracking-widest font-medium items-center	">
    <div >
      <h2 className="font-bold	">Andrei Castro</h2>
    </div>

  <div className="basis-1/2">
      <nav>
        <ul className="flex justify-around ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>
  </div>

    <div>
    <MdLightMode  />
    </div>
  </div>;
};


export default Header;