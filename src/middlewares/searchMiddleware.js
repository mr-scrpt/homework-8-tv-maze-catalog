// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
import {searchRequest, searchSuccess, searchFailure} from '../actions/actions';
import {search} from '../api';


export const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    console.log(searchRequest.toString());
    const query = action.payload;

    search(query)
      .then(res => {
        store.dispatch(searchSuccess(res));
      })
      .catch(err => {
        store.dispatch(searchFailure(err));
      })
  }
  next(action);

};