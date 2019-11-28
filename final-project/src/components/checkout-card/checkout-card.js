import React from 'react';
import Image from '../imageCard/imageCard';
import Title from '../titlecard/titlecard';
import Price from '../priceCard/priceCard';
import More_and_less from '../buttons/btn-more-and-less/btn-more-and-less';
import Btn_remove from '../buttons/btn-remove-product/btn-remove-product';
import './checkout-card.css';

export default (props) => {
	return (
		<div className="checkout_card_container">
			<Image className="image_checkout" src={props.imageUrl} alt={`image of ${props.name}`} />
			<Title className="title_checkout" title={props.name} />
			<Price className="price_checkout" priceCard={props.price} />
			<More_and_less value={props.amount} change={props.change} />
			<Btn_remove click={props.remove} />
		</div>
	)
}
