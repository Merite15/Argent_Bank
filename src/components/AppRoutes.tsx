import { Routes, Route } from "react-router-dom";
import { Main } from "../layouts/main";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const AppRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    );
}