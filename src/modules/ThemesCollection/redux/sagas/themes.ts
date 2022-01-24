import { GetListThemes, GetTotalCount, SchemaType } from 'graphql/generated/graphql';
import * as apis from 'modules/ThemesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { ThemesAction } from '../action-types/themes';
import { actionThemesError, actionThemesSuccess } from '../actions';
export function* getThemesAsync(action: ThemesAction) {
  try {
    const data: GetListThemes = yield apis.getThemes(action.payload);
    const totalStyles: GetTotalCount = yield apis.getTotalThemes({
      type: SchemaType.Theme,
      where: { ...action.payload.where },
    });
    yield put(
      actionThemesSuccess({
        dataThemes: data.themes || [],
        pagination: {
          ...action.payload.pagination,
        },
        total: totalStyles.count,
        where: {
          ...action.payload.where,
        },
      }),
    );
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionThemesError(err));
  }
}
