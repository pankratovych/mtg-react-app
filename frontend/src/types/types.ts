import { GameFormat, Color } from "./enums";

export interface User {
    login: string;
    password: string;
}

export interface Tournament {
    id: string;
    name: string;
    date: string;
    formats: GameFormat[];
    type: string;
    size: number;
    description: string;
    image: string;
}

export interface Rules {
    id: string;
    name: string;
    deckSize: number;
    expansions: Expansion[];
    
}

export interface Deck {
    id: string;
    name: string;
    picture: string;
    colors: Color[];
    formats: GameFormat[]; 
}

export interface Expansion {
    id: number;
    name: string;
    shortName: string;
}

export interface Card {
    id: string;
    name: string;
    image: string;
    expansion: Expansion;
    colors: Color[]
}
