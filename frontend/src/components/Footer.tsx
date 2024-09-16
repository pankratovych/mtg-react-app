import "./styles/style1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faFacebookF, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <a href="/"><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
                    <a href="/"><i><FontAwesomeIcon icon={faTwitch} /></i></a>
                    <a href="/"><i><FontAwesomeIcon icon={faYoutube} /></i></a>
                    <a href="/"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                </div>
                <div className="row">
                    <ul>
                        <li><a href="/">Contact us</a></li>
                        <li><a href="/">Our Services</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms &amp; Conditions</a></li>
                        <li><a href="/">Career</a></li>
                    </ul>
                </div>
                <div className="row">
                Copyright © 2022 - All rights reserved || Designed By: Maksym Pankratovych
                </div>
            </div>
        </footer>
    )
}