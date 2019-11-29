import React, { useContext, useState } from 'react';
import Context from '../react-context';
import Header from '../section/home-page-sections/header/header';
import CheckoutCardsContainer from '../components/checkoutCardsContainer/checkoutCardsContainer';
import Title from '../section/checkout-page-sections/checkout-body';
import Modal_Checkout from '../components/modal-checkout/modal-checkout';
import Success_Message from '../components/success-message/success-message';

export default () => {
	const context = useContext(Context);
	const [Modal, setModal] = useState();
	const subtotal = context.products_cart.length ? context.products_cart.map(card => card.amount * card.price).reduce((a, b) => a + b) : 0;

	return (
		<div>
			{Modal}
			<Header />
			<Title />
			<CheckoutCardsContainer cards={context.products_cart} click={e => setModal(<Modal_Checkout pay={() => {
				setTimeout(setModal(<Success_Message click={() => setModal(null)} />), 5000);
			}}
				cancel={() => {
					setModal(null);
				}}
				total={subtotal} />)} />
		</div>
	)
}
