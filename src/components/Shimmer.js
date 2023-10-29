const Shimmer=()=>{
    return (
        <div className="flex flex-wrap">
            {Array(18).fill("").map((e,index)=>(
              <div key={index} className="w-[200px] h-[200px] m-3 p-3 shadow-md bg-gray-200"></div>
            ))}
        </div>
        
    )
}

export default Shimmer;