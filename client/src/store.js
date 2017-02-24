//Redux requirements
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Redux middleware
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

//Reducers
import { navReducer } from './reducers/navigation';
import { userLoginReducer } from './reducers/login';
import { userSignupReducer } from './reducers/signup';
import { noteFormReducer } from './reducers/noteForm';
import { notesViewReducer } from './reducers/notesView';
import { authStatusReducer } from './reducers/authStatus';

const rootReducer = combineReducers({
  nav: navReducer,
  login: userLoginReducer,
	signup: userSignupReducer,
  note: noteFormReducer,
  notesView: notesViewReducer,
  authStatus: authStatusReducer,
  routing: routerReducer
});

const middleware = applyMiddleware(routerMiddleware(browserHistory), logger(), promise(), thunk);

export default createStore(rootReducer, middleware);
