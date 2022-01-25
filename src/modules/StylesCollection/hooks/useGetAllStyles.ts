import { TypeSelect } from 'commons/type';
import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionDefaultStyles, actionStyles } from '../redux/actions';

export function useGetAllStyles() {
  const dispatch = useDispatch();
  const [arrStyles, setArrStyles] = React.useState<TypeSelect[]>();

  const { dataStyles: dataAllStyles, loading } = useSelector((state: RootState) => state.styles.stylesState);

  React.useEffect(() => {
    let arr: TypeSelect[] = [];
    if (dataAllStyles) {
      for (let i = 0; i < dataAllStyles.length; i++) {
        arr.push({
          id: dataAllStyles[i].id,
          title: dataAllStyles[i].title || '',
        });
      }
      setArrStyles(arr);
    }
  }, [dataAllStyles]);

  const getAllStyles = useCallback(() => {
    dispatch(
      actionStyles({
        pagination: {
          skip: 0,
          limit: 1000,
        },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const defaultStyles = useCallback(() => {
    dispatch(actionDefaultStyles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    getAllStyles,
    dataAllStyles,
    arrStyles,
    loading,
    defaultStyles,
  };
}
