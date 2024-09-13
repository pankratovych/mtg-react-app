import { Card } from "../../types"

export interface IcardSmall {
    card: Card,
    quantity: number,
}

export interface smallCardProps {
    smallCard: IcardSmall,
    onAction: (smallCard: IcardSmall) => void
}

export const CardSmall = ({smallCard, onAction}: smallCardProps) => {
    return (
        <div className="sidebar-card-list">
            <img className="sidebar-card" src={smallCard.card.image} alt={smallCard.card.name} onClick={() => onAction(smallCard)}/>
            <p>{smallCard.quantity}</p>
        </div>
    )
}