import React from 'react';
import Card from './Card';

class Cards extends React.Component {
  renderCards = (cards) => {
    return cards.map( card => <Card key={card.id} {...card} remove={this.removeCard} /> );
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card;
    })
    this.setState({ cards, });
  };

  render() {
    return (
      <div>
         {this.renderCards()}
      </div>
    )
  };
};

export default Cards;