import React, { Component } from 'react';
import {Container, Header, Icon} from 'semantic-ui-react';
import Cards from './Cards';
import CardForm from './CardForm';

class App extends Component {
  state = {
    cards: [
      {id: 1, front: "front1", back: "back1", },
      {id: 2, front: "front2", back: "back2", },
      {id: 3, front: "front3", back: "back3", },
      {id: 4, front: "front4", back: "back4", },
    ],
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [card, ...this.state.cards], });
  };

  render() {
    return (
      <div>
        <Container style = {{ marginTop: "20px" }}>
          <Header as = "h2" textAlign = "center">
            <Icon name = "book" />
            Flashcards
          </Header>
          <hr />
          <CardForm add = {this.addCard}/>
          <Cards cards={this.state.cards}/>
        </Container>
      </div>
    );
  }
}

export default App;