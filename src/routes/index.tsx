import { Route, Routes } from "react-router-dom";
import { ListLayout } from "../features/products/components/listLayout";
import NavBar from "../components/NavBar";

import ShoppingCart from "../features/products/components/ShoppingCart";

import Home from "../features/products/components/Home";

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
          <Route path="/review" element={<ListLayout />} />
          <Route path="/cart" element={<ShoppingCart />} />
          {/* check */}
        </Routes>
      </div>
    </>
  );
};
