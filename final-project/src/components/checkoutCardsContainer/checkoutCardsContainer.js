import React, { useState } from 'react';
import CheckoutCard from '../checkout-card/checkout-card';
import Modal from '../modal-details/modal-details';
import Btn_Checkout from '../buttons/btn-checkout/btn-checkout';
import './checkoutCardsContainer.css'

export default (props) => {
  const [cards, setCards] = useState(props.cards);
  const [modalCard, setModalCard] = useState();

  return (

    <div className='container-cards'>

      {
        modalCard && <Modal exit={() => {
          setModalCard(null);
        }} {...modalCard} card={modalCard} />
      }

      {cards.map((card, i) =>

        <CheckoutCard
          remove={() => {
            props.cards.splice(i, 1);
            setCards([...props.cards]);
          }}
          change={(e) => {
            props.cards[i].amount = e.target.value;
            setCards([...props.cards]);
          }}
          click={() => {setModalCard(card);}}
          key={i}
          card={card}
          {...card}
      />)}

      <Btn_Checkout cards={props.cards} click={props.click} pay={props.pay} cancel={props.cancel}/>
    </div>
  )
}