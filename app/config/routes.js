import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import PromptContainer from '../contairners/PromptContainer.js';
import ConfirmBattleContainer from '../contairners/ConfirmBattleContainer.js';
import ResultsContainer from '../contairners/ResultsContainer.js';
import Home from '../components/Home';
import Main from '../components/Main';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/playerOne" header="Player One" component={PromptContainer} />
      <Route path="/playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
      <Route path="battle" component={ConfirmBattleContainer} />
      <Route path="results" component={ResultsContainer} />
    </Route>
  </Router>
)

export default Routes;