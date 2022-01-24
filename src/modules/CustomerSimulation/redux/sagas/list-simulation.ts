import { GetListSimulations, GetListUsers, GetTotalCount, SchemaType } from 'graphql/generated/graphql';
import * as apis from 'modules/CustomerSimulation/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { SimulationsAction } from '../action-types';
import { actionSimulationsSuccess, actionSimulationsError } from '../actions';
export function* getListSimulationsAsync(action: SimulationsAction) {
  try {
    const data: GetListSimulations = yield apis.getListSimulations(action.payload);
    const totalStyles: GetTotalCount = yield apis.getTotalSimulations({
      type: SchemaType.Simulation,
      where: { ...action.payload.where },
    });
    yield put(
      actionSimulationsSuccess({
        dataSimulations: data.simulations,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        total: totalStyles.count,
        where: {
          filter: action.payload.where?.filter,
          sort: action.payload.where?.sort,
        },
      }),
    );
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionSimulationsError(err));
  }
}
