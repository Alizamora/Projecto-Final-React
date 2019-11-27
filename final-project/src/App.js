import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Checkout from './pages/checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} component={HomePage} exact />
        <Route path={'/checkout'} component={Checkout} />
      </BrowserRouter>
    </div>
  );
}

export default App;