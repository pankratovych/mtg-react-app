import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, Color } from "../../types/"
import { AdminSidebar } from "./AdminSidebar"
import { SubmitHandler, useForm } from "react-hook-form"

export interface AddCardProps {
    onSubmit: SubmitHandler<Card>
}

export const AddCard = ({onSubmit}: AddCardProps) => {

    const {
        register,
        handleSubmit,
        setValue,
    } = useForm<Card>({
        defaultValues: {
            name: "",
            image: "",
            expansion: undefined,
            colors: []
        }
    });


   
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

    const [expansion, setExp] = useState<string>("")

    const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExp(e.target.value)
    }

    const [description, setDesc] = useState<string>("")

    const changeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(e.target.value)
    }

    const [colors, setColors] = useState<Color[]>([])

    const changeColor = (color: Color) => {
        if (colors.includes(color)) {
            setColors(colors.filter((item) => item !== color))
        }
        else {
            setColors([...colors, color])
        }
        
    }

    return (
        <div className="admin">
            <AdminSidebar/>
            <div className="main-window-main-channel">
                <div className="tour-head">
                    <p>ADD NEW CARD</p>
                </div>
                <div className="add-tour-cont">
                    <form onSubmit={handleSubmit(onSubmit)}>  

                    </form>
                    <div>
                        <div>
                            <p>Expansion:</p>
                            <input value={expansion} onChange={changeNumber}></input>
                        </div>
                    </div>
                    <div className="add-tour-name">
                        
                        <div>
                            <p>Card name:</p>
                            <input value={name} onChange={changeName}></input>
                        </div>
                        <div>
                            <p>Card type:</p>
                            <input value={type} onChange={changeType}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Card picture:</p>
                            <input className="add-tour-pic" value={image} onChange={changeImage}></input>
                        </div>
                    </div>
                    <div className="add-tour-name">
                        <div>
                            <p>Colors</p>
                            <div className="colors">
                                <div className="color">
                                    <input type="checkbox" onClick={() => {changeColor(Color.RED)}}/>
                                    <p>red</p>
                                </div>
                                <div className="color">
                                    <input type="checkbox" onClick={() => {changeColor(Color.BLUE)}}/>
                                    <p>blue</p>
                                </div>
                                <div className="color">
                                    <input type="checkbox" onClick={() => {changeColor(Color.BLACK)}}/>
                                    <p>black</p>
                                </div>
                                <div className="color">
                                    <input type="checkbox" onClick={() => {changeColor(Color.WHITE)}}/>
                                    <p>white</p>
                                </div>
                                <div className="color">
                                    <input type="checkbox" onClick={() => {changeColor(Color.GREEN)}}/>
                                    <p>green</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Description</p>
                            <input className="add-tour-desc" value={description} onChange={changeDesc}></input>
                        </div>
                    </div>
                    <Link to={'/admin-cards'} className="add-tour-btn"  state={{name, expansion, colors}}>Add card</Link>
                </div>
                
                
            </div>
        </div>
    )
}