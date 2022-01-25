import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDefaultThemes, actionThemes } from '../redux/actions';
import { RootState } from 'redux/reducers';
import React from 'react';
import { TypeSelect } from 'commons/type';

export function useGetAllThemes() {
  const dispatch = useDispatch();
  const [arrThemes, setArrThemes] = React.useState<TypeSelect[]>();
  const { dataThemes: dataAllThemes, loading } = useSelector((state: RootState) => state.themes.themesState);

  React.useEffect(() => {
    let arr: TypeSelect[] = [];
    if (dataAllThemes) {
      for (let i = 0; i < dataAllThemes.length; i++) {
        arr.push({
          id: dataAllThemes[i].id,
          title: dataAllThemes[i].title,
        });
      }
      setArrThemes(arr);
    }
  }, [dataAllThemes]);
  const getAllThemes = useCallback(() => {
    dispatch(
      actionThemes({
        pagination: {
          skip: 0,
          limit: 1000,
        },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const defaultThemes = useCallback(() => {
    dispatch(actionDefaultThemes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getAllThemes,
    dataAllThemes,
    loading,
    arrThemes,
    defaultThemes,
  };
}
