//React requirements
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store';

//Containers
import App from './containers/App';
import ChatView from './containers/ChatView';
import Chatroom from './containers/Chatroom';
import Home from './containers/home';
import Login from './containers/Login';
import NotesView from './containers/NotesView';
import OrgSignup from './containers/OrgSignup';
import Signup from './containers/Signup';
import UserPage from './containers/UserPage';
import MapView from './containers/UserMap';

//Components
import MessageWindow from './components/MessageWindow';
import Form from './components/Form';
import Map from './components/Map';
import Note from './components/Note';
import MapWeatherValidation from './components/MapWeatherValidation.js';
import DataForm from './components/DataForm'
import DataVis from './containers/DataVis'

//Actions and functions
import { authTransition } from './helpers/changeHandlers';

const history = syncHistoryWithStore(browserHistory, store);

var Root = props => {
  const validateLogin = authTransition.bind(null, '/login', false);
  const isLoggedIn = authTransition.bind(null, '/home', true);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRedirect to='/home' />
          <Route path='/form' component={Form} onEnter={validateLogin} />
          <Route path='/formValidation' component={MapWeatherValidation} />
          <Route path='/home' component={Home} onEnter={validateLogin} />
          <Route path='/login' component={Login} onEnter={isLoggedIn} />
          <Route path='/map' component={Map} onEnter={validateLogin} />
          <Route path='/notes' component={Note} />
          <Route path='/notesView' component={NotesView} onEnter={validateLogin} />
          <Route path='/orgSignup' component={OrgSignup} onEnter={isLoggedIn} />
          <Route path='/signup' component={Signup} onEnter={isLoggedIn} />
          <Route path='/user' component={UserPage} onEnter={validateLogin} />
          <Route path='/dataForm' component={DataForm} onEnter={validateLogin} />
          <Route path='/messages' component={ChatView} onEnter={validateLogin} />
          <Route path='/mapHome' component ={MapView} onEnter={validateLogin} />
          <Route path='/DataVis' component ={DataVis} onEnter={validateLogin} />
        </Route>
      </Router>
    </Provider>
  );

}


ReactDOM.render(<Root />, document.getElementById('app'));
