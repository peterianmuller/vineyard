//Redux requirements
import { applyMiddleware, createStore, combineReducers } from 'redux';

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
  authStatus: authStatusReducer
});

const middleware = applyMiddleware(logger(), promise(), thunk);

export default createStore(rootReducer, middleware);
