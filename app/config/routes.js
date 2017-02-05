import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import Welcome from '../pages/Welcome'
import Movies from '../pages/Movies'
import ThirdPage from '../pages/ThirdPage'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Welcome} />
        <Route path="movies" component={Movies}/>
    </Route>
  </Router>
);
