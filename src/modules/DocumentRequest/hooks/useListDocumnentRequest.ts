import { TypePagination } from 'commons/type';
import { FilterInput, GetListRequestVariables, PaginationInput, SortInput, SortValue } from 'graphql/generated/graphql';
import { actionRequests } from 'modules/ContactRequest/redux/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionDocuments } from '../redux/actions';

export const useListDocuments = () => {
  const dispatch = useDispatch();
  const arrSortDefault: SortInput[] = [
    { key: 'email', value: SortValue.Asc },
    { key: 'phone', value: SortValue.Asc },
    { key: 'requesterFullName', value: SortValue.Asc },
  ];
  const { loading, pagination, where, dataDocuments, total } = useSelector(
    (state: RootState) => state.documents.documentsState,
  );
  const variables: GetListRequestVariables = {
    pagination,
    where,
  };
  React.useEffect(() => {
    dispatch(actionDocuments(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePaginationAndSorterDocuments = (pagination: PaginationInput, sortInput?: SortInput) => {
    const arrSort = [...(where?.sort?.length ? where?.sort : arrSortDefault)];
    if (sortInput && sortInput.value) {
      const sort = arrSort.map((i) => ({
        ...i,
        value: i.key === sortInput.key ? sortInput.value : i.value,
      }));
      dispatch(
        actionDocuments({
          pagination,
          where: { ...where, sort },
        }),
      );
    } else {
      dispatch(
        actionDocuments({
          pagination,
          where: { ...where, sort: [] },
        }),
      );
    }
  };

  const filterDocuments = (filter: FilterInput[]) => {
    dispatch(
      actionDocuments({
        pagination: {
          limit: TypePagination.DEFAULT_LIMIT,
          skip: TypePagination.DEFAULT_SKIP,
        },
        where: {
          ...where,
          filter,
        },
      }),
    );
  };

  const skip = pagination?.skip || TypePagination.DEFAULT_SKIP;
  const limit = pagination?.limit || TypePagination.DEFAULT_LIMIT;
  const paginationTable = {
    pageSize: limit,
    current: skip / limit + 1,
    total: total || 0,
  };
  return {
    dataDocuments,
    loading,
    paginationTable,
    pagination,
    where,
    filterDocuments,
    updatePaginationAndSorterDocuments,
  };
};
