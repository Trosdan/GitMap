import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { Creators as UsersCreators } from '~/store/ducks/users';

export function* addUser({ user, coordinate }) {
  try {
    console.log.log({ user, coordinate });
    const { data } = yield call(api.get, `/users/${user}`);
    yield put(UsersCreators.userAddSuccess(data));
  } catch (error) {
    yield put(UsersCreators.userAddFailure());
  }
}
