import hero from "../assets/images/hero.jpg"
import Categories from "../components/Categories"
import Info from "../components/Info"
import Product from "../components/Product"
export default function Home() {
    return (
        <div className="mt-3">
            <div className="flex flex-row  gap-2 container mx-auto">
                <div className=" w-4/12 ">
                    <div className="bg-red-600 text-white ">Shop By Categories</div>
                    <ul className="bg-gray-300  ">
                        <li>Home</li>
                        <li>Electronics</li>
                        <li>Food</li>
                        <li>Sports</li>
                        <li>Fashion</li>
                        <li>Beauty</li>
                    </ul>
                </div>
                <div className=" w-8/12 relative">
                    <img src={hero} ></img>
                    <div className="flex flex-col items-start w-fit absolute top-32 left-4">
                    <p className="mb-1">Code With hatim</p>
                    <h1 className="font-bold text-2xl ">Welcome To Our Shop</h1>
                    <h3 className="font-bold text-xl mb-2">More Than One Million Product</h3>
                    <button className="bg-red-600 p-3.5 text-white rounded-lg">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <Info></Info>
            <Categories></Categories>
            <Product></Product>
        </div>
    )
}