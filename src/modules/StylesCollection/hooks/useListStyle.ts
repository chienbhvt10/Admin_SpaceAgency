import { TypePagination } from 'commons/type';
import { FilterInput, GetListStylesVariables, PaginationInput, SortInput, SortValue } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionStyles } from '../redux/actions';

export const useListStyles = () => {
  const dispatch = useDispatch();
  const arrSortDefault: SortInput[] = [
    { key: 'title', value: SortValue.Asc },
    { key: 'theme', value: SortValue.Asc },
    { key: 'order', value: SortValue.Asc },
    { key: 'code3d', value: SortValue.Asc },
    { key: 'price', value: SortValue.Asc },
    { key: 'createdAt', value: SortValue.Asc },
  ];
  const { loading, pagination, where, dataStyles, total } = useSelector((state: RootState) => state.styles.stylesState);
  const variables: GetListStylesVariables = {
    pagination,
    where,
  };
  React.useEffect(() => {
    dispatch(actionStyles(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePaginationAndSorterStyles = (pagination: PaginationInput, sortInput?: SortInput) => {
    const arrSort = [...(where?.sort?.length ? where?.sort : arrSortDefault)];
    if (sortInput && sortInput.value) {
      const sort = arrSort.map((i) => ({
        ...i,
        value: i.key === sortInput.key ? sortInput.value : i.value,
      }));
      dispatch(
        actionStyles({
          pagination,
          where: { ...where, sort },
        }),
      );
    } else {
      dispatch(
        actionStyles({
          pagination,
          where: { ...where, sort: [] },
        }),
      );
    }
  };

  const filterStyles = (filter: FilterInput[]) => {
    dispatch(
      actionStyles({
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
    dataStyles,
    loading,
    paginationTable,
    pagination,
    where,
    filterStyles,
    updatePaginationAndSorterStyles,
  };
};
