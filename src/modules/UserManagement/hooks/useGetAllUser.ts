import { TypeSelect } from 'commons/type';
import { Role } from 'graphql/generated/graphql';
import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionUsers, defaultActionUsers } from '../redux/actions';

export function useGetAllUser() {
  const dispatch = useDispatch();
  const [arrUsers, setArrUsers] = React.useState<TypeSelect[]>();

  const { dataUsers: dataAllUsers, loading } = useSelector((state: RootState) => state.users.usersState);

  React.useEffect(() => {
    let arr: TypeSelect[] = [];
    if (dataAllUsers) {
      for (let i = 0; i < dataAllUsers.length; i++) {
        arr.push({
          id: dataAllUsers[i].id,
          title: dataAllUsers[i].firstName || '',
        });
      }
      setArrUsers(arr);
    }
  }, [dataAllUsers]);
  const getAllUser = useCallback(() => {
    dispatch(
      actionUsers({
        where: {
          filter: [
            {
              key: 'role',
              value: Role.Customer,
            },
          ],
        },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const defaultUser = useCallback(() => {
    dispatch(defaultActionUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    getAllUser,
    defaultUser,
    arrUsers,
    dataAllUsers,
    loading,
  };
}
