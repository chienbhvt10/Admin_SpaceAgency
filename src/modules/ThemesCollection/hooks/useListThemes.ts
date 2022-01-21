import { TypePagination } from 'commons/type';
import { FilterInput, GetListThemesVariables, PaginationInput, SortInput, SortValue } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionThemes } from '../redux/actions';

export const useListThemes = () => {
  const dispatch = useDispatch();
  const arrSortDefault: SortInput[] = [
    { key: 'title', value: SortValue.Asc },
    { key: 'code3D', value: SortValue.Asc },
    { key: 'price', value: SortValue.Asc },
  ];
  const { loading, pagination, where, dataThemes } = useSelector((state: RootState) => state.themes.themesState);
  const variables: GetListThemesVariables = {
    pagination,
    where,
  };
  React.useEffect(() => {
    dispatch(actionThemes(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePaginationAndSorterThemes = (pagination: PaginationInput, sortInput?: SortInput) => {
    const arrSort = [...(where?.sort?.length ? where?.sort : arrSortDefault)];
    if (sortInput && sortInput.value) {
      const sort = arrSort.map((i) => ({
        ...i,
        value: i.key === sortInput.key ? sortInput.value : i.value,
      }));
      dispatch(
        actionThemes({
          pagination,
          where: { ...where, sort },
        }),
      );
    } else {
      dispatch(
        actionThemes({
          pagination,
          where: { ...where, sort: [] },
        }),
      );
    }
  };

  const filterTheme = (filter: FilterInput[]) => {
    dispatch(
      actionThemes({
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
    total: 200,
  };
  return {
    dataThemes,
    loading,
    paginationTable,
    pagination,
    where,
    filterTheme,
    updatePaginationAndSorterThemes,
  };
};
