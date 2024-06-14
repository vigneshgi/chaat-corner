import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaticPage from './components/staticPage'
import EggMatrix from './components/eggMatrix';
// import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={StaticPage} />
      <Route path="/eggmatrix" component={EggMatrix} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
  )
}

export default App