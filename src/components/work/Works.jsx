import shutendoji from "../../images/banner-1.jpg";
import { Link } from "react-router-dom";
const Works = () => {
  return (
    <div className="ml-6 pt-5 pb-5 z-40">
      <h1 className="text-2xl font-bold ">Works</h1>
      <Link
        to="/works/shutendoji"
        className="flex flex-wrap justify-between xsm:justify-center"
      >
        <div className="mt-5 basis-2/5 xsm:basis-4/5">
          <div className="flex flex-col justify-center items-center xsm:flex-col">
            <img
              className="h-40 w-full rounded-2xl	 xsm:h-48"
              src={shutendoji}
              alt=""
            />
            <div className="flex flex-col justify-center items-center mt-3">
              <h1 className="text-lg">Join &amp; Make</h1>
              <p className="text-center text-sm	xsm:text-base">
                Brew your own Japanese sake with water, rice, and music.
                Experience a new way of making sake.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Works;
