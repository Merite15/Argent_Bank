import Logo from "./logo.png";
import { pathHome, pathLogin } from '@/utils/routes';
import { Link  } from "react-router-dom";
import "./style.scss";

export const Header = (): JSX.Element => {
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
                    <Link className="main-nav-item" to={pathLogin}>
                        <i className="fa fa-user-circle"></i> Sign In
                    </Link>
                </div>
            </nav>
        </header>
    );

}