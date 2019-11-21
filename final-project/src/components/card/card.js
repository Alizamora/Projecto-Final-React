import React from 'react';
import './card.css';

export default (props) => {
  return (
    <div>
      <button className='buttonCard'>
        <img src={props.imageUrl} alt={props.name} />
      </button>
      <h3>{props.title}</h3>
      <spam>{props.price}</spam>
      <p>{props.description}</p>
    </div>
  )
}