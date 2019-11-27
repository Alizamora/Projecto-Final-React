import React from 'react';
import ReactDOM from 'react-dom';
import Context from './react-context';
import App from './App';

ReactDOM.render(
	<Context.Provider value={{ products: [], products_cart: [] }}>
		<App />
	</Context.Provider>

	, document.getElementById('root'));
