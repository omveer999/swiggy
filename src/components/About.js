import { Outlet } from "react-router-dom";

const About=()=>{
 return (
    <div className="About">
       <h1>About us</h1>
       <p>This is about us page </p> 
       <Outlet></Outlet>
    </div>
 )}

 export default About;