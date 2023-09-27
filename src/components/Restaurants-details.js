import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


  
const RestaurantDetail=()=>{
    const {id}=useParams();
    const [menuData,setMenuData]=useState([]);
    useEffect(()=>{
        fetchDetailData();
        // console.log(restra) 
      },[])    
    async function fetchDetailData(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=84070&catalog_qa=undefined&submitAction=ENTER")
        const json=await data.json();
        console.log("hello",json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[0].card.card)
        const detailedData=[]
        json.data.cards.map((e)=>{
            // console.log(e)
            if(("groupedCard" in e) && ("cardGroupMap" in e.groupedCard) &&  ("REGULAR" in e.groupedCard.cardGroupMap) ){
               
                e.groupedCard.cardGroupMap.REGULAR.cards.map((e2)=>{
                    // console.log("item",e2.card.card.itemCards)
                    if(e2.card?.card?.categories!=null){
                        e2.card?.card?.categories?.map((e3)=>{
                            console.log("category",e3.title)
                            const itemList=[]
                            e3.itemCards.map((e4)=>{
                                // console.log("item",e4)
                                const {id,name,price}=e4.card.info;
                                // console.log(id,name,price)

                                itemList.push( { id, name, price } );
                            })
                            detailedData.push({"category": e3.title, "items": itemList });

                        })
                    }
                })
            }
        })
        console.log(detailedData)
        setMenuData(detailedData)
       // setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
       
       
      }
      
      return (
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