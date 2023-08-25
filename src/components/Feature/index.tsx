import { Feature as FeatureType } from "@/utils/types/Feature";
import chat from "./assets/icon-chat.png";
import money from "./assets/icon-money.png";
import security from "./assets/icon-security.png";

import "./style.scss";

export const Feature = ({ title, subtitle, icon }: FeatureType): JSX.Element => {
    let image: string = "";

    switch (icon) {
        case 'chat':
            image = chat;
            break;
        case 'money':
            image = money;
            break;
        case 'security':
            image = security;
            break;
    }

    return (
        <div className="feature-item">
            {icon ? <img src={image} alt={`${icon} icon`} className="feature-icon" /> : null}
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {subtitle}
            </p>
        </div>
    );
}