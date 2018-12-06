import React from 'react';
import Card from './Card';
// import {Button, Segment} from 'semantic-ui-react';


const Cards = ({ cardsArray }) => (
 <ul>
  {cardsArray.map(card => (
    <Card key={card.id} {...card} />
  ))};
 </ul>
);

export default Cards;