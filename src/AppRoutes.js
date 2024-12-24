import React from "react";
import { useRoutes } from "react-router-dom";
import Explore from "./components/explore/Explore";
import ProductDetail from "./components/productDetail/ProductDetail";
import Wishlists from "./components/wishlists/Wishlists";
import Map from "./components/map/Map";
import Login from "./components/login/Login";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Explore /> },
    { path: "/details/:id", element: <ProductDetail /> },
    { path: '/wishlists' , element: <Wishlists /> },
    { path: '/map' , element: <Map /> },
    { path: '/login' , element: <Login /> },
  ]);

  return routes;
}

export default AppRoutes;
