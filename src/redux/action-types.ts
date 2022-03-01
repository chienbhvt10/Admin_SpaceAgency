import { type } from 'os';

export const APP_STARTED = 'APP_STARTED';
export const ACTION_LOADING = 'ACTION_LOADING';
export const ACTION_LOADING_SUCCESS = 'ACTION_LOADING_SUCCESS';
export const ACTION_LOADING_ERROR = 'ACTION_LOADING_ERROR';
export const ACTION_RESET_FILTER = 'ACTION_RESET_FILTER';
export const ACTION_RESET_FILTER_SUCCESS = 'ACTION_RESET_FILTER_SUCCESS';

export interface LoadingState {
  loading: boolean;
}
export interface LoadingAction {
  type: typeof ACTION_LOADING;
}

export interface LoadingActionSuccess {
  type: typeof ACTION_LOADING_SUCCESS;
}

export interface LoadingActionError {
  type: typeof ACTION_LOADING_ERROR;
}
export type LoadingActionTypes = LoadingAction | LoadingActionSuccess | LoadingActionError;

export interface ResetFilterState {
  isReset: boolean;
}
export interface ResetFilterAction {
  type: typeof ACTION_RESET_FILTER;
}
export interface ResetFilterActionSuccess {
  type: typeof ACTION_RESET_FILTER_SUCCESS;
}
export type ResetFilterActionTypes = ResetFilterAction | ResetFilterActionSuccess;
