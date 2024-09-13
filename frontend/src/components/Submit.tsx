import { useLocation } from "react-router-dom"
import "../styles/style4.css"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Deck } from '../types';

export const Submit = () =>{

    const deckData = useLocation().state as Deck

    return (
        <body>
            <Header nickname={"user"}/>
            <div className="container-submit">
                <div className="container-cntr">
                    <div className="text">
                        <p className="title">Thanks for registartion!</p>
                        <p className="summary">SUMMARY:</p>
                        <p className="name-trn"><span>PARTICIPANT:</span> <br/>
                        John Doe
                        </p>
                        <p className="name-trn"><span>CONTACT DATA:</span> <br/>
                        john.doe@mail.com<br/>
                        +420420420420
                        </p>
                        <p className="name-trn"><span>NAME OF TOURNAMENT:</span> <br/>
                        STREETS OF NYI CAPENNA COMMANDER LAUNCH PARTY
                        </p>
                        <p className="date-place"><span>DATE &amp; PLACE:</span> <br/>
                        17-18 MAY 2022 | TABLETOP IE
                        </p>
                        <p className="name-deck"><span>NAME OF DECK:</span> <br />
                            {deckData.name}
                        </p>
                    </div>
                </div>  
            </div>
            <Footer/>
        </body>
    )
}