 import myImage from "../../assets/img/no-photo.png"
import { RESTRAUNT_ITEM_IMG_URL } from "../config";
const CartItem=({ id, name, price,imageId })=>{
    return(
        <div className="border my-2 p-2 w-full flex items-center justify-between shadow-md shadow-gray-400">
        <div className="">
         <img src={(imageId)?RESTRAUNT_ITEM_IMG_URL+imageId:myImage} className="w-10 pt-3" alt="logo" />
        </div>
        <div>
            <h3>{name}</h3>
        </div>
        <div>
            <h3>Rs.{price/100}</h3>
        </div>
        
    </div>
    )
}

export default CartItem;