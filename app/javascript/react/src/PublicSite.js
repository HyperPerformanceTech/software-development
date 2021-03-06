import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import IndexPage from './containers/IndexPage';

const PublicSite = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={IndexPage}/>
      </Route>
    </Router>
  )
}

export default PublicSite
