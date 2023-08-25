import Logo from "./logo.png";
import { pathHome, pathLogin, pathProfile } from '@/utils/routes';
import { Link, useLocation  } from "react-router-dom";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "@/store";
import { logout } from "@/store/auth";

export const Header = (): JSX.Element => {
    const myLocation: string = useLocation().pathname;
    const fullName: string = useSelector((state: rootState) => state.user.firstName + " " + state.user.lastName);
    const isProfilePage: boolean = (myLocation === `/${pathProfile}`);
    const dispatch = useDispatch();

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
                    {isProfilePage ?
                        <>
                            <Link className="main-nav-item" to={pathProfile}>
                                <i className="fa fa-user-circle"></i> {fullName}
                            </Link>
                            <Link onClick={() => dispatch(logout())} className="main-nav-item" to={pathLogin}>
                                <i className="fa fa-sign-out"></i> Logout
                            </Link>
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