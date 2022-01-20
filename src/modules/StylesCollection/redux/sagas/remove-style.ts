import * as apis from 'modules/StylesCollection/services/apis';
import { NotificationError, NotificationSuccess } from 'commons/components/Notification';
import { RemoveStyle } from 'graphql/generated/graphql';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RemoveStyleAction } from '../action-types';
import { RootState } from 'redux/reducers';
import { getListStyle, RemoveStyleError, RemoveStyleSuccess } from '../actions';

export function* removeStyleAsync(action: RemoveStyleAction) {
  try {
    const data: RemoveStyle = yield apis.removeStyleApi(action.payload);
    const { pagination } = yield select((state: RootState) => state.styles.getListStyleState);
    yield put(getListStyle({ pagination }));
    yield put(RemoveStyleSuccess(data.removeStyle));
    NotificationError('Thông báo!', 'Delete style successfully!');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(RemoveStyleError(err));
  }
}
