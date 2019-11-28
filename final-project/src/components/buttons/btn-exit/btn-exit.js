import React from 'react';
import './btn-exit.css';

export default (props) => {
	return (
		<button className="btn_exit" onClick={props.click} >
			<img className="exit_img" src="./equix.svg" alt="Exit botton" />
		</button>
	)
} 