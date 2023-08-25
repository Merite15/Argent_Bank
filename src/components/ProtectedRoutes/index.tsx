import { useSelector } from "react-redux";
import { rootState } from "@/store/index";
import { useNavigate } from "react-router-dom";
import { pathHome } from "@/utils/routes";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
    const navigate = useNavigate();
    const token: string = useSelector((state: rootState) => state.user.token);
    useEffect(() => {
        if (!token) {
            navigate(`/${pathHome}`);
        }
    }, []);

    if (token) { return children; } else { return <></>; }
};
