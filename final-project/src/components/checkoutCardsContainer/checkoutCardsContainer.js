import React, { useState } from 'react';
import CheckoutCard from '../checkout-card/checkout-card';
import Modal from '../modal-details/modal-details';
import './checkoutCardsContainer.css'

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
        <CheckoutCard
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