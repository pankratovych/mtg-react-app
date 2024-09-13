import { Link } from "react-router-dom"
import { Tournament } from "../../types"

export const TournamentCard = ({name, date, type, size, description, image}: Tournament) => {
    return (
        <div className="section_tournament row-register">
            <div className="section__tournament--pic1">
                <img src={image} alt="sunset img" />
            </div>
            <div className="section__tournament--text">
                <h2 className="section__tournament--text--h2">{name}</h2>
                <p className="section__tournament--text--p">{date}</p>
                <p className="section__tournament--text--p">{type}</p>
                <p className="section__tournament--text--p">{size} participants</p>
                <p className="section__tournament--text--p">{description}
                </p>
                <Link to={`/choose-deck`} className="register-btn">REGISTER</Link>
            </div>  
        </div>
)
}