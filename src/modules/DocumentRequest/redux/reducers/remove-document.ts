import {
  RemoveDocumentActionTypes,
  RemoveDocumentState,
  REMOVE_DOCUMENT,
  REMOVE_DOCUMENT_ERROR,
  REMOVE_DOCUMENT_SUCCESS,
} from '../action-types';

const initialState: RemoveDocumentState = {
  loading: false,
  dataRemoveDocument: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RemoveDocumentActionTypes): RemoveDocumentState => {
  switch (action.type) {
    case REMOVE_DOCUMENT:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_DOCUMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_DOCUMENT_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
