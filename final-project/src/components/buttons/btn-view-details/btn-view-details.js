import React from 'react';
import ImageCard from '../../imageCard/imageCard'
import TitleCard from '../../titlecard/titlecard'
import PriceCard from '../../priceCard/priceCard'
import './btn-view-details.css';

export default (props) => {
	return (
		<button className='viewDetails_container' onClick={props.click}>
			<ImageCard src={props.imageUrl} alt={`image of ${props.name}`} />
			<TitleCard title={props.name} />
			<PriceCard priceCard={props.price} />
		</button>
	)
}