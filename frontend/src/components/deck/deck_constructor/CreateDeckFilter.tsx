import React from "react"
import { Card, Color, Expansion } from "../../../types"
import Select from "react-select"

interface FilterColor {
    color: Color,
    status: false
}

interface CreateDeckFilterProps {
    colors: FilterColor[],
    expansions: Expansion[]
}

interface CreateDeckFilterState {
    expansion: Expansion[]
    isLoading: boolean,
    error: boolean
}

export default class CreateDeckFilter extends React.Component<CreateDeckFilterProps, CreateDeckFilterState> {

    constructor(props: CreateDeckFilterProps) {
        super(props)
        this.state = {
            expansion: [],
            isLoading: true,
            error: false
        }
    }

    private filterCards = () => {
        // let newCards: Card[] = cardsDataBase
        // filters.forEach((color) => color.status ? newCards = newCards.filter((card) => card.colors.includes(color.color)) : null)
        // setCards(newCards)
    }

    componentDidMount(): void {
        fetch('http://localhost:4000/expansions/')
            .then(response => response.json())
            .then(response => this.setState({ 
                expansion: response.results,
                isLoading: false
        }))
        .catch(error => this.setState({ 
            isLoading: false, 
            error: true 
        }));
    }

    render() {
        return (
            <div className="deck-container">
                        <div className="left-side">   
                            <form action="#" className="filter-cards">
                                <input className="filter-event" type="text" placeholder="Card name..." />
                                <input className="filter-event" type="text" placeholder="Card type..." />
                                <Select className="filter-event selector" options={this.props.expansions} />   
                            </form>
                        </div>
                        {/* <div className="colors-form">
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
                                    <button className="filter-btn" onClick={this.props.onSubmit}>FILTER</button>
                                </div>
                            </div> */}
{/*                             
                        </div> */}
                    </div>
        )
    }
}