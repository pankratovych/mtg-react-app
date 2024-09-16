import "./styles/style1.css"
import { Link } from "react-router-dom";

export interface IheaderProps {
    nickname: string | null;
}

export const Header = ({nickname}: IheaderProps) => {
    return (
        <header className="header">
        <div className="header__container header__nav-menu-container">
            <ul className="header__nav-menu">
                <li className="header__nav-menu-link">Shop</li>
                <li className="header__nav-menu-link">Community</li>
                <li className="header__nav-menu-link">News</li>
                <li className="header__nav-menu-link">Card Database</li>
                <li className="header__nav-menu-link">
                    <Link to={nickname == null ? "/sign" :  "/"} className="header-sign">{nickname ? "Sign out" : "Sign in"}</Link>
                </li>
            </ul>
            <Link to={`/`} className="logo">
                <img 
                    src="https://images.ctfassets.net/s5n2t79q9icq/3dB5uyWzUH95O1ZPBNNUX5/6cff7c65a809285755ea24b164b6ac65/magic-logo.png?fm=webp"
                    alt="MTG logo"
                />
            </Link>
        </div>
    </header>  
    )
}