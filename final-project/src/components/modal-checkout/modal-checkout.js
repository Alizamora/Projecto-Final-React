import React from 'react';
import './modal-checkout.css';

export default (props) => {
	return (
		<div>
			<p>The total of your purchase is <span>${props.total}</span></p>
			<button type="submit">Pay</button>
			<button type="submit">Cancel</button>
		</div>
	)
}