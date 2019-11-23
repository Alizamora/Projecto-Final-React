import React from 'react';
import './header.css';

export default () => {
	return (
		<div className="headerContainer">
			<button className='buttonHome'><img className="logo" src="./Logo.svg" alt="Logo de la" /></button>
			<p className='titleShop'>Succulents Shop</p>
			<button className='buttonCart'><img className="Cart" src="./shopping-cart-solid.svg" alt="Ir al carrito" /></button>
		</div>
	)

}