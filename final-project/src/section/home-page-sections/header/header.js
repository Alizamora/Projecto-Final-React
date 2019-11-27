import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

export default () => {
	return (
		<div className="headerContainer">
			<NavLink to='/' className='buttonHome'><img className="logo" src="./Logo.svg" alt="Logo de la" /></NavLink>
			<p className='titleShop'>Succulents Shop</p>
			<NavLink to='/checkout' className='buttonCart'><img className="Cart" src="./shopping-cart-solid.svg" alt="Ir al carrito" /></NavLink>
		</div>
	)

} 