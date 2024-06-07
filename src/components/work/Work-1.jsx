import shutendoji1 from "../../../public/images/step-1.png";
import shutendoji2 from "../../../public/images/step-2.png";
import shutendoji3 from "../../../public/images/step-3.png";
import shutendoji4 from "../../../public/images/step-4.png";
import { Link } from "react-router-dom";

const WorkDetails = () => {
  return (
    <div className="z-40 w-3/6  px-3 py-2 mt-5   sm:w-10/12 xsm:w-full xsm:px-1 xsm:py-1  ">
      <div>
        <div className="flex items-center">
          <div>
            <Link to="/works" className="text-blueLight tracking-wider dark:text-[rgb(255,99,195)]">
              Works &nbsp;
            </Link>
            <span>&gt;</span>
          </div>

          <h1 className="ml-2 text-xl font-bold tracking-wider">
            Join &amp; Make
          </h1>
          <span className="ml-2 bg-greenLight text-sm p-0.5 tracking-wider dark:bg-[rgba(226,232,240,0.16)]">
            2022
          </span>
        </div>
        <div className="mt-2">
          <p className="tracking-wider">
            &nbsp; &nbsp; &nbsp;Join Make is an innovative platform merging
            traditional Japanese sake brewing with modern technology and music.
            Users can craft their own sake using water, rice, and curated music,
            creating a unique and immersive experience. The platform also
            integrates NFT technology, allowing ownership and trading of digital
            tokens linked to the brewing journey. Initially available in Japan
            and the USA, Join Make aims for global expansion, blending cultural
            heritage with contemporary digital trends.
          </p>
        </div>
        <div className="mt-6">
          <div className="flex items-center xsm:flex-col">
            <h4 className="uppercase text-sm text-greenDarker font-bold bg-greenLight dark:text-[#9AE6B4] dark:bg-[rgba(154,230,180,0.16)] py-0.5 px-2.5">
              Website
            </h4>
            <span className="ml-2">
              <a href="https://stg-app.joinmake.jp/" target="_blank" className="text-blueLight tracking-wider dark:text-[rgb(255,99,195)] ">
                https://stg-app.joinmake.jp/
              </a>
            </span>
          </div>
          <div className="flex items-center mt-2 xsm:flex-col">
            <h4 className="uppercase text-sm text-greenDarker font-bold bg-greenLight dark:text-[#9AE6B4] dark:bg-[rgba(154,230,180,0.16)] py-0.5 px-2.5">
              Platform
            </h4>
            <span className="ml-2 ">Windows/macOS/Linux/iOS/Android</span>
          </div>
          <div className="flex items-center mt-2 xsm:flex-col">
            <h4 className="uppercase text-sm text-greenDarker font-bold bg-greenLight dark:text-[#9AE6B4] dark:bg-[rgba(154,230,180,0.16)] py-0.5 px-2.5">
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
    </div>
  );
};

export default WorkDetails;
