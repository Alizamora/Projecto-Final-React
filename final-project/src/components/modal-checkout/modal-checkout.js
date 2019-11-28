import React from 'react';
import './modal-checkout.css';

export default (props) => {
	return (
		<div>
			<p>The total of your purchase is <span>${props.total}</span></p>
			<button onClick={props.pay} type="submit">Pay</button>
			<button onClick={props.cancel}>Cancel</button>
		</div>
	)
}