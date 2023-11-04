import { IMG_BASE_URL } from "../config";
import { Link } from "react-router-dom";
import Rating from "./icons/rating";

const Card=({cloudinaryImageId,name,cuisines,avgRating,id,sla})=>{
    const path="/restaurant-detail/"+id;
    console.log("veg",sla);
    return(
    <div className="w-[200px] m-3 p-3 shadow-md border-black">
    <img src={IMG_BASE_URL+cloudinaryImageId} className="h-[178px]" alt="" />
    <h2 className="text-blue-500 hover:text-blue-950 font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap"><Link to={path}>{name}</Link> </h2>
    <h3 className="w-[176px] overflow-hidden overflow-ellipsis whitespace-nowrap">{cuisines.join(", ")}</h3>
    <div className="flex justify-between ">
      <div className="flex"> <Rating/><span className="font-semibold pl-2">{avgRating}</span></div>
      <div className="font-semibold ">{sla.slaString}</div>
    </div>
  </div>
  )
};

export default Card;