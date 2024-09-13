import { Tournament } from "../../types"
import { Link } from "react-router-dom"

export const AdminTournamentCard = ({name, date, type, size, description}: Tournament) => {
    return (
        <div className="admin__tournament--text">
            <h2 className="section__tournament--text--h2">{name}</h2>
            <p className="section__tournament--text--p">{date}</p>
            <p className="section__tournament--text--p">{type}</p>
            <p className="section__tournament--text--p">{size} participants</p>
            <p className="section__tournament--text--p">{description}
            </p>
            <Link to={'#'} className="register-btn">EDIT</Link>
        </div>  
    )
}