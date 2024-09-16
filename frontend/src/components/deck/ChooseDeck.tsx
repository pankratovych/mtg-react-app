import data from "../../database/decks.json"
import "../../styles/style3.css"
import { Deck } from "../../types";
import { ChooseDeckCard } from "./ChooseDeckCard";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
export const ChooseDeck = () => {
    
    const isAdded = useLocation().state as boolean

    const [decks, setDecks] = useState<Deck[]>(data.decks);

    useEffect(() => {
        if (isAdded) {
            setDecks([...decks, {
                id: "6",
                name: "Angels Party",
                picture: "deck6.jpg",
                colors: [10, 20],
                formats: [61]
            } ])
        }
    }, [])

    

    return (
        <div>
            <Header nickname={"user"}/>
            <div className="title-block">
                <div className="title">Choose your Deck</div>
                <Link to={"/create-deck"} className="sbm-btn btn-mrg">Create new deck</Link>
            </div>
            <div className="row-img">
                {decks.map((deck) => <ChooseDeckCard key={deck.id} {...deck} />)} 
            </div> 
            <Footer/>
        </div>
        
    )
}