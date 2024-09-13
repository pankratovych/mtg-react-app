import { Link } from "react-router-dom"
import { Card} from '../../types';
import { AdminColorsToString } from "./AdminColorsToString";

export const AdminCardCard = ({name, colors}: Card) => {
    return (
        <div className="admin__card--text">
            <h2 className="section__tournament--text--h2">{name}</h2>
            [{colors.map((color) => <AdminColorsToString color={color}/>)}]
            <Link to={'#'} className="add-card-btn">EDIT</Link>
        </div>  
    )
}