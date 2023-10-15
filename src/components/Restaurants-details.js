import { useParams } from "react-router-dom";
import useRestrauntDetail from "../utils/useRestrauntDetail"

  
const RestaurantDetail=()=>{
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
                                    items.map(({ id, name, price }) => (
                                    <li key={id}>
                                        {id} - {name} ({price})
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