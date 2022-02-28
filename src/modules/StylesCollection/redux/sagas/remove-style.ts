import { NotificationSuccess } from 'commons/components/Notification';
import { RemoveStyle } from 'graphql/generated/graphql';
import * as apis from 'modules/StylesCollection/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { RemoveStyleAction } from '../action-types/remove-style';
import { actionStyles } from '../actions';
import { actionRemoveStyleError, actionRemoveStyleSuccess } from '../actions/remove-style';
export function* removeStyleAsync(action: RemoveStyleAction) {
  try {
    const data: RemoveStyle = yield apis.removeStyle(action.payload);
    const { pagination } = yield select((state: RootState) => state.styles.stylesState);
    yield put(actionStyles({ pagination }));
    yield put(actionRemoveStyleSuccess(data.removeStyle));
    NotificationSuccess('通知!', 'デザイン削除に成功しました。');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionRemoveStyleError(err));
  }
}
