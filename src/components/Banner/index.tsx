import Background from "./banner.jpeg";
import "./style.scss";

interface BannerProps { title: Array<string>, subtitle: string }

export const Banner = ({ title, subtitle }: BannerProps): JSX.Element => {
    return (
        <div className="banner">
            <img src={Background} alt="banner-image" />
            <section id="hero" className="banner-content">
                <h2 className="sr-only">Promoted Content</h2>
                {title.map((subtitle, key) => <p key={key} className="subtitle">{subtitle}</p>)}
                <p className="text">{subtitle}</p>
            </section>
        </div>
    );

}