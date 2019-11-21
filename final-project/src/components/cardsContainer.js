import React from 'react';
import Card from './card/card';

export default (props) => {
  return (
    <div>
      {props.cards.map(card =>
        <Card
          src={card.imageUrl}
          alt={card.name}
          title={props.name}
          priceCard={props.price}
          descriptionCard={props.description}
        />)}
    </div>
  )
}