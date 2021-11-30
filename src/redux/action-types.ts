export const APP_STARTED = 'APP_STARTED';
export const ACTION_LOADING = 'ACTION_LOADING';
export const ACTION_LOADING_SUCCESS = 'ACTION_LOADING_SUCCESS';
export const ACTION_LOADING_ERROR = 'ACTION_LOADING_ERROR';

export interface LoadingState{
  loading:boolean
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