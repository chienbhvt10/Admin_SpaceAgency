import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { UpdateTheme, UpdateThemeCategory, UpdateThemeCategoryVariables } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import * as apis from 'modules/ThemesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { UpdateThemeAction } from '../action-types';
import { actionUpdateThemeError, actionUpdateThemeSuccess } from '../actions';
export function* updateThemeAsync(action: UpdateThemeAction) {
  try {
    const variables: UpdateThemeCategoryVariables = {
      updateThemeCategoryInput: {
        id: action.payload.idCategory,
        title: action.payload.titleCategory,
      },
    };
    const dataThemeCategory: UpdateThemeCategory = yield apis.updateThemeCategory(variables);
    const data: UpdateTheme = yield apis.updateTheme({
      updateThemeInput: {
        ...action.payload.updateThemeInput,
        themeCategories: [{ id: dataThemeCategory.updateThemeCategory.id }],
      },
    });
    getNavigate(CommonPath.THEME_COLLECTION);
    yield put(actionUpdateThemeSuccess(data));
    NotificationSuccess('Thông báo!', 'Update theme success.');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionUpdateThemeError(err));
  }
}
