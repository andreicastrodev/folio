const Bio = () => {
  return (
    <div className="flex flex-col px-9 py-2">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4">Bio</h1>
      <div className="flex items-baseline">
        <h1 className="font-bold mt-3">1999</h1>
        <span className="ml-2">Born in Manila, Philippines</span>
      </div>
      <div className="flex items-baseline">
        <h1 className="font-bold mt-3">2022</h1>
        <span  className="ml-2">
          Completed the Bachelor&apos;s Program of Information Technology at
          Lyceum of the Philippines, Manila
        </span>
      </div>
      <div className="flex items-baseline	">
        <h1 className="font-bold mt-3">2022 - Present</h1>
        <span  className="ml-2">working at <a href="https://sysplex.us/ " target="_blank">Sysplex IT Solutions</a> as a backend developer </span>
      </div>
    </div>
  );
};

export default Bio;
