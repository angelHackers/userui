import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function appStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}
