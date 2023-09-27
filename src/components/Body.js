import Card from "./Card";
import { RESTRAUNTS_DATA } from "../config";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText,restaurants){
    console.log(searchText,restaurants)
    return restaurants.filter((restraunt)=>restraunt.info?.name.toLowerCase().includes(searchText?.toLowerCase()))
}



const Main=()=>{
    const [restaurants,setRestaurants]=useState([]);
    const [allrestaurants,setAllRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    async function fetchData(){
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const data2= await data.json()
       data2.data.cards.map(e=>{
        if(e?.card?.card?.id==='restaurant_grid_listing'){
          console.log(e.card.card.gridElements.infoWithStyle.restaurants)
          setAllRestaurants(e?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setRestaurants(e.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
       })
     
    }

  useEffect(()=>{
    fetchData();
    // console.log(restra) 
  },[])

    return !restaurants || !restaurants.length?(<Shimmer></Shimmer>):(
        <div className="container">
          <div className="searchBar">
              <input type="search" className="search-box" name="search" value={searchText}  onChange={(e)=>
                setSearchText(e.target.value)
              }  placeholder="search items.." />     
              <button type="button" className="search-button" name="btnsearch" onClick={()=>{
                setRestaurants(filterData(searchText,allrestaurants))
              }}> Search </button>
         </div>
       {
        restaurants.map((restraunts)=>{
            return  <Card {...restraunts.info} key={restraunts.info.id} />;
        })
       }
    </div>
    )

}
   

export default Main