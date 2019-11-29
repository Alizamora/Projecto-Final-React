import React from 'react';
import './success-message.css';

export default (props) => {
	return (
		<div className="success_message_container">
			<img className="sm_img" src='./check.svg' alt='Check icon' />
			<p className="sm_text" >Your purchase has been made successfully</p>
			<button className="btn_sm" onClick={props.click}>Exit</button>
		</div>
	)
}