import "../../styles/admin.css"
import { AdminSidebar } from "./AdminSidebar"
import { Link, useLocation } from "react-router-dom";
import data from "../../database/bigCards.json"
import { useState, useEffect } from "react";
import { Card } from '../../types';
import { AdminCardCard } from './adminCardCard';

export const CardDatabase = () => {

    const card = useLocation().state as Card

    const [cards, setCards] = useState<Card[]>(data.bigCards)

    useEffect(()=> {
        if (card) {
            AddTournament(card)
        }
    }, [])

    const AddTournament = ({name, expansionId, colors}: Card) => {
        const newCard = [...cards, 
            {
                id: cards[cards.length-1].id + 1,
                name: name,
                image: "",
                expansionId: expansionId,
                colors: colors
            }
        ]
        setCards(newCard)
    }

    return (
        <div className="admin">
            <AdminSidebar/>
            <div className="main-window-main-channel">
                <div className="card-head">
                    <p className="txt">Cards database:</p>
                    <div>
                    <Link to={`/admin-add-card`} className="register-btn">Add new Card</Link>
                </div>
                </div>
                <div className="admin-cards">
                    {cards.map((item) => <AdminCardCard key={item.id} {...item}/> )}
                </div>      
            </div>
            
        </div>
    )
}