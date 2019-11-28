import React from 'react';
import './modal-checkout.css';

export default (props) => {
	return (
		<div className="modal_container_checkout">
			<p className="Checkout_text">The total of your purchase is <span>${props.total}</span></p>
			<button className="btn_checkout_pay" onClick={props.pay} type="submit">Pay</button>
			<button className="btn_checkout_cancel" onClick={props.cancel}>Cancel</button>
		</div>
	)
}