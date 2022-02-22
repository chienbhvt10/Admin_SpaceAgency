import { TypePagination } from 'commons/type';
import {
  LIST_DOCUMENT,
  LIST_DOCUMENT_ERROR,
  LIST_DOCUMENT_SUCCESS,
  DocumentsActionTypes,
  DocumentsState,
} from '../action-types';

const initialState: DocumentsState = {
  loading: false,
  pagination: {
    skip: TypePagination.DEFAULT_SKIP,
    limit: TypePagination.DEFAULT_LIMIT,
  },
  where: {
    filter: [],
    sort: [],
  },
  dataDocuments: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: DocumentsActionTypes): DocumentsState => {
  switch (action.type) {
    case LIST_DOCUMENT:
      return {
        ...state,
        loading: true,
      };

    case LIST_DOCUMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        pagination: {
          skip: action.payload.pagination?.skip,
          limit: action.payload.pagination?.limit,
        },
        where: action.payload.where,
        total: action.payload.total,
        dataDocuments: action.payload.dataDocuments,
      };
    case LIST_DOCUMENT_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
