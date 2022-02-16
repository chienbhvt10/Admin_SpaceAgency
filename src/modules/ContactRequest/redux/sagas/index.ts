import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { getRequestAsync } from './detail.request';
import { getListRequestsAsync } from './list-requests';
import { removeRequestAsync } from './remove-request';
import { updateRequestStatusAsync } from './update-request-status';
export default function* root() {
  yield all([takeLatest(actionTypes.LIST_REQUEST, getListRequestsAsync)]);
  yield all([takeLatest(actionTypes.DETAIL_REQUEST, getRequestAsync)]);
  yield all([takeLatest(actionTypes.UPDATE_REQUEST_STATUS, updateRequestStatusAsync)]);
  yield all([takeLatest(actionTypes.REMOVE_REQUEST, removeRequestAsync)]);
}
