import { useState, useEffect } from 'react';
import { Color } from '../../types';

export interface IColorProps {
    color: Color
}

export const AdminColorsToString = ({color}: IColorProps) => {

    const [name, setName] = useState<string>("")

    useEffect(() => {
        switch(color){
            case Color.BLACK: setName("Black");
            break;
            case Color.RED: setName("Red");
            break;
            case Color.WHITE: setName("White")
            break;
            case Color.BLUE: setName("Blue")
            break;
            case Color.GREEN: setName("Green")
            break;
        }

    }, [])

    return ( 
        <p>{name}</p>
    )
} 