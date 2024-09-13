import { Link } from "react-router-dom";
import { Color, Deck } from '../../types';


export const ChooseDeckCard = ({id, name, picture, colors}: Deck) => {

    return (
        <div className="col-img">
            <p className="name">{name}</p>
            <img src={picture} alt={name}/>
            <div className="colors-button">
                <div className="btn">
                    <Link to={"/submit"} state={{id, name, picture, colors}} className="sbm-btn btn-mrg">Select</Link>
                </div>
                <div className="colors">
                    <div className={colors.includes(Color.BLACK) ? "color1" : "color-null"}></div>
                    <div className={colors.includes(Color.WHITE) ? "color2" : "color-null"}></div>
                    <div className={colors.includes(Color.RED) ? "color3" : "color-null"}></div>
                    <div className={colors.includes(Color.BLUE) ? "color4" : "color-null"}></div>
                    <div className={colors.includes(Color.GREEN) ? "color5" : "color-null"}></div>
                </div>
                
            </div>
        </div> 
    )
}