import { Route, Routes } from "react-router-dom";
import { ListLayout } from "../features/products/components/listLayout";
import NavBar from "../components/NavBar";
import Home from "../features/products/components/Home";
export const AppRoutes: React.FC = () => {
  const commonRoutes = [{ path: "/", element: <ListLayout /> }];
  

  return (
    <>
      <NavBar />
      <div className="appBackGround" style={{ backgroundColor: "#E5E7EB" }}>
        <Routes>
          {commonRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
           <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ListLayout />} />
         </Routes>
      </div>
    </>
  );
};
