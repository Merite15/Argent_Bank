
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Outlet } from "react-router-dom";

export const Main = (): JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}