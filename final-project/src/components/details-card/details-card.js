import React, {useContext} from 'react';
import Context from '../../../react-context';
import Addcart from '../../buttons/addcart/addcart'
import ImageCard from '../../imageCard/imageCard'
import TitleCard from './titlecard/titlecard'
import PriceCard from '../../priceCard/priceCard'
import DescriptionCard from '../../descriptionCard/descriptionCard'
import './details-card.css';

export default (props) => {
  const context = useContext(Context);

  return (
    <div className='cardContainer'>
      <ImageCard src={props.imageUrl} alt={`image of ${props.name}`} />
      <TitleCard title={props.name}/>
      <PriceCard priceCard={props.price} />
      <DescriptionCard />
      <Addcart click={() => {
        context.products_cart.push(props.card)
      }} />
    </div>
  )
}