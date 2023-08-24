import "./style.scss";

export const Footer = (): JSX.Element => {
    const year: number = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <p className="footer-text">Copyright {year} Argent Bank</p>
        </footer>
    );

}