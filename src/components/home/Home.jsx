const Home = () => {
  return (
    <div className="flex font-sans tracking-wide">
      <div className="px-9 py-2 flex flex-col items-center">
        <div className="">
          <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4">Work</h1>
          <p className="text-1xl mt-2 ">
            I&apos;m a dedicated web developer based in Manila, Philippines, 
            specializing in full-stack development with expertise in React.js and Node.js. 
            As a digital craftsman,I&apos;m committed to crafting intuitive user experiences 
            that enhance our digital landscape. From sleek frontend interfaces powered by React.js 
            to robust backend solutions utilizing Node.js, I blend creativity and technical prowess to 
            build seamless web applications.
          </p>
        </div>
        <div className="mt-3">
          <a className="cursor-pointer	 py-3 px-5 text-white font-medium	 tracking-wide	 spacing-5 text-lg hover:bg-greenDark	bg-green inline-block rounded-lg		">My portfolio 	&gt; </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
