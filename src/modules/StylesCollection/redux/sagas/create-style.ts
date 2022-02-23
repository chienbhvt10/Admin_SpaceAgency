import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { TypePagination } from 'commons/type';
import { CreateStyle } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import * as apis from 'modules/StylesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { CreateStyleAction } from '../action-types';
import { actionCreateStyleError, actionCreateStyleSuccess } from '../actions';
import { actionStyles } from '../actions/list-styles';
export function* createStyleAsync(action: CreateStyleAction) {
  try {
    const createStyleData: CreateStyle = yield apis.createStyle({
      createStyleInput: {
        ...action.payload.createStyleInput,
      },
    });

    yield put(
      actionStyles({
        pagination: {
          skip: TypePagination.DEFAULT_SKIP,
          limit: TypePagination.DEFAULT_LIMIT,
        },
      }),
    );
    getNavigate(CommonPath.STYLES_COLLECTION);
    yield put(actionCreateStyleSuccess(createStyleData.createStyle));
    NotificationSuccess('通知!', 'Create style success.');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionCreateStyleError(err));
  }
}
