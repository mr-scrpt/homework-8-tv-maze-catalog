import {
  getSeriesRequest,
  getSeriesSuccess,
  getSeriesFailure
} from '../actions/actions';

const initialState = {
  serials: [],
  isLoading: false,
  error: null
};



export default (state = initialState, action) =>{
  switch (action.type) {
    case getSeriesRequest.toString():
      return{
        ...state,
        serials: [],
        isLoading: true
      };
    case getSeriesSuccess.toString():
      return {
        ...state,
        serials: action.payload,
        isLoading: false
      };
    case getSeriesFailure.toString():{
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    }
  }
}