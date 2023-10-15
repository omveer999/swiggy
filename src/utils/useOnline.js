import { useState } from "react";

const useOnline=()=>{
    const [isOnline,setIsOnline]=useState(true);
    const ifOnline=()=>setIsOnline(true)
    const ifOffline=()=>setIsOnline(false)
    window.addEventListener("online",ifOnline);
    window.addEventListener("offline",ifOffline);

    return isOnline;
}

export default useOnline;