import { combineReducers } from 'redux';
import { DetailRequestState, RemoveRequestState, RequestsState, UpdateRequestStatusState } from '../action-types';
import requests from './list-requests';
import updateRequestStatus from './update-request-status';
import detailRequest from './detail-request';
import removeRequest from './remove-request';

export interface RequestsModuleState {
  requestsState: RequestsState;
  updateRequestStatus: UpdateRequestStatusState;
  detailRequest: DetailRequestState;
  removeRequest: RemoveRequestState;
}

export default combineReducers<RequestsModuleState>({
  requestsState: requests,
  updateRequestStatus: updateRequestStatus,
  detailRequest: detailRequest,
  removeRequest: removeRequest,
});
