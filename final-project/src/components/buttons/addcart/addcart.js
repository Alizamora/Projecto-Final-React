import React from 'react';
import './addcart.css';

export default (props) => {
  return (
    <button className='button_addCart' onClick={props.click}>
      <img src='./shopping-cart-solid.svg' alt='button to add to cart' className='imgCart'/>
      Add cart
    </button>
  )
}