import React, { useContext } from 'react';
import Context from '../react-context';
import Header from '../section/home-page-sections/header/header';
import CheckoutCardsContainer from '../components/checkoutCardsContainer/checkoutCardsContainer';
import Title from '../section/checkout-page-sections/checkout-body';

export default () => {
	const context = useContext(Context);

	return (
		<div>
			<Header />
			<Title />
			<CheckoutCardsContainer cards={context.products_cart} />
		</div>
	)
}