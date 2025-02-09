import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="shadow bg-white">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-row justify-between items-center py-3">
                    {/* Logo */}
                    <div className="text-2xl font-bold">e-shop</div>

                    {/* Search Bar */}
                    <div className="flex-grow max-w-lg">
                        <input 
                            type="text" 
                            placeholder="Search Products" 
                            className="border p-2 w-full rounded-md"
                        />
                    </div>

                    {/* Cart & Auth Links */}
                    <div className="flex flex-row items-center gap-3">
                        <FaCartShopping className="text-2xl" />
                        <div className="text-sm cursor-pointer">Login | Register</div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-row justify-center gap-6 py-2 border-t">
                    <div to="/" className="font-bold hover:text-blue-500">Home</div>
                    <div to="/shop" className="font-bold hover:text-blue-500">Shop</div>
                    <div to="/contact" className="font-bold hover:text-blue-500">Contact</div>
                    <div to="/about" className="font-bold hover:text-blue-500">About</div>
                </div>
            </div>
        </nav>
    );
}
