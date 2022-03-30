import { TypePagination } from 'commons/type';
import { FilterInput, GetListRequestVariables, PaginationInput, SortInput, SortValue } from 'graphql/generated/graphql';
import { actionRequests } from 'modules/Request/redux/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export const useListRequests = () => {
  const dispatch = useDispatch();
  const arrSortDefault: SortInput[] = [
    { key: 'email', value: undefined },
    { key: 'requesterFullName', value: undefined },
  ];
  const { loading, pagination, where, dataRequests, total } = useSelector(
    (state: RootState) => state.requests.requestsState,
  );
  const variables: GetListRequestVariables = {
    pagination,
    where,
  };
  React.useEffect(() => {
    dispatch(actionRequests(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePaginationAndSorterRequests = (pagination: PaginationInput, sortInput?: SortInput) => {
    const arrSort = [...(where?.sort?.length ? where?.sort : arrSortDefault)];
    if (sortInput && sortInput.value) {
      const sort = arrSort.map((i) => ({
        ...i,
        value: i.key === sortInput.key ? sortInput.value : undefined,
      }));
      dispatch(
        actionRequests({
          pagination,
          where: { ...where, sort },
        }),
      );
    } else {
      dispatch(
        actionRequests({
          pagination,
          where: { ...where, sort: [] },
        }),
      );
    }
  };

  const filterRequests = (filter: FilterInput[]) => {
    dispatch(
      actionRequests({
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
    dataRequests,
    loading,
    paginationTable,
    pagination,
    where,
    filterRequests,
    updatePaginationAndSorterRequests,
  };
};
