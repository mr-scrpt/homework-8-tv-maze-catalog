import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {createSelector} from 'reselect';

import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/actions';


const result = handleActions({
  [searchRequest]: () => [],
  [searchSuccess]: (_state, action) => action.payload
}, []);

const isFetching = handleActions({
  [searchRequest]: () => true,
  [searchSuccess]: () => false,
  [searchFailure]: () => false
}, false);

const error = handleActions({
  [searchRequest]: () => null,
  [searchFailure]: (_store, action) => action.payload
}, null);

export default combineReducers({
  result,
  isFetching,
  error
})

//Селекторы
export const getResult = createSelector(
  state => state.result,
  result => result.map(
    ({id, name, image: {medium}, summary}) =>({
      id,
      name,
      image: medium,
      summary
    })
  )
);


export const getError = state => state.error;
export const getFetching = state => state.isFetching;
/*
const initialState = {
  result: [],
  isFetching: false,
  error: null
};



export default (state = initialState, action) =>{
  switch (action.type) {
    case searchRequest.toString():
      return{
        ...state,
        result: [],
        isFetching: true
      };
    case searchSuccess.toString():
      return {
        ...state,
        result: action.payload,
        isFetching: false
      };
    case searchFailure.toString():{
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    }
    default: return state
  }
}
*/
