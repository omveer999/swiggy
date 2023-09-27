import { IMG_BASE_URL } from "../config";
import { Link } from "react-router-dom";


const Card=({cloudinaryImageId,name,cuisines,avgRating,id})=>{
    const path="/restaurant-detail/"+id;
    return(
    <div className="card">
    <img src={IMG_BASE_URL+cloudinaryImageId} alt="" />
    <h2><Link to={path}>{name}</Link> </h2>
    <h3>{cuisines.join(", ")}</h3>
    <h3>{avgRating}</h3>
  </div>
  )
};

export default Card;