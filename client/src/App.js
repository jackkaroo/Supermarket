import React from 'react';
import Routing from './routing/index';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);

export default App;
