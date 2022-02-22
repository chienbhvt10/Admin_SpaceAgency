import { GetListAppointments, GetTotalCount, SchemaType } from 'graphql/generated/graphql';
import * as apis from 'modules/AppointmentRequest/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { AppointmentsAction } from '../action-types';
import { actionAppointmentsError, actionAppointmentsSuccess } from '../actions';
export function* getListAppointmentsAsync(action: AppointmentsAction) {
  try {
    const data: GetListAppointments = yield apis.getListAppointments(action.payload);
    // const totalAppointments: GetTotalCount = yield apis.getListAppointments({
    //   type: SchemaType.Material,
    //   where: { ...action.payload.where },
    // });
    if (data.appointmentRequests) {
      yield put(
        actionAppointmentsSuccess({
          dataAppointments: data.appointmentRequests,
          pagination: {
            skip: action.payload.pagination?.skip,
            limit: action.payload.pagination?.limit,
          },
          // total: totalAppointments.count,
          total: 1000,
          where: {
            filter: action.payload.where?.filter,
            sort: action.payload.where?.sort,
          },
        }),
      );
    }
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionAppointmentsError(err));
  }
}
