import { Route, Routes } from "react-router-dom";

import NavBar from "../components/NavBar";
import ListLayout from "../features/products/components/listLayout";

import { ShoppingCart } from "../features/cart/routes";

import Home from "../features/home/components/Home";

export const AppRoutes: React.FC = () => {
  const commonRoutes = [{ path: "/", element: <ListLayout /> }];

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="appBackGround" style={{ backgroundColor: "#E5E7EB" }}>
        <Routes>
          {commonRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          <Route path="/products" element={<ListLayout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/review" element={<Home />} />
          <Route path="/cart" element={<ShoppingCart />} />

        </Routes>
      </div>
    </>
  );
};