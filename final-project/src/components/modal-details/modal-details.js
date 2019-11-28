import React, { useContext } from 'react';
import Context from '../../react-context';
import Exit from '../buttons/btn-exit/btn-exit';
import Image from '../imageCard/imageCard';
import Title from '../titlecard/titlecard';
import Price from '../priceCard/priceCard';
import Description from '../descriptionCard/descriptionCard';
import AddCart from '../buttons/btn-addcart/btn-addcart';
import './modal-details.css';

export default (props) => {
    const context = useContext(Context)

    return (
        <div className='modal_container'>
            <Exit />
            <Image src={props.imageUrl} alt={`image of ${props.name}`} />
            <Title title={props.name} />
            <Price priceCard={props.price} />
            <Description descriptionCard={props.description}/>
            <AddCart click={() => {
                context.products_cart.push(props.card);
            }} />
        </div>

    )
}