import React from 'react';

export default () => {
	<div className="header container">
		<Nav
			activeKey="/home"
			onSelect={selectedKey => alert(`selected ${selectedKey}`)}
		>
			<Nav.Item>
				<Nav.Link href="./homepage">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="./checkout">
					<img src='./' alt= '' />
				</Nav.Link>
			</Nav.Item>
			
		</Nav>
	</div>
}