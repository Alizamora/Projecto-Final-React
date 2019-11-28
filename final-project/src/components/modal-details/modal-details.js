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
            <Exit click={props.exit} />
            <Image src={props.imageUrl} alt={`image of ${props.name}`} />
            <Title title={props.name} />
            <Price priceCard={props.price} />
            <Description descriptionCard={props.description}/>
            <AddCart click={(e) => {
                const objIndex = context.products_cart.map(e => JSON.stringify(e)).indexOf(JSON.stringify(props.card));
                const isObjInArray = objIndex > -1;
                const obj = context.products_cart[objIndex];

                if (isObjInArray) obj.amount += 1;
                else context.products_cart.push(props.card);
            }} />
        </div>

    )
}