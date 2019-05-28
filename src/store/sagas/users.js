import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { Creators as UsersCreators } from '~/store/ducks/users';
import { Creators as ModalCreators } from '~/store/ducks/modal';

export function* addUser({ payload }) {
  try {
    console.tron.log(payload);
    const { data } = yield call(api.get, `/users/${payload.user}`);
    yield put(UsersCreators.userAddSuccess({ data: { ...data, ...payload.coordinate } }));
    yield put(ModalCreators.hideModal());
  } catch (error) {
    yield put(UsersCreators.userAddFailure());
  }
}
