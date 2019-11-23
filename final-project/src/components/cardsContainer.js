import React from 'react';
import Card from './card/card';

export default (props) => {
  return (
    <div>
      {props.cards.map((card, i) =>
        <Card
          key={i}
          {...card}
        />)}
    </div>
  )
}