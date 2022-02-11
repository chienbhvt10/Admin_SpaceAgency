import { CommonPath } from 'commons/base-routes';
import { NotificationSuccess } from 'commons/components/Notification';
import { TypePagination } from 'commons/type';
import {
  CreateTheme,
  CreateThemeCategory,
  CreateThemeCategoryVariables,
  CreateThemeImage,
  CreateThemeImageVariables,
} from 'graphql/generated/graphql';
import { getNavigate } from 'helpers/history';
import * as apis from 'modules/ThemesCollection/services/apis';
import { put } from 'redux-saga/effects';
import { actionLoadingSuccess } from 'redux/actions';
import { CreateThemeAction } from '../action-types';
import { actionCreateThemeError, actionCreateThemeSuccess, actionThemes } from '../actions';
export function* createThemeAsync(action: CreateThemeAction) {
  try {
    const createThemeCategoryVariables: CreateThemeCategoryVariables = {
      createThemeCategoryInput: {
        title: action.payload.titleCategory || '',
      },
    };
    const createThemeImageVariables: CreateThemeImageVariables = {
      createThemeImageInput: {
        insidePreviewUrl: action.payload.insidePreviewUrl || '',
        outsidePreviewUrl: action.payload.outsidePreviewUrl || '',
      },
    };
    const dataThemeCategory: CreateThemeCategory = yield apis.createThemeCategory(createThemeCategoryVariables);
    const createThemeImage: CreateThemeImage = yield apis.createThemeImage(createThemeImageVariables);
    const data: CreateTheme = yield apis.createTheme({
      ...action.payload.createThemeInput,
      createThemeInput: {
        ...action.payload.createThemeInput,
        themeCategories: [{ id: dataThemeCategory.createThemeCategory.id }],
        themeImage: { id: createThemeImage.createThemeImage.id },
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
    console.log('error');
    yield put(actionCreateThemeError(err));
  }
}
