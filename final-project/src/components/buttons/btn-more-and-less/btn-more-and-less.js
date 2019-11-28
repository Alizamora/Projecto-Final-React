import React from 'react';
import './btn-more-and-less.css';

export default (props) => {
	return (
		<div>
			<label>Product amount</label>
			<input className="btn_more_less" type='number' value={props.value} onChange={props.change} ></input>
		</div>
	)
}