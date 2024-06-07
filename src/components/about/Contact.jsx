import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaGoogle,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex items-center font-sans tracking-wide flex-col  w-3/6  sm:w-10/12 xsm:w-full pb-5 pt-5 z-40">
      <div>
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 decoration-grey">
          Contact
        </h1>
      </div>
      <div className="mt-5">
        <ul className="flex flex-col items-start">
          <li className="flex items-center first:mt-0">
            <FaGoogle className="text-teal dark:text-[#81e6d9]" />
            <span className="ml-2 text-teal dark:text-[#81e6d9]">andreinichol.e.castro.dev@gmail.com</span>
          </li>
          <li className="flex items-center mt-5">
            <FaPhone className="text-teal dark:text-[#81e6d9]"  />
            <span className="ml-2 text-teal dark:text-[#81e6d9]">+63 916 698 1247</span>
          </li>
          <li className="flex items-center mt-5">
            <FaGithub className="text-teal dark:text-[#81e6d9]"  />
            <a href="https://github.com/andreicastrodev" target="_blank" className="ml-2 text-teal dark:text-[#81e6d9]">@andreicastrodev</a>
          </li>
          <li className="flex items-center mt-5">
            <FaLinkedin className="text-teal dark:text-[#81e6d9]"  />
            <a  href="https://www.linkedin.com/in/andreicastrodev/" target="_blank" className="ml-2 text-teal dark:text-[#81e6d9]">@andreicastrodev</a>
          </li>
          <li className="flex items-center mt-5">
            <FaInstagram className="text-teal dark:text-[#81e6d9]"  />
            <a href="https://www.instagram.com/__andreicastro/" target="_blank"  className="ml-2 text-teal dark:text-[#81e6d9]">@_andreicastro</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
