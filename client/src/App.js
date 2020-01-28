import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Movies } from './components';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={'/movies'} component={Movies.List} />
        <Route exact path={'/movies/new'} component={Movies.Form} />
        <Route exact path={'/movies/:id'} component={Movies.Form} />
      </Switch>
    </Router>
  );
}

export default App;
