import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {createSelector} from 'reselect';

import {
  entitiesRequest,
  entitiesSuccess,
} from '../actions/actions';

const entities = handleActions({
  [entitiesRequest]: () => [],
  [entitiesSuccess]: (_state, action) => action.payload
}, []);


const isFetching = handleActions({
  [entitiesRequest]: () => true,
  [entitiesSuccess]: () => false
}, false);

export default combineReducers({
  entities,
  isFetching
})

// Селекторы
export const getEntities = createSelector(
  state => state.entities,
  ({name, summary, _embedded, image}) =>({name, summary, _embedded, image})
);

export const getFetching = state => state.isFetching;

/*
const initialState = {
  entities: [],
  isFetching: false
};



export default (state = initialState, action) =>{
  switch (action.type) {
    case entitiesRequest.toString():
      return{
        ...state,
        entities: [],
        isFetching: true
      };
  case entitiesSuccess.toString():
      return {
        ...state,
        entities: action.payload,
        isFetching: false
      };

    default: return state
  }
}*/
