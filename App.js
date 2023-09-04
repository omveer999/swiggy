import React  from "react";
import  ReactDOM from "react-dom/client";

const heading=<h1>Hello every one......</h1>;
const ContentName=()=>(
    <div>
       <h3>Heading 66666</h3>
        <p>Lorem ipsum ,dolor sit amet consectetur adipisicing elit. Sunt placeat distinctiotatum atque quis culpa quaerat dignissimos earum.</p>
    </div> 
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<ContentName></ContentName>);

