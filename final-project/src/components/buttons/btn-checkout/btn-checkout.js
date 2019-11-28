import React from 'react';
import './btn-checkout.css';

export default (props) => {
	const subtotal = props.cards.length ? props.cards.map(card => card.amount * card.price).reduce((a, b) => a + b) : 0;
	return (
		<div className="checkout_container">
			<p>Subtotal</p>
			<span className="subtotal" >${subtotal}</span>
			<button type="submit" className="btn_checkout">
				Checkout
    	</button>
		</div>
	)
}