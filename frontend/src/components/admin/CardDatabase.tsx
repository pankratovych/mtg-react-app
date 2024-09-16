import "../../styles/admin.css"
import { AdminSidebar } from "./AdminSidebar"
import { Link } from "react-router-dom";
import { useState, Fragment } from "react";
import { Card } from '../../types';
import { AdminCardCard } from './adminCardCard';
import { FetchData } from "../../models/fetcher";

export const CardDatabase = () => {
       
    const {data, error} = FetchData(`cards/`);
    
    const [cards, setCards] = useState<Card[]>([]);

    if (!data) return <div>Loading...</div>

    if (data) setCards(data.data)
    
    if (error) {
        return (
            <Fragment>
                Error!
            </Fragment>
        )
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