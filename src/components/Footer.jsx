import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer(){
    return (
        <div>
            <div className="flex flex-row justify-between mt-3 p-4 bg-gray-800">
                    <div className="flex flex-col items-start " style={{maxWidth:"400px"}}>
                        <h1 className="mb-3 font-bold text-2xl text-white">E-SHOP</h1>
                        <p className="text-lg text-start text-white">Your One Stop Shop For All Your Needs. Shop With Us And Enjoy The Best Of Experience</p>
                    </div>
                    <div className="flex flex-col items-start grow">
                        <p className="mb-3 font-bold text-2xl text-white">Quick Links</p>
                        <ul className="flex flex-col items-start text-white">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Contact</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="flex flex-col grow items-start">
                    <p className="mb-3 font-bold text-2xl text-white">Follow Us</p>
                        <div className="flex flex-row gap-2 mb-6">
                        <FaInstagram className="cursor-pointer" style={{fill:"white"}}/>
                        <FaFacebook className="cursor-pointer" style={{fill:"white"}}/>
                        <FaLinkedin  className="cursor-pointer"style={{fill:"white"}}/>
                        <FaTwitter className="cursor-pointer" style={{fill:"white"}}/>
                        </div>
                        <div className="flex flex-row gap-1.5 w-full">
                            <input placeholder="Enter Email" className="text-white border-2 border-black rounded-xl p-2 grow"></input>
                            <button className="bg-red-500 border-2 border-black rounded-xl p-2 text-white">Subscribe Me</button>
                        </div>
                    </div>
            </div>
            <div>

            </div>
        </div>
    )
}