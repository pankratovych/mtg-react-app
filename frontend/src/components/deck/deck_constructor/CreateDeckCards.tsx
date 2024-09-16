import { Fragment } from 'react';
import { Card } from '../../../types';
import { CreateDeck } from './CreateDeck';
import React from 'react';
import { CardFull } from '../../card/CardFull';

interface CreateDeckCardsProps {
    cards: Card[]
    addCardToDeck: (card: Card) => void

}

interface CreateDeckCardsState {
    isFiltered: boolean
}

export default class CreateDeckMain extends React.Component<CreateDeckCardsProps, CreateDeckCardsState> {
    constructor(props: CreateDeckCardsProps) {
        super(props)
        this.state = {
            isFiltered: false
        }
    }


    render () {
        return (
        <div className="cards-main-block">
            {this.props.cards.map((card) => <CardFull key={card.id} card={card} onAction={this.props.addCardToDeck}/>)} 
        </div>
        )
    }
}
