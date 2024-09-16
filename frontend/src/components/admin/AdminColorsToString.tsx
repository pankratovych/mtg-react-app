import { Color } from '../../types';

export interface IColorProps {
    color: Color
}

export const AdminColorsToString = ({color}: IColorProps) => {

    return ( 
        <p>{color}</p>
    )
} 