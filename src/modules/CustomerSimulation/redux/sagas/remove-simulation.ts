import { NotificationSuccess } from 'commons/components/Notification';
import { RemoveSimulation } from 'graphql/generated/graphql';
import * as apis from 'modules/CustomerSimulation/services/apis';
import { put, select } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { RootState } from 'redux/reducers';
import { RemoveSimulationAction } from '../action-types';
import { actionRemoveSimulationError, actionRemoveSimulationSuccess, actionSimulations } from '../actions';
export function* removeSimulationAsync(action: RemoveSimulationAction) {
  try {
    const data: RemoveSimulation = yield apis.removeSimulation(action.payload);
    const { pagination } = yield select((state: RootState) => state.simulations.simulationsState);
    if (data.removeSimulation) yield put(actionRemoveSimulationSuccess(data.removeSimulation));
    yield put(actionSimulations({ pagination }));
    NotificationSuccess('通知', 'シミュレーションの削除に成功しました。');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionRemoveSimulationError(err));
  }
}
