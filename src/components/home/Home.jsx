const Home = () => {
  return (
    <div className="flex font-sans tracking-wide">
      <div className="p-10">
        <div className="">
          <h1 className="text-2xl font-bold	">Work</h1>
          <p className="text-1xl mt-2 ">
            I&apos;m a dedicated web developer based in Manila, Philippines, 
            specializing in full-stack development with expertise in React.js and Node.js. 
            As a digital craftsman,I&apos;m committed to crafting intuitive user experiences 
            that enhance our digital landscape. From sleek frontend interfaces powered by React.js 
            to robust backend solutions utilizing Node.js, I blend creativity and technical prowess to 
            build seamless web applications.
          </p>

        </div>

        <div className="flex-row mt-40">
          <div>
            <ul className="flex justify-between items-start uppercase text-left font-light	">
              <li className="basis-1/2">Project</li>
              <li className="basis-1/2">Service</li>
              <li className="basis-1/2">Location</li>
              <li className="basis-1/2">Year</li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-between items-start text-left mt-3">
              <li
                className="basis-1/2  text-xl font-bold cursor-pointer"
                id="0"
              >
                NFT & Rice Wine
              </li>
              <li className="basis-1/2">REST API</li>
              <li className="basis-1/2">Manila</li>
              <li className="basis-1/2">2024</li>
            </ul>
          </div>

          <div>
            <ul className="flex justify-between items-start text-left mt-3">
              <li
                className="basis-1/2  text-xl font-bold cursor-pointer"
                id="1"
              >
                Barangay Management
              </li>
              <li className="basis-1/2">REST API</li>
              <li className="basis-1/2">Manila</li>
              <li className="basis-1/2">2023</li>
            </ul>
          </div>

          <div>
            <ul className="flex justify-between items-start text-left mt-3">
              <li
                className="basis-1/2  text-xl font-bold cursor-pointer"
                id="2"
              >
                Capstone
              </li>
              <li className="basis-1/2">FULL-STACK</li>
              <li className="basis-1/2">Manila</li>
              <li className="basis-1/2">2022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
