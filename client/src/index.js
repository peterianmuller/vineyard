import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import App from './containers/App';
import Form from './components/Form';
import Home from './containers/home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NotesView from'./containers/notesView';
import Map from './components/Map';
import UserPage from './containers/UserPage';
import store from './store';

var Root = props => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/login' />
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/form' component={Form} />
        <Route path='/notesView' component={NotesView} />
        <Route path='/logout' component={Login} />
        <Route path='/map' component={Map} />
        <Route path='/user' component={UserPage} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
