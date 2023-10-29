import { useSelector } from "react-redux";
import { RESTRAUNT_ITEM_IMG_URL } from "../config";
import CartItem from "./CartItem";
const Cart=()=>{
    const cartItems=useSelector((state)=>state.cart.items);

     console.log(cartItems)
    return(
        <div>
            <div className="text-center">
                <h3 className="text-purple-800">My Cart</h3>
            </div>
            {
                (cartItems.length>0)?
                cartItems.map((item)=>
                  <CartItem key={item.id} {...item}/>
                )
                :(
                    <div className="text-center my-4 text-lg font-semibold text-purple-600">
                        <h3>No Items in Cart</h3>
                    </div>
                )
            }
        </div>
    );
}

export default Cart;