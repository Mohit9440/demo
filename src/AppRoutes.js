import React from "react";
import { useRoutes } from "react-router-dom";
import Explore from "./components/explore/Explore";
import ProductDetail from "./components/productDetail/ProductDetail";
import Wishlists from "./components/wishlists/Wishlists";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Explore /> },
    { path: "/details/:id", element: <ProductDetail /> },
    { path: '/wishlists' , element: <Wishlists /> },
  ]);

  return routes;
}

export default AppRoutes;
