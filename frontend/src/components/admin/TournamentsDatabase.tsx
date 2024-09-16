import "../../styles/admin.css"
import data from "../../database/tournaments.json"
import { AdminSidebar } from "./AdminSidebar"
import { Tournament } from '../../types';
import { AdminTournamentCard } from './adminTournamentCard';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

export const TournamentsDatabase = () => {

    const tour = useLocation().state as Tournament

    const [tournaments, setTournaments] = useState<Tournament[]>(data.tournaments)

    useEffect(()=> {
        if (tour) {
            AddTournament(tour)
        }
    })

    const AddTournament = ({name, date, formats, type, size, description, image}: Tournament) => {
        const newTournaments = [...tournaments, 
            {
                id: tournaments[tournaments.length-1].id + 1,
                name: name,
                date: date,
                formats: formats,
                type: type,
                size: size,
                description: description,
                image: image
            }
        ]
        setTournaments(newTournaments)
    }

    return (
        <div className="admin">
            <AdminSidebar/>
            <div className="main-window-main-channel">
                <div className="tour-head">
                    <p className="txt">Tournaments:</p>
                    <div>
                    <Link to={`/admin-add-tournament`} className="register-btn">Add new Tournament</Link>
                </div>
                </div>
                
                <div>
                {tournaments.map((item) => <AdminTournamentCard key={item.id} {...item} />)}
                </div>
                
                
            </div>
            
        </div>
    )
}