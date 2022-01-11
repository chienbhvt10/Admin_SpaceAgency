import { Style } from 'helpers/temp-type';
import { useDispatch } from 'react-redux';

const useListStyle = () => {
  const items: Style[] = [
    {
      code: 'code',
      name: 'name',
      order: 1,
      price: 12,
      theme: 'theme',
    },
  ];
  const loading = false;
  return {
    items,
    loading,
  };
};
export default useListStyle;
