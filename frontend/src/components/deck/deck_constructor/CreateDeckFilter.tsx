import React from "react"
import { Color } from "../../../types"
import Select from "react-select"

interface FilterColor {
    color: Color,
    status: false
}

interface CreateDeckFilterProps {
    colors: FilterColor[],
    expansions: string
}

interface CreateDeckFilterState {

}

export default class CreateDeckFilter extends React.Component<CreateDeckFilterProps, CreateDeckFilterState> {
    
    constructor(props: CreateDeckFilterProps) {
        super(props)
        this.state = {
            isFiltered: false
        }
    }

    render() {
        return (
            <div className="deck-container">
                        <div className="left-side">   
                            <form action="#" className="filter-cards">
                                <input className="filter-event" type="text" placeholder="Card name..." />
                                <input className="filter-event" type="text" placeholder="Card type..." />
                                <Select className="filter-event selector" options={expansions} />   
                            </form>
                        </div>
                        <div className="colors-form">
                            <div className="colors-block">
                                <div>
                                    <input className="filters" type="checkbox"  name="digEvent" onClick={() => changeFilter(30)}/>
                                    <label>Red</label>
                                </div>
                                <div>
                                    <input className="filters" type="checkbox" id="liveEvent" name="liveEvent" value="Live" onClick={() => changeFilter(40)} />
                                    <label>Blue</label>
                                </div>
                                <div>
                                    <input className="filters" type="checkbox" id="digEvent" name="digEvent" onClick={() => changeFilter(10)} />
                                    <label>Black</label>
                                </div>
                                <div>
                                    <input className="filters" type="checkbox" id="liveEvent" name="liveEvent" value="Live" onClick={() => changeFilter(20)} />
                                    <label>White</label>
                                </div>
                                <div>
                                    <input className="filters" type="checkbox" id="liveEvent" name="liveEvent" value="Live" onClick={() => changeFilter(50)}/>
                                    <label>Green</label>
                                </div>
                                <div className="btn">
                                    <button className="filter-btn" onClick={() => filterCards()}>FILTER</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
    )
}
}