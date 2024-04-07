import shutendoji from "../../images/shutendoji.webp";


const Works = () => {



    return (
        <div className=" px-9 py-2 mt-5">
            <h1 className="text-2xl font-bold">Works</h1>
            <div className="flex flex-wrap justify-between">
                <div className="mt-5 basis-3/7">
                    <a href="#" className="flex flex-col justify-center items-center">
                        <img className="h-32 w-full rounded-2xl	" src={shutendoji} alt="" />
                        <div className="flex flex-col justify-center items-center mt-3">
                            <h1 className="text-lg">
                                Shutendoji
                            </h1>
                            <p className="text-center text-sm	">A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support.</p>
                        </div>
                    </a>
                </div>
                <div className="mt-5  basis-3/7">
                    <a href="#" className="flex flex-col justify-center items-center">
                        <img className="h-32 w-full rounded-2xl	" src={shutendoji} alt="" />
                        <div className="flex flex-col justify-center items-center mt-3">
                            <h1 className="text-lg">
                                Shutendoji
                            </h1>
                            <p className="text-center text-sm	">A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support.</p>
                        </div>
                    </a>
                </div>
                <div className="mt-10 basis-3/7">
                    <a href="#" className="flex flex-col justify-center items-center">
                        <img className="h-32 w-full rounded-2xl	" src={shutendoji} alt="" />
                        <div className="flex flex-col justify-center items-center mt-3">
                            <h1 className="text-lg">
                                Shutendoji
                            </h1>
                            <p className="text-center text-sm	">A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support.</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )

}


export default Works