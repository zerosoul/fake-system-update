import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Update from './pages/Update';
function App() {
  return (
    <BrowserRouter basename="/fsu">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/update/:sys">
          <Update />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
