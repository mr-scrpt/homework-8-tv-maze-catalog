import {createStore} from 'redux';

const reducer = (previousState, action) => previousState;

const INITIAL_STATE = {};

const store = createStore(
  reducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const getStore = ()=>{
    return store;
};
export default getStore;

