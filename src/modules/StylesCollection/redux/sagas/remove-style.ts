import { NotificationSuccess } from 'commons/components/Notification';
import { RemoveStyle } from 'graphql/generated/graphql';
import { loginError } from 'modules/Auth/redux/actions';
import * as apis from 'modules/StylesCollection/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { RemoveStyleAction } from '../action-types/remove-style';
import { actionStyles } from '../actions';
import { actionRemoveStyleSuccess } from '../actions/remove-style';
export function* removeStyleAsync(action: RemoveStyleAction) {
  try {
    // xóa được nhưng bị nhảy đến catch
    const data: RemoveStyle = yield apis.removeStyle(action.payload);
    console.log(data);
    const { pagination } = yield select((state: RootState) => state.styles.stylesState);
    yield put(actionStyles({ pagination }));
    yield put(actionRemoveStyleSuccess(data.removeStyle));
    NotificationSuccess('Thông báo!', 'Delete user success');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(loginError(err));
  }
}
