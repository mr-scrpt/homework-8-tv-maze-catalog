import {createStore, compose, applyMiddleware} from 'redux';
import {searchMiddleware} from "./middlewares/searchMiddleware";
import {showMiddleware} from './middlewares/showMiddleware';

import rootReducer from './reducers';

const INITIAL_STATE = {};

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  compose(
    applyMiddleware(searchMiddleware,showMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );



const getStore = ()=>{
    return store;
};
export default getStore;

