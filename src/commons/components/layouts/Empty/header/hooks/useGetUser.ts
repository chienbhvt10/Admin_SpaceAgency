import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export const useGetUser = () => {
  const { loading, userInfo } = useSelector((state: RootState) => state.auth.loginState);
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(autoLoginFlow());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return {
    loading,
    userInfo,
  };
};
