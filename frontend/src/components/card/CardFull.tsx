import { Card } from "../../types"


export interface fullCardProps {
    card: Card,
    onAction: (card: Card) => void
}

export const CardFull = ({card, onAction}: fullCardProps) => {
    return (
        <div className="full-card-list">
            <img className="full-card" src={card.image} alt={card.name} onClick={() => onAction(card)}/>
        </div>
    )
}