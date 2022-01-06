import { Me } from 'graphql/generated/graphql';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import * as apis from '../../services/apis';
import { getUserError, getUserSuccess } from '../actions/user';

export function* getUserAsync() {
  try {
    const payload: Me = {
      __typename: 'Query',
      me: {
        __typename: 'Users',
        _id: '1asdvasd',
        address: 'namdinh',
        confirmed: true,
        createdAt: 'kasndkvj',
        email: 'admin@gmail.com',
        name: 'admin',
        role: 'ADMIN',
        updatedAt: '',
        firstName: 'admin',
        lastName: 'admin',
        phone: '0335099459485',
      },
    };
    yield put(getUserSuccess(payload.me));
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(getUserError(err));
  }
}

// export function* logoutFlow() {
//   localStorage.removeItem(TOKEN_KEY);
// }
