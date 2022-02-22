import { TypePagination } from 'commons/type';
import { FilterInput, GetListRequestVariables, PaginationInput, SortInput, SortValue } from 'graphql/generated/graphql';
import { actionRequests } from 'modules/ContactRequest/redux/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionAppointments } from '../redux/actions';

export const useListAppointments = () => {
  const dispatch = useDispatch();
  const arrSortDefault: SortInput[] = [
    { key: 'email', value: SortValue.Asc },
    { key: 'phone', value: SortValue.Asc },
    { key: 'requesterFullName', value: SortValue.Asc },
  ];
  const { loading, pagination, where, dataAppointments, total } = useSelector(
    (state: RootState) => state.appointments.appointmentsState,
  );
  const variables: GetListRequestVariables = {
    pagination,
    where,
  };
  React.useEffect(() => {
    dispatch(actionAppointments(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePaginationAndSorterAppointments = (pagination: PaginationInput, sortInput?: SortInput) => {
    const arrSort = [...(where?.sort?.length ? where?.sort : arrSortDefault)];
    if (sortInput && sortInput.value) {
      const sort = arrSort.map((i) => ({
        ...i,
        value: i.key === sortInput.key ? sortInput.value : i.value,
      }));
      dispatch(
        actionAppointments({
          pagination,
          where: { ...where, sort },
        }),
      );
    } else {
      dispatch(
        actionAppointments({
          pagination,
          where: { ...where, sort: [] },
        }),
      );
    }
  };

  const filterAppointments = (filter: FilterInput[]) => {
    dispatch(
      actionAppointments({
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
    dataAppointments,
    loading,
    paginationTable,
    pagination,
    where,
    filterAppointments,
    updatePaginationAndSorterAppointments,
  };
};
