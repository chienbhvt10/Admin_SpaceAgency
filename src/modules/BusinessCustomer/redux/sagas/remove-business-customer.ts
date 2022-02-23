import { NotificationSuccess } from 'commons/components/Notification';
import { RemoveBusinessCustomer } from 'graphql/generated/graphql';
import * as apis from 'modules/BusinessCustomer/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { RemoveBusinessCustomerAction } from '../action-types';
import { actionBusinessCustomers, actionRemoveBusinessCustomerSuccess } from '../actions';
import { actionRemoveBusinessCustomerError } from '../actions/remove-business-customer';
export function* removeBusinessCustomerAsync(action: RemoveBusinessCustomerAction) {
  try {
    const data: RemoveBusinessCustomer = yield apis.removeBusinessCustomer(action.payload);
    const { pagination } = yield select((state: RootState) => state.requests.requestsState);
    yield put(actionBusinessCustomers({ pagination }));
    yield put(actionRemoveBusinessCustomerSuccess(data.removeBusinessCustomer));
    NotificationSuccess('Thông báo!', 'Delete BusinessCustomer success');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionRemoveBusinessCustomerError(err));
  }
}
