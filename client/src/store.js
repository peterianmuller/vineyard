import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import { navReducer } from './reducers/navigation';
import { userLoginReducer } from './reducers/login';
import { userSignupReducer } from './reducers/signup';

const rootReducer = combineReducers({
  nav: navReducer,
  login: userLoginReducer,
	signup: userSignupReducer
});

const middleware = applyMiddleware(logger(), promise(), thunk);
export default createStore(rootReducer, middleware);
