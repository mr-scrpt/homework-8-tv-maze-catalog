import {createAction} from 'redux-actions';

export const searchRequest = createAction("SEARCH_REQUEST");
export const searchSuccess = createAction("SEARCH_SUCCESS");
export const searchFailure = createAction("SEARCH_FAILURE");


export const entitiesRequest = createAction("ENTITIES_REQUEST");
export const entitiesSuccess = createAction("ENTITIES_SUCCESS");