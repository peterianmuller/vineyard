import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import { navReducer } from './reducers/navigation';
import { userLoginReducer } from './reducers/login';
import { userSignupReducer } from './reducers/signup';
import { noteFormReducer } from './reducers/noteForm';
import { notesViewReducer } from './reducers/notesView';

const rootReducer = combineReducers({
  nav: navReducer,
  login: userLoginReducer,
	signup: userSignupReducer,
  note: noteFormReducer
});

const middleware = applyMiddleware(logger(), promise(), thunk);

export default createStore(rootReducer, middleware);
