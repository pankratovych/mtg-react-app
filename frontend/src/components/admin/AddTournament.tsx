import { useState } from "react"
import { Link } from "react-router-dom"
import { AdminSidebar } from "./AdminSidebar"

export const AddTournament = () => {

    const [name, setName] = useState<string>("")

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const [type, setType] = useState<string>("")

    const changeType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value)
    }

    const [image, setImage] = useState<string>("")

    const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.value)
    }

    const [size, setNumber] = useState<string>("")

    const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value)
    }

    const [description, setDesc] = useState<string>("")

    const changeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(e.target.value)
    }

    const date = "18-18 JUNE 2022"

    return (
        <div className="admin">
            <AdminSidebar/>
            <div className="main-window-main-channel">
                <div className="tour-head">
                    <p>CREATE NEW TOURNAMENT</p>
                </div>
                <div className="add-tour-cont">
                    <div className="add-tour-name">
                        <div>
                            <p>Tournament name:</p>
                            <input value={name} onChange={changeName}></input>
                        </div>
                        <div>
                            <p>Tournament type:</p>
                            <input value={type} onChange={changeType}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Tournament picture:</p>
                            <input className="add-tour-pic" value={image} onChange={changeImage}></input>
                        </div>
                    </div>
                    <div className="add-tour-name">
                                <div>
                                    <p>From:</p>
                                    <input type="date"></input>
                                </div>
                                <div>
                                    <p>To:</p>
                                    <input type="date"></input>
                                </div>
                            
                    </div>
                    <div>
                        <div>
                            <p>Number of players</p>
                            <input  className="add-tour-pic" value={size} onChange={changeNumber}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Description</p>
                            <input className="add-tour-desc" value={description} onChange={changeDesc}></input>
                        </div>
                    </div>
                    <Link to={'/admin-tournaments'} className="add-tour-btn"  state={{name, date, type, size, description, image}}> Submit </Link>
                </div>
                
                
            </div>
        </div>
    )
}