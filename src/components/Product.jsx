import { FaStar } from "react-icons/fa";
import watch from "../assets/images/watch.avif"
export default function Product(){
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-2 mt-3 rounded-xl">
            <div className="flex flex-col items-start shadow p-4 border-2 border-black">
                <img src={watch} height={"100px"} width={"100px"} className="self-center"></img>
                <h1 className="font-bold text-2xl">Titan's watch</h1>
                <p className="text-lg">$23.33</p>
                <div className="flex flex-row gap-1">
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                </div>
            </div>
            <div className="flex flex-col items-start shadow p-4 border-2 border-black rounded-xl">
                <img src={watch} height={"100px"} width={"100px"} className="self-center"></img>
                <h1 className="font-bold text-2xl">Titan's watch</h1>
                <p className="text-lg">$23.33</p>
                <div className="flex flex-row gap-1">
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                </div>
            </div>
            <div className="flex flex-col items-start shadow p-4 border-2 border-black rounded-xl">
                <img src={watch} height={"100px"} width={"100px"} className="self-center"></img>
                <h1 className="font-bold text-2xl">Titan's watch</h1>
                <p className="text-lg">$23.33</p>
                <div className="flex flex-row gap-1">
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                </div>
            </div>
            <div className="flex flex-col items-start shadow p-4 border-2 border-black rounded-xl">
                <img src={watch} height={"100px"} width={"100px"} className="self-center"></img>
                <h1 className="font-bold text-2xl">Titan's watch</h1>
                <p className="text-lg">$23.33</p>
                <div className="flex flex-row gap-1">
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                </div>
            </div>
            <div className="flex flex-col items-start shadow p-4 border-2 border-black rounded-xl">
                <img src={watch} height={"100px"} width={"100px"} className="self-center"></img>
                <h1 className="font-bold text-2xl">Titan's watch</h1>
                <p className="text-lg">$23.33</p>
                <div className="flex flex-row gap-1">
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                    <FaStar style={{fill:"gold"}}></FaStar>
                </div>
            </div>
        </div>
    )
}