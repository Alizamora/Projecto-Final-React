import React from 'react';
import './btn-remove-product.css';

export default (props) => {
    return(
        <button className="btn-remove-product" onClick={props.click}>
            Remove product
        </button>
    )
}