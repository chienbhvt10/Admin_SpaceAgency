import { RemoveDocumentRequestVariables } from 'graphql/generated/graphql';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionRemoveDocument } from '../redux/actions';

export function useRemoveDocumentRequest() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.documents.removeDocument);
  const removeDocument = useCallback(
    (variables: RemoveDocumentRequestVariables) => {
      dispatch(actionRemoveDocument(variables));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return {
    loading,
    removeDocument,
  };
}
