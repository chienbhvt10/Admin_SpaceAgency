import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { TypePagination } from 'commons/type';
import { CreateTheme, CreateThemeCategory, CreateThemeCategoryVariables } from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import * as apis from 'modules/ThemesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { CreateThemeAction } from '../action-types';
import { actionCreateThemeError, actionCreateThemeSuccess, actionThemes } from '../actions';
export function* createThemeAsync(action: CreateThemeAction) {
  try {
    const variables: CreateThemeCategoryVariables = {
      createThemeCategoryInput: {
        title: action.payload.titleCategory || '',
      },
    };
    const dataThemeCategory: CreateThemeCategory = yield apis.createThemeCategory(variables);
    const data: CreateTheme = yield apis.createTheme({
      ...action.payload.createThemeInput,
      createThemeInput: {
        ...action.payload.createThemeInput,
        themeCategories: [{ id: dataThemeCategory.createThemeCategory.id }],
      },
    });
    yield put(
      actionThemes({
        pagination: {
          skip: TypePagination.DEFAULT_SKIP,
          limit: TypePagination.DEFAULT_LIMIT,
        },
      }),
    );
    getNavigate(CommonPath.THEME_COLLECTION);
    yield put(actionCreateThemeSuccess(data.createTheme));
    NotificationSuccess('Thông báo!', 'Create theme success.');
    yield put(actionLoadingSuccess());
  } catch (err: any) {
    yield put(actionCreateThemeError(err));
  }
}
