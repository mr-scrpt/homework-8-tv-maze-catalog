import {createStore} from 'redux';
import rootReducer from './reducers';

const INITIAL_STATE = {};

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const getStore = ()=>{
    return store;
};
export default getStore;

