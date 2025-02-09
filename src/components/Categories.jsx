import info1men from "../assets/images/info1men.webp"
export default function Categories(){
    return(
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 mt-3">
            <div className="relative">
                <img src={info1men} className="h-72 w-full rounded-2xl"></img>
                <div className="flex flex-col items-start absolute top-24 left-20 ">
                <p className="font-bold text-2xl">Men</p>
                <p className="text-large">See All </p>
                </div>
            </div>
            <div className="relative">
                <img src={info1men} className="h-72 w-full rounded-2xl"></img>
                <div className="flex flex-col items-start absolute top-24 left-20 ">
                    <p className="font-bold text-2xl">Men</p>
                    <p className="text-large">See All</p>
                </div>
            </div>
            <div className="relative">
                <img src={info1men} className="h-72 w-full rounded-2xl"></img>
                <div className="flex flex-col items-start absolute top-24 left-20 ">
                <p className="font-bold text-2xl">Men</p>
                <p className="text-large">See All</p>
                </div>
            </div>
        </div>
    )
}