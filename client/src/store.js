import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
//remove or rename tempreducer once real reducers are in place
import { navReducer } from './reducers/navigation';

const rootReducer = combineReducers({
  nav: navReducer,
});

const middleware = applyMiddleware(logger(), promise, thunk);
export default createStore(rootReducer, middleware);
