import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export const useUpdateUser = () => {
  const { loading } = useSelector((state: RootState) => state.user.updateUserState);
  return {
    loading,
  };
};
