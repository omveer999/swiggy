import { useState,useEffect } from "react";

const restaurantsDetail=(id)=>{
    const [restaurantsDetail,setRestaurantsDetail]=useState([]);
    async function fetchDetailData(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER")
        const json=await data.json();
        // console.log("hello",json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[0].card.card)
        const detailedData=[]
        json.data.cards.map((e)=>{
            if("card" in e && "card" in e?.card && "info" in e?.card?.card){
                console.log(e.card.card.info);
                const {name,cloudinaryImageId,avgRatingString,areaName,city,id,sla,feeDetails,totalRatingsString}=e.card.card.info;
                detailedData.push({"restraunt":{name,cloudinaryImageId,avgRatingString,areaName,city,id,sla,feeDetails,totalRatingsString}});
            }
            if(("groupedCard" in e) && ("cardGroupMap" in e.groupedCard) &&  ("REGULAR" in e.groupedCard.cardGroupMap) ){
                e.groupedCard.cardGroupMap.REGULAR.cards.map((e2)=>{
                    if(e2.card?.card?.categories!=null){
                        e2.card?.card?.categories?.map((e3)=>{
                            // console.log("category",e3.title)
                            const itemList=[]
                            e3.itemCards.map((e4)=>{
                                // console.log(e4.card.info);
                                if(e4.card.info.price>0){
                                    const {id,name,price,imageId,description}=e4.card.info;
                                    itemList.push( { id, name, price,imageId,description } );
                                }
                               
                            })
                            detailedData.push({"category": e3.title, "items": itemList });

                        })
                    }
                })
            }
        })
        setRestaurantsDetail(detailedData)
      }

      useEffect(()=>{
        fetchDetailData();
      },[])    
      console.log(restaurantsDetail);
      return restaurantsDetail;
}

export default restaurantsDetail;