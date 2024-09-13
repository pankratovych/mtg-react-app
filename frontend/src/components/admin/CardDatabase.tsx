import "../../styles/admin.css"
import { AdminSidebar } from "./AdminSidebar"
import { Link, useLocation } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import data1 from "../../database/bigCards.json"
import { useState, useEffect } from "react";
import { Card } from '../../types';
import { AdminCardCard } from './adminCardCard';
import { FetchData } from "../../models/fetcher";
import { useSWRConfig } from "swr";
import { Expansion } from '../../types/types';
import axios from "axios";

export const CardDatabase = () => {

    const { mutate } = useSWRConfig();
       
    const {data, error, isLoading} = FetchData(`cards/`);

    const [cards, setCards] = useState<Card[]>(data.data);

    const AddCard: SubmitHandler<Card> = async (newCard) => {
        const data = [ 
            {
                name: newCard.name,
                image: newCard.image,
                expansionId: newCard.expansion.id,
                colors: newCard.colors
            }
        ]
        await axios.put('http://localhost:4000/card', data);
        mutate(`http://localhost:4000/cards/`);
        
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