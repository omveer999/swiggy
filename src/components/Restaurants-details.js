import { useParams } from "react-router-dom";
import useRestrauntDetail from "../utils/useRestrauntDetail";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { RESTRAUNT_ITEM_IMG_URL } from "../config";
import nophoto from "../../assets/img/no-photo.png";
import { IMG_BASE_URL } from "../config";
import Rating from "./icons/rating";
const RestaurantDetail = () => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const { id } = useParams();
  const menuData = useRestrauntDetail(id);
  const restaurantData = menuData.shift();
  // const restaurant=restaurantData.restraunt;

  return !menuData ||!restaurantData || !menuData.length ? (
    <h6> Loading....</h6>
  ) : (
    <div className="">
      <div className="w-1/2 p-2 mt-3 shadow-md shadow-gray-400 rounded-md flex justify-between mx-auto">
        {console.log(restaurantData)}
        <div className="" key="1">
          <img
            src={
              restaurantData.restraunt
                ? IMG_BASE_URL + restaurantData?.restraunt?.cloudinaryImageId
                : nophoto
            }
            className="h-[178px]"
            alt=""
          />
          
        </div>
        <div key="2">
            <h3 className="font-bold">{restaurantData?.restraunt?.name}</h3>
            <p key="1" className="text-gray-400 font-semibold">{restaurantData?.restraunt?.areaName},{restaurantData?.restraunt?.city}</p>
            <p  key="2" className="text-gray-400 font-semibold">  {restaurantData?.restraunt?.sla?.slaString} | {restaurantData?.restraunt?.feeDetails?.message}</p>

        </div>
        <div key="3" >
          <div className="border-2">
          <div className="flex justify-center p-2 border-b-2  justify-items-center">
              <Rating/> <span className="ml-2 font-semibold">{restaurantData?.restraunt?.avgRatingString}</span>
            </div>
            <div className="p-2 font-semibold">
              <p className="text-gray-400">{restaurantData?.restraunt?.totalRatingsString}</p>
            </div>
          </div>
           
        </div>
      </div>
      <ol className="">
        {menuData.map(({ category, items }, index) => (
          <li key={index}>
            <div className="rounded-md p-2 shadow-md shadow-gray-400 w-1/2 m-auto my-3">
              <h3 className="text-center font-bold my-2 mb-4 border-b-2 border-black rounded-sm">
                {category}
              </h3>
              <ul key={category}>
                {items ? (
                  items.map((item) => (
                    <li key={item.id}>
                      <div className="p-2 py-4 border-b flex justify-between">
                        <div>
                          <div className="font-bold text-gray-700">
                            {item.name}{" "}
                          </div>
                          <div>{"Rs." + item.price / 100}</div>
                          <div>
                            <p className="text-gray-400 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleAddItem(item)}
                          className=""
                        >
                          {" "}
                          <img
                            src={
                              item.imageId
                                ? RESTRAUNT_ITEM_IMG_URL + item.imageId
                                : nophoto
                            }
                            className="w-16 text-center"
                            alt="logo"
                          />{" "}
                          <span className="rounded py-1 px-3  border-2  text-green-500 bg-white">
                            ADD
                          </span>{" "}
                        </button>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>Items not available</li>
                )}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default RestaurantDetail;
