// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import {entitiesRequest, entitiesSuccess} from '../actions';
import {show} from '../api';

export const showMiddleware = store => next => action => {
  if (action.type === entitiesRequest.toString()) {
    const query = action.payload;
    show(query)
      .then(res => {
        store.dispatch(entitiesSuccess(res));
      })
      /*.catch(err => {
        store.dispatch(searchFailure(err));
      })*/
  }
  next(action);
};
