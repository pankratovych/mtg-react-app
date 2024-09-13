import "../../styles/style2.css"
import data from "../../database/tournaments.json"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { TournamentCard } from './TournamentCard';
import { Tournament } from "../../types";


export const Tournaments = () => {

    const tournaments: Tournament[] = data.tournaments;

    return (
        <div>
            <Header nickname={"user"}/>
            <div className="hero">    
                <div className="container">
                    <div className="hero__text">
                    <h1>STREETS OF NEW CAPENNA</h1> 
                    <h2>
                        Available Tournaments
                    </h2> 
                    </div>  
                </div>
            </div>
            <div className="info-container">
                {tournaments.map((item) => <TournamentCard key={item.id} {...item} />)} 
            </div>
            <Footer/>
        </div>
    )
}