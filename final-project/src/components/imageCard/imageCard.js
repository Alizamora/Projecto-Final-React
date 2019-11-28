import React from 'react'
import './imageCard.css'

export default props => <img className="imageCard modal_image" src={props.src} alt={props.alt} {...props} />