// import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

const About=()=>{
 return (
    <div className="About">
       <h1>About us</h1>
       <p>This is about us page </p> 
       {/* <Outlet></Outlet> */}
       <Profile name="omveer" mobile="7522884264" />
       <hr/>
       <ProfileClass name="omveer" mobile="752884264"/>
    </div>
 )}

 export default About;