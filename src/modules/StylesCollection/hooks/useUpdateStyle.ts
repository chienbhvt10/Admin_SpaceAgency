import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export const useUpdateStyle = () => {
  const loading = false;
  return {
    loading,
  };
};
