
import Select from "react-select"
import { CardSmall, IcardSmall } from '../../card/CardSmall';
import React from "react";

export interface IDeckConstSidebarProps {
    cards: IcardSmall[] | null
    removeCardFromDeck: (card: IcardSmall) => void
}

export const DeckConstSidebar = ({cards, removeCardFromDeck}: IDeckConstSidebarProps) => {

    const options = [
        { 
            label: "Legacy",
            value: 1
        },
        { 
            label: "Modern",
            value: 2
        },
        {
            label: "Standart",
            value: 3
        },
        {
            label: "Draft",
            value: 4
        }
    ]

    
    return(
        <nav>
            <div className="left-side">   
                <form action="#" className="filter-event-all">
                    <input className="filter-event" type="text" placeholder="Deck Name..." />
                    <input className="filter-event" type="text" placeholder="Deck picture..." />
                    <Select className="filter-event" options={options}/>
                </form>
            </div>
            <div className="sidebar">
                {cards ? cards.map((card) => <CardSmall key={card.card.id} onAction={removeCardFromDeck} smallCard={card} />) : null} 
            </div>
        </nav>
    )
} 