import "./styles/style1.css"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Link, useLocation } from 'react-router-dom';

export const MainPage  = () => {

    const nickname = useLocation().state as string

    return (
        <div>
            <Header nickname={nickname}/>
            <div className="container">
                <section className="main-text">
                    <h1 className="main-text-txt">MAGIC THE GATHERING</h1>
                    <h2 className="main-text-sub-txt">TOURNAMENT SYSTEM</h2>
                    <h4 className="main-text-sub-sub-text">Find a tournament</h4>
                </section>
                <div className="form-container">
                    <div className="left-side">   
                        <form action="#" className="filter-event-all">
                            <input className="filter-event" type="text" placeholder="ENTER TYPE..." />
                            <input className="filter-event" type="text" placeholder="ENTER SIZE..." />
                            <input className="filter-event date-filter" type="date" placeholder="CHOOSE DATES..." />   
                        </form>
                    </div>
                    <div className="right-side">
                        <form action="#" className="filters-all">
                            <input className="filters" type="checkbox" id="digEvent" name="digEvent" value="Digital" />
                            <label>Digital Events Only</label>
                            <input className="filters" type="checkbox" id="liveEvent" name="liveEvent" value="Live" />
                            <label>Live Events Only</label>
                            <label className="filters">Time</label>
                            <input className="filters " type="time" id="dateEvent" name="dateEvent" /> 
                        </form>
                        <div className="btn">
                            <Link to={`tournaments`} className="submit-btn" type="submit" >SUBMIT</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}