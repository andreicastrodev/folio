import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FindMe = () => {
  return (
    <div className="flex flex-col px-9 py-2 ">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 decoration-grey">On the web</h1>
      <ul className="flex flex-col p-5 py-3">
        <li className="flex items-center p-3 hover:bg-greenLight w-2/6 cursor-pointer dark:hover:bg-[rgba(129,230,217,0.12)] first:mt-0">
          <FaGithub className=" dark:text-[#81e6d9] text-teal " />
          <span className="ml-2 font-bold dark:text-[#81e6d9] text-teal">@andreicastrodev</span>
        </li>
        <li className="flex items-center p-3 hover:bg-greenLight w-2/6 cursor-pointer dark:hover:bg-[rgba(129,230,217,0.12)]  mt-5">
          <FaLinkedin className=" dark:text-[#81e6d9] text-teal" />
          <span  className="ml-2 dark:text-[#81e6d9]	  font-bold text-teal">@andreicastrodev</span>
        </li>
        <li className="flex items-center p-3 hover:bg-greenLight w-2/6 cursor-pointer dark:hover:bg-[rgba(129,230,217,0.12)]  mt-5">
          <FaInstagram className="dark:text-[#81e6d9] text-teal" />
          <span  className="ml-2  font-bold dark:text-[#81e6d9] text-teal">@_andreicastro</span>
        </li>
      </ul>
    </div>
  );
};

export default FindMe;
