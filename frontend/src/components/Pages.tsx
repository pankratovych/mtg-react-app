import { BrowserRouter, Routes, Route } from "react-router-dom";
import {RecoilRoot} from "recoil";
import { MainPage } from "./MainPage";
import { Tournaments } from './tournaments/Tournaments';
import { ChooseDeck } from './deck/ChooseDeck';
import { Submit } from "./Submit";
import { CreateDeck } from './deck/deck_constructor/CreateDeck';
import { TournamentsDatabase } from './admin/TournamentsDatabase';
import { CardDatabase } from "./admin/CardDatabase";
import { AddTournament } from './admin/AddTournament';
import { AddCard } from "./admin/AddCard";
import { Sign } from './Sign';

export const Pages = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/tournaments" element={<Tournaments />}/>
                    <Route path="/choose-deck" element={<ChooseDeck />}/>
                    <Route path="/create-deck" element={<CreateDeck />}/>
                    <Route path="/submit" element={<Submit />}/>
                    <Route path="/sign" element={<Sign />}/>
                    <Route path="/admin-tournaments" element={<TournamentsDatabase />}/>
                    <Route path="/admin-cards" element={<CardDatabase />}/>
                    <Route path="/admin-add-tournament" element={<AddTournament />}/>
                    <Route path="/admin-add-card" element={<AddCard />}/>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default Pages;