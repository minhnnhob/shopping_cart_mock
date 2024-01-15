import { Route, Routes } from "react-router-dom";
import { ListLayout } from "../features/products/components/listLayout";

export const AppRoutes: React.FC = () => {
    const commonRoutes = [{path: "/", element: <ListLayout />}]
    const Home  = [{path: "/home", element: <ListLayout />}]

    
    return (
        <Routes>
            {commonRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}