import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export const useCreateCustomerSimulation = () => {
  const loading = false;
  return {
    loading,
  };
};
