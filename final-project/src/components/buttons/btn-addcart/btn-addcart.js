import React from 'react';
import './btn-addcart.css';

export default (props) => {
  return (
    <button className='button_addCart modal_btn_addCart' onClick={props.click}>
      <img src='./shopping-cart-solid.svg' alt='button to add to cart' className='imgCart'/>
      Add cart
    </button>
  )
}