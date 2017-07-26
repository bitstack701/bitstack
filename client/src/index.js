import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './home/Home';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const NoMatch = () => {
  return <h2>Sorry I don't know where you are trying to go...</h2>
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
