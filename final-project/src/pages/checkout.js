import React, { useContext } from 'react';
import Context from '../react-context';
import Header from '../section/home-page-sections/header/header';
import CardsContainer from '../components/cardsContainer/cardsContainer';

export default () => {
	const context = useContext(Context);

	return (
		<div>
			<Header />
			<h1>Checkout</h1>
			<CardsContainer cards={context.products_cart} />
		</div>
	)
}