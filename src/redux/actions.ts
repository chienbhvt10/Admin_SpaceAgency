import {
  ACTION_LOADING,
  ACTION_LOADING_ERROR,
  ACTION_LOADING_SUCCESS,
  ACTION_RESET_FILTER,
  ACTION_RESET_FILTER_SUCCESS,
  APP_STARTED,
} from './action-types';
export const appStart = () => {
  return {
    type: APP_STARTED,
  };
};
export const actionLoading = () => {
  return {
    type: ACTION_LOADING,
  };
};
export const actionLoadingSuccess = () => {
  return {
    type: ACTION_LOADING_SUCCESS,
  };
};
export const actionLoadingError = () => {
  return {
    type: ACTION_LOADING_ERROR,
  };
};

export const actionResetFilter = () => {
  return {
    type: ACTION_RESET_FILTER,
  };
};
export const actionResetFilterSuccess = () => {
  return {
    type: ACTION_RESET_FILTER_SUCCESS,
  };
};
