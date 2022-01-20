import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export const useCreateStyle = () => {
  const loading = false;
  return {
    loading,
  };
};
