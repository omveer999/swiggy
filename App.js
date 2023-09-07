import React  from "react";
import  ReactDOM from "react-dom/client";
import myImage from "./assets/img/logo.png"
const Header=()=>(
        <div className="navbar">
            <div className="logo">
                <img src={myImage} alt="logo" />
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Contact Us</li>
                </ul>
            </div>
        </div>
);
const Main=()=>(
        <div className="container">
            <div className="card">
                <div className="card-img">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kt09zylanc2qd5eg116a" alt="" />
                </div>
                <div className="card-content">
                    <h3>Apna Sweets</h3>
                    <h6>Sweet, Beverage,Drink ...</h6>
                    <h6>Vijay Nagar</h6>
                </div>
            </div>
        </div>
);
const Footer=()=>(
        <h1>Footer</h1>
);

const AppLayout=()=>(
    <React.Fragment>
        <Header />
        <Main />
        <Footer />
    </React.Fragment>
);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

