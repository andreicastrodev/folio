import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FindMe = () => {
  return (
    <div className="flex flex-col px-9 py-2 xsm:p-1 ">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 decoration-grey">On the web</h1>
      <ul className="flex flex-col  py-3">
        <li className="flex items-center p-3 hover:bg-greenLight w-2/6 cursor-pointer dark:hover:bg-[rgba(129,230,217,0.12)] first:mt-0">
          <FaGithub className=" dark:text-[#81e6d9] text-teal " />
          <a href="https://github.com/andreicastrodev" target="_blank" className="ml-2 font-bold dark:text-[#81e6d9] text-teal">@andreicastrodev</a>
        </li>
        <li className="flex items-center p-3 hover:bg-greenLight w-2/6 cursor-pointer dark:hover:bg-[rgba(129,230,217,0.12)]  mt-2">
          <FaLinkedin className=" dark:text-[#81e6d9] text-teal" />
          <a  href="https://www.linkedin.com/in/andreicastrodev/" target="_blank" className="ml-2 dark:text-[#81e6d9]	  font-bold text-teal">@andreicastrodev</a>
        </li>
        <li className="flex items-center p-3 hover:bg-greenLight w-2/6 cursor-pointer dark:hover:bg-[rgba(129,230,217,0.12)]  mt-2">
          <FaInstagram className="dark:text-[#81e6d9] text-teal"/>
          <a  href="https://www.instagram.com/__andreicastro/" target="_blank" className="ml-2  font-bold dark:text-[#81e6d9] text-teal">@_andreicastro</a>
        </li>
      </ul>
    </div>
  );
};

export default FindMe;
