import { useParams } from "react-router-dom";
import useRestrauntDetail from "../utils/useRestrauntDetail"
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetail=()=>{
    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
      dispatch(addItem(item));
    }
    const {id}=useParams();
    const menuData=useRestrauntDetail(id);    
      return (!menuData || !menuData.length)?(
        <h6> Loading....</h6>
      ):
      (
        <div>
          <h1>Restaurant Details {id}</h1>
          <ol>
          {menuData.map(({ category, items },index) => (
            
             <li key={index}>
                 <h3>{category}</h3> 
                 <ul key={category}>
                                {items ? (
                                    items.map((item) =>(  
                                        <li key={item.id}>
                                            {item.id} - {item.name} ({"Rs."+item.price/100}) 
                                            <button onClick={()=>handleAddItem(item)} className="rounded py-1 px-2 bg-green-300 border-2 border-black hover:bg-pink-400  shadow-md shadow-gray-300">Add </button>
                                        </li>
                                    ))
                                ) : (
                                    <li>Items not available</li>
                                )}
                        </ul>
            </li>
           
          ))}
        </ol>
    
        </div>
      );
      
}
export default RestaurantDetail;