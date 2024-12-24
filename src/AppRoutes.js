import React from "react";
import { useRoutes } from "react-router-dom";
import Explore from "./components/explore/Explore";
import ProductDetail from "./components/productDetail/ProductDetail";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Explore /> },
    { path: "/details/:id", element: <ProductDetail /> },
  ]);

  return routes;
}

export default AppRoutes;
