import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes"; // Separate routes into a new file

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;