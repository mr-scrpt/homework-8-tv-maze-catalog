import {createAction} from 'redux-actions';

export const searchRequest = createAction("SERIES_REQUEST");
export const searchSuccess = createAction("SERIES_SUCCESS");
export const searchFailure = createAction("SERIES_FAILURE");


export const entitiesRequest = createAction("ENTITIES_REQUEST");
export const entitiesSuccess = createAction("ENTITIES_SUCCESS");