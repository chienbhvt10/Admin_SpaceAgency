import { TypePagination } from 'commons/type';
import { FilterInput, GetListStyleVariables, PaginationInput, SortInput } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { getListStyle } from '../redux/actions';

const useListStyles = () => {
  const dispatch = useDispatch();
  const { loading, dataStyles, pagination, where } = useSelector((state: RootState) => state.styles.getListStyleState);
  const variables: GetListStyleVariables = {
    pagination,
    where,
  };
  React.useEffect(() => {
    dispatch(getListStyle(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updatePaginationAndSorterStyle = (pagination: PaginationInput, sort: SortInput[]) => {
    dispatch(
      getListStyle({
        pagination,
        where: { ...where, sort },
      }),
    );
  };
  const filterStyle = (filter: FilterInput[]) => {
    dispatch(
      getListStyle({
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
  const skip = pagination.skip || 0;
  const limit = pagination.limit || 20;
  const paginationTable = {
    pageSize: pagination.limit || TypePagination.DEFAULT_LIMIT,
    current: skip / limit + 1,
    total: 200,
  };
  return {
    dataStyles,
    loading,
    pagination,
    where,
    paginationTable,
    updatePaginationAndSorterStyle,
    filterStyle,
  };
};
export default useListStyles;
