import Select from "react-select"
import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { Footer } from "../../Footer"
import { Header } from "../../Header"
import { DeckConstSidebar} from './DeckConstrSidebar';
import { Card, Color } from '../../../types';
import { CardFull } from '../../card/CardFull';
import { IcardSmall } from '../../card/CardSmall';
import { sumColors } from "../../../misc/utils"
import { FetchData } from "../../../models/fetcher"

interface IfilterProps {
    color: Color, 
    status: boolean
}

export const CreateDeck = () => {

    const expansions = [
        { 
            label: "Streets of New Capenna",
            value: 1
        },
        { 
            label: "Crimson Vow",
            value: 2
        },
        {
            label: "Midnight hunt",
            value: 3
        },
        {
            label: "Kaldheim",
            value: 4
        }
    ]

    const filterStatus: IfilterProps[] = [
        {
            color: Color.BLACK,
            status: false
        },
        {
            color: Color.BLUE,
            status: false
        },
        {
            color: Color.RED,
            status: false
        },
        {
            color: Color.WHITE,
            status: false
        },
        {
            color: Color.GREEN,
            status: false
        },
    ]

    const [filters, setFilter] = useState<IfilterProps[]>(filterStatus)

    const {data, error, isLoading} = FetchData('cards/')

    console.log(data.data)

    const cardsDataBase: Card[] = data.data

    const [cards, setCards] = useState<Card[]>(cardsDataBase)

    const [inDeckCards, setInDeckCards] = useState<IcardSmall[] | null>(null)

    function setSortedCardsInDeck(inDeckCards: IcardSmall[]): void {
        setInDeckCards([...inDeckCards.sort(
            (a, b) => sumColors(a.card.colors) < sumColors(b.card.colors) ? 
            -1 
            : (sumColors(a.card.colors) === sumColors(b.card.colors)) ?
                 a.card.name.localeCompare(b.card.name) : 1

        )])
    }

    const changeFilter = (color: Color) => {
        const newFilters = filters.filter((filters) => filters.color !== color)
        const newStatus = !filters.filter((filters) => filters.color === color)[0].status
        const newColorStatus: IfilterProps = {
            color: color,
            status: newStatus
        }
        setFilter([...newFilters, newColorStatus])
    }

    const filterCards = () => {
        let newCards: Card[] = cardsDataBase
        filters.forEach((color) => color.status ? newCards = newCards.filter((card) => card.colors.includes(color.color)) : null)
        setCards(newCards)
    }

    const addCardToDeck = (card: Card) => {
        if (inDeckCards) {
            const newDeckList = inDeckCards?.filter((item) => item.card.id !== card.id)
            if (inDeckCards?.filter((item) => item.card.id === card.id).length){
                const newCard = inDeckCards?.find((item) => item.card.id === card.id)
                if (newCard && newCard.quantity < 4) {
                    newCard.quantity++
                    setSortedCardsInDeck([...newDeckList, newCard])
                }
            }
            else {
                const addCard: IcardSmall = 
                    {   
                        card: card,
                        quantity: 1
                    }
                setSortedCardsInDeck([...newDeckList, addCard])
            }
        }
        else {
            const newDeckList: IcardSmall[] = [
                {
                    card: card,
                    quantity: 1
                }
            ]
            setInDeckCards([...newDeckList])
        }
    }

    const removeCardFromDeck = (card: IcardSmall) => {
        if (inDeckCards) {
            const targetCard = inDeckCards?.find((item) => item.card.id === card.card.id)
            const newDeckList = inDeckCards?.filter((item) => item.card.id !== card.card.id)
            if (targetCard && targetCard?.quantity > 1){
                targetCard.quantity--
                setSortedCardsInDeck([...newDeckList, targetCard])
            }
            else {
                setInDeckCards([...newDeckList])
            }
        }
    }

    if (isLoading) {
        return (
            <Fragment>
                <p>Loading...</p>
            </Fragment>
        )
    }

    if (error) {
        return (
            <Fragment>
                <p>Oh shi~... Here we go again.</p>
            </Fragment>
        )
    }

    return (
        <div>
            <Header nickname={"user"} />
            <div className="title-block">
                <div className="title">Create new Deck</div>
                <Link to={"/choose-deck"} state={true}className="sbm-btn btn-mrg">Submit new deck</Link>
            </div>
            <div className="container-deck-create">
                <div className="main-block">
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
                <div className="cards-main-block">
                    {cards.map((card) => <CardFull key={card.id} card={card} onAction={addCardToDeck}/>)} 
                </div>

                </div>
                <DeckConstSidebar cards={inDeckCards} removeCardFromDeck={removeCardFromDeck} />
            </div>
            <Footer />
        </div>
    )
}