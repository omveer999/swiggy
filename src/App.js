import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./Contact-us.js";
import Error from "./components/Error.js";
import RestaurantDetail from "./components/Restaurants-details.js";
import Cart from "./components/Cart.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
// import Profile from "./components/Profile.js";
// import ProfileClass from "./components/ProfileClass.js";
// // import ProfileClass from "./components/ProfileClass.js";

const AppLayout = () => (
  <React.Fragment>
    <Provider store={store}>
      <Header />
      {/* <Main /> */}
      <Outlet />
      <Footer />
    </Provider>
  </React.Fragment>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about-us",
        element: <About />,
        children: [
          // {
          //     path:"profile",
          //     element:<Profile/>,
          // },
          // {
          //     path:"profile",
          //     element:<ProfileClass/>,
          // },
        ],
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/restaurant-detail/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
