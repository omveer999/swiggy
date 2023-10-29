import myImage from "../../assets/img/logo.png"
import { Link } from "react-router-dom"
//  import store from "../utils/store";
 import { useSelector } from "react-redux";

const Header=()=>{
    const cartItems=useSelector((state)=>state.cart.items);
    return(
    <div className="flex w-full justify-between items-center  p-1 bg-pink-50 shadow-md mb-3">
        <div className="logo">
            <img src={myImage} className="w-8 pt-3" alt="logo" />
        </div>
        <div className="menu">
            <ul className="list-none ">
                <li className="inline mx-2 hover:text-blue-500"><Link to="/">Home</Link> </li>
                <li className="inline mx-2  hover:text-blue-500"><Link  to="/about-us">About</Link> </li>
                <li className="inline mx-2  hover:text-blue-500"><Link  to="/contact-us"> Contact Us</Link></li>
                <li className="inline mx-2  hover:text-blue-500"><Link  to="/cart"><span className="text-[20px] bg-purple-800 p-2 rounded-md ">&#128722; <sup className="text-white bg-black  rounded-full p-1 ">{cartItems.length}</sup> </span> </Link></li>
            </ul>
        </div>
    </div>
)};

export default Header;