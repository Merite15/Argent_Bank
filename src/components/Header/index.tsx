import Logo from "./logo.png";
import { pathHome, pathLogin, pathProfile } from '@/utils/routes';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "@/store";
import { logout } from "@/store/auth";
import "./style.scss";

export const Header = (): JSX.Element => {
    const fullName: string = useSelector((state: rootState) => state.user.firstName + " " + state.user.lastName);
    const dispatch = useDispatch();
    const token: string = useSelector((state: rootState) => state.user.token);

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to={pathHome} >
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                <div>
                    {token ?
                        <>
                            <div className="items">
                                <Link className="main-nav-item" to={pathProfile}>
                                    <i className="fa fa-user-circle"></i> <p>{fullName}</p>
                                </Link>
                                <Link onClick={() => dispatch(logout())} className="main-nav-item" to={pathLogin}>
                                    <i className="fa fa-sign-out"></i> <p>Sign Out</p>
                                </Link>
                            </div>
                        </>
                        :
                        <Link className="main-nav-item" to={pathLogin}>
                            <i className="fa fa-user-circle"></i> Sign In
                        </Link>
                    }
                </div>
            </nav>
        </header>
    );

}