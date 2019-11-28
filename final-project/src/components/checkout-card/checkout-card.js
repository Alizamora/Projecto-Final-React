import React from 'react';
import Image from '../imageCard/imageCard';
import Title from '../titlecard/titlecard';
import Price from '../priceCard/priceCard';
import More_and_less from '../buttons/btn-more-and-less/btn-more-and-less';
import './checkout-card.css';

export default (props) => {
	return (
		<div>
			<Image  src={props.imageUrl} alt={`image of ${props.name}`}/>
			<Title title={props.name}/>
			<Price priceCard={props.price}/>
			<More_and_less />
		</div>
	)
}
