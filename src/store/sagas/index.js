import { all, takeLatest } from 'redux-saga/effects';

import { addUser } from './users';
import { Types as UsersTypes } from '~/store/ducks/users';

export default function* rootSaga() {
  yield all([takeLatest(UsersTypes.ADD_REQUEST, addUser)]);
}
