import shutendoji1 from "../../images/img-1.png";
import shutendoji2 from "../../images/img-2.png";

const WorkDetails = () => {
  return (
    <div className="px-3 py-2 mt-5">
      <div>
        <div className="flex items-center">
          <div>
            <a href="#" className="text-blueLight tracking-wider">
              Works&nbsp;
            </a>
            <span>&gt;</span>
          </div>

          <h1 className="ml-2 text-xl font-bold tracking-wider">Shutendoji</h1>
          <span className="ml-2 bg-greenLight text-sm p-0.5 tracking-wider">
            2022&#45;
          </span>
        </div>
        <div className="mt-2">
          <p className="tracking-wider">
            &nbsp; &nbsp; &nbsp;A Markdown note-taking app with 100+ plugins,
            cross-platform and encrypted data sync support. The life-time
            revenue is more than $300k.
          </p>
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <h4 className="uppercase text-sm text-greenDarker font-bold bg-greenLight py-0.5 px-2.5">Website</h4>
            <span className="ml-2"><a href="#" className="text-blueLight tracking-wider">https://www.inkdrop.app/</a></span>
          </div>
          <div className="flex items-center mt-2">
          <h4 className="uppercase text-sm text-greenDarker font-bold bg-greenLight py-0.5 px-2.5">Platform</h4>
            <span className="ml-2 ">Windows/macOS/Linux/iOS/Android</span>
          </div>
          <div className="flex items-center mt-2">
          <h4 className="uppercase text-sm text-greenDarker font-bold bg-greenLight py-0.5 px-2.5">Stack</h4>
            <span className="ml-2">NodeJS, VueJS, Amazon Web Services</span>
          </div>
        </div>

        <div className="mt-10">
            <div>
                <img className="block" src={shutendoji1} alt="" />
            </div>
            <div className="mt-5">
                <img className="block" src={shutendoji2} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
