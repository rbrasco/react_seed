import { combineReducers, applyMiddleware, createStore as ReduxCreateStore } from 'redux';

// Reducers
import SessionReducer from './session/session.reducer';


// Middleware
import thunkMiddleware from 'redux-thunk';
import Reactotron from 'reactotron-react-js';

/**
 * Reducers of the App
 */
const reducers = combineReducers({
  SessionReducer,
});

// While mode is debug, the redux flow needs to be
// created by Reactotron in order to let it know about redux changes

const dev = true;

const createStore = dev ? Reactotron.createStore : ReduxCreateStore;

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducers, {}, middleware);

export default store;
