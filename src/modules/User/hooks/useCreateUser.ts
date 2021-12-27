import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export const useCreateUser = () => {
  const { loading } = useSelector((state: RootState) => state.user.createUserState);
  return {
    loading,
  };
};
