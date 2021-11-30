
import { ACTION_LOADING, ACTION_LOADING_ERROR, ACTION_LOADING_SUCCESS, APP_STARTED } from './action-types';
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