import { combineReducers } from 'redux';
import { RequestsState } from '../action-types';
import requests from './list-requests';

export interface RequestsModuleState {
  requestsState: RequestsState;
}

export default combineReducers<RequestsModuleState>({
  requestsState: requests,
});
