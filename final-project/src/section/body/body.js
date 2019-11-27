import React, { useState, useEffect } from 'react';
import request from '../../request';
import CardsContainer from '../../components/cardsContainer';
import './body.css'

export default () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		request('./succulentas.json').then(data => {
			console.log(data.products)
			setCards(data.products)
		});
	}, []);

	return (
		<div className='wrapper'>
			<h1 className='body_title' >SEDUM</h1>
			<p className='body_parragraph'>Sedum es un gran género de plantas con flores en la familia Crassulaceae, que incluye hasta 600 especies de plantas anuales, perennes, hierbas trepadoras y sub (arbustos). Las plantas de Sedum vienen en una gran variedad de alturas, colores y formas. Son una de las suculentas más fáciles de cuidar porque son extremadamente indulgentes con el sol y el suelo de mala calidad. Las plantas de Sedum también se conocen como cultivos de piedra gracias a su duro hábito de crecimiento y su capacidad de prosperar en la sequía y el suelo pobre. Las plantas de Sedum tienen hojas suculentas. Son perfectos para jardines de rocas y cubiertas de suelo.</p>
			<CardsContainer cards={cards} />
		</div>
	)
}