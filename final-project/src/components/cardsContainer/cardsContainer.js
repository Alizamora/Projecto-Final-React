import React, { useState } from 'react';
import Card from '../buttons/btn-view-details/btn-view-details';
import Modal from '../modal-details/modal-details';
import Add_card from '../buttons/btn-addcart/btn-addcart';
import './cardsContainer.css'

export default (props) => {
  const [modalCard, setModalCard] = useState();
  return (
    <div className='container-cards'>
      {
        modalCard && <Modal exit={() => {
          setModalCard(null);
        }} {...modalCard} card={modalCard} />
      }
      {props.cards.map((card, i) =>
        <Card
          click={() => {
            setModalCard(card);
          }}
          key={i}
          card={card}
          {...card}
        />)}
    </div>
  )
}