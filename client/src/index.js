//React requirements
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

//Containers
import App from './containers/App';
import Home from './containers/home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NotesView from './containers/NotesView';
import UserPage from './containers/UserPage';

//Components
import Form from './components/Form';
import Map from './components/Map';
import Note from './components/Note';
import MapWeatherValidation from './components/MapWeatherValidation.js';

var Root = props => {
  const authTransition = (nextState, replace, callback) => {
    const currentState = store.getState();
    const currentUser = currentState.authStatus;

    if (!currentUser.username) {
      
      replace('/login');
    }
    callback();
  };

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRedirect to='/home' />
          <Route path='/home' component={Home} onEnter={authTransition} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/form' component={Form} onEnter={authTransition}/>
          <Route path='/formValidation' component={MapWeatherValidation} />
          <Route path='/notesView' component={NotesView} onEnter={authTransition} />
          <Route path='/map' component={Map} onEnter={authTransition} />
          <Route path='/user' component={UserPage} onEnter={authTransition} />
          <Route path='/notes' component={Note} />
        </Route>
      </Router>
    </Provider>
  );

}


ReactDOM.render(<Root />, document.getElementById('app'));
