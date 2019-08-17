import {
  entitiesRequest,
  entitiesSuccess,
} from '../actions/actions';

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
}