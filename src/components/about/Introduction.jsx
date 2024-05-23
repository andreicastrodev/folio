import ProfileImg from "../../images/me.jpg";
const Introduction = () => {
    return (
        <div className="flex  px-9 py-2  justify-between mt-5	">
                <div>
                    <h1 className="text-5xl	font-bold">Andrei Castro</h1>
                    <span>Digital Craftsman ( Developer / Gamer / Cyclist )</span>
                </div>
                <div className="h-32 w-32">
                    <img  className="inline-block rounded-full border-2 border-solid" src={ProfileImg}/>
                </div>
        </div>
    );
}







export default Introduction;