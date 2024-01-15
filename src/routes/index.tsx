import { Route, Routes } from "react-router-dom";
import { ListLayout } from "../features/products/components/listLayout";
import NavBar from "../components/NavBar";

export const AppRoutes: React.FC = () => {
  const commonRoutes = [{ path: "/", element: <ListLayout /> }];
  const Home = [{ path: "/home", element: <ListLayout /> }];

  return (
    <>
      <NavBar />
      <div className="appBackGround" style={{ backgroundColor: "#E5E7EB" }}>
        <Routes>
          {commonRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="/home" element={<ListLayout />} />
        </Routes>
      </div>
    </>
  );
};
