import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FindMe = () => {
  return (
    <div className="flex flex-col p-10">
      <h1 className="text-2xl font-bold">On the web</h1>
      <ul className="flex flex-col p-5 py-3">
        <li className="flex items-center first:mt-0">
          <FaGithub/>
          <span className="ml-2">@andreicastrodev</span>
        </li>
        <li className="flex items-center mt-5">
          <FaLinkedin />
          <span  className="ml-2">@andreicastrodev</span>
        </li>
        <li className="flex items-center mt-5">
          <FaInstagram />
          <span  className="ml-2">@_andreicastro</span>
        </li>
      </ul>
    </div>
  );
};

export default FindMe;
