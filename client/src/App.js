import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Movies,
  Header,
} from './components';

function App() {
  return (
    <div>
      <Header />
      <Movies.List />
    </div>
  );
}

export default App;
