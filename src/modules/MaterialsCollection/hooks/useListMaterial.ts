import { TypePagination } from 'commons/type';
import {
  FilterInput,
  GetListMaterialsVariables,
  PaginationInput,
  SortInput,
  SortValue,
} from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionMaterials } from '../redux/actions';

export const useListMaterial = () => {
  const dispatch = useDispatch();
  const { loading, pagination, where, dataMaterials } = useSelector(
    (state: RootState) => state.materials.materialsState,
  );
  const variables: GetListMaterialsVariables = {
    pagination,
    where,
  };
  React.useEffect(() => {
    dispatch(actionMaterials(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePaginationAndSorterMaterials = (pagination: PaginationInput, sortInput?: SortInput) => {
    const arrSort = [...(where?.sort || [])];
    if (sortInput && sortInput.value) {
      const sort = arrSort.map((i) => ({
        ...i,
        value: i.key === sortInput.key ? sortInput.value : i.value,
      }));
      dispatch(
        actionMaterials({
          pagination,
          where: { ...where, sort },
        }),
      );
    } else {
      const sort = arrSort.map((i) => ({
        ...i,
        value: i.key === sortInput?.key ? SortValue.Asc : i.value,
      }));
      dispatch(
        actionMaterials({
          pagination,
          where: { ...where, sort },
        }),
      );
    }
  };

  const filterStyles = (filter: FilterInput[]) => {
    dispatch(
      actionMaterials({
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
    dataMaterials,
    loading,
    paginationTable,
    pagination,
    where,
    filterStyles,
    updatePaginationAndSorterMaterials,
  };
};
