import React from 'react';
import Addcart from '../buttons/addcart/addcart'
import ImageCard from './imageCard/imageCard'
import TitleCard from './titlecard/titlecard'
import PriceCard from './priceCard/priceCard'
import DescriptionCard from './descriptionCard/descriptionCard'
import './card.css';

export default (props) => {
  return (
    <div className='cardContainer'>
      <ImageCard src={props.imageUrl} alt={`image of ${props.name}`} />
      <TitleCard title={props.name}/>
      <PriceCard priceCard={props.price} />
      <DescriptionCard descriptionCard={props.description}/>
      <Addcart />
    </div>
  )
}