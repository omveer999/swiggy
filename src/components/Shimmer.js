const Shimmer=()=>{
    return (
        <div className="container">
            {Array(10).fill("").map((e,index)=>(
              <div key={index} className="shimmer"></div>
            ))}
        </div>
        
    )
}

export default Shimmer;