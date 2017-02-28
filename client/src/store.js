//Redux requirements
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Redux middleware
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

//Reducers
import { authStatusReducer } from './reducers/authStatus';
import { navReducer } from './reducers/navigation';
import { noteFormReducer } from './reducers/noteForm';
import { notesViewReducer } from './reducers/notesView';
import orgSignupReducer from './reducers/OrgSignup';
import { userLoginReducer } from './reducers/login';
import { userSignupReducer } from './reducers/signup';
import { homePageReducer } from './reducers/homePage';

const rootReducer = combineReducers({
  authStatus: authStatusReducer,
  login: userLoginReducer,
  nav: navReducer,
  note: noteFormReducer,
  notesView: notesViewReducer,
  orgSignup: orgSignupReducer,
  routing: routerReducer,
  signup: userSignupReducer,
  homePage: homePageReducer,
});

const middleware = applyMiddleware(routerMiddleware(browserHistory), logger(), promise(), thunk);

export default createStore(rootReducer, middleware);
