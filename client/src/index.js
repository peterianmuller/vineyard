import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import App from './containers/App';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Form from './components/Form';
import Map from './components/Map';
import store from './store';

var Root = props => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/login' />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/form' component={Form} />
        <Route path='/logout' component={Login} />
        <Route path='/map' component={Map} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
