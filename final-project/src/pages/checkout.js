import React, { useContext } from 'react';
import Context from '../react-context';
import Header from '../section/home-page-sections/header/header';
import CheckoutCardsContainer from '../components/checkoutCardsContainer/checkoutCardsContainer';

export default () => {
	const context = useContext(Context);

	return (
		<div>
			<Header />
			<h1>Checkout</h1>
			<CheckoutCardsContainer cards={context.products_cart} />
		</div>
	)
}