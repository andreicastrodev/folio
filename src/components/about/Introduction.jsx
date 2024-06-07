import ProfileImg from "../../../public/images/me.jpg";
const Introduction = () => {
    return (
        <div className="flex  px-9 py-2  justify-between mt-5 xsm:p-1 z-50">
                <div>
                    <h1 className="text-5xl	font-bold xsm:text-4xl">Andrei Castro</h1>
                    <span>Digital Craftsman ( Developer / Gamer / Cyclist )</span>
                </div>
                <div className="h-32 w-32">
                    <img  className="inline-block rounded-full border-2 border-solid" loading="lazy" src={ProfileImg}/>
                </div>
        </div>
    );
}







export default Introduction;