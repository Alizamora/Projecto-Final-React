import React from 'react';
import Card from '../buttons/view-details/view-details';
import './cardsContainer.css'

export default (props) => {
  return (
    <div className='container-cards'>
      {props.cards.map((card, i) =>
        <Card
          key={i}
          card={card}
          {...card}
        />)}
    </div>
  )
}