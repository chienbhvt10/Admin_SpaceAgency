import { TypePagination } from 'commons/type';
import {
  FilterInput,
  GetListSimulationsVariables,
  PaginationInput,
  SortInput,
  SortValue,
} from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionSimulations } from '../redux/actions/list-simulations';

export const useListSimulations = () => {
  const dispatch = useDispatch();
  const arrSortDefault: SortInput[] = [
    { key: 'title', value: SortValue.Asc },
    { key: 'theme', value: SortValue.Asc },
    { key: 'order', value: SortValue.Asc },
    { key: 'code3d', value: SortValue.Asc },
    { key: 'price', value: SortValue.Asc },
  ];
  const { loading, pagination, where, dataSimulations, total } = useSelector(
    (state: RootState) => state.simulations.simulationsState,
  );
  const variables: GetListSimulationsVariables = {
    pagination,
    where,
  };
  React.useEffect(() => {
    dispatch(actionSimulations(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePaginationAndSorterSimulations = (pagination: PaginationInput, sortInput?: SortInput) => {
    const arrSort = [...(where?.sort?.length ? where?.sort : arrSortDefault)];
    if (sortInput && sortInput.value) {
      const sort = arrSort.map((i) => ({
        ...i,
        value: i.key === sortInput.key ? sortInput.value : i.value,
      }));
      dispatch(
        actionSimulations({
          pagination,
          where: { ...where, sort },
        }),
      );
    } else {
      dispatch(
        actionSimulations({
          pagination,
          where: { ...where, sort: [] },
        }),
      );
    }
  };

  const filterSimulations = (filter: FilterInput[]) => {
    dispatch(
      actionSimulations({
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
    dataSimulations,
    loading,
    paginationTable,
    pagination,
    where,
    filterSimulations,
    updatePaginationAndSorterSimulations,
  };
};
