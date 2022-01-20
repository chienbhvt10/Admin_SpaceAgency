import React from 'react';

const dataSource: any[] = [
  {
    type: 'type',
    design: 'design',
    customerName: 'name',
    totalPrice: 12,
    status: false,
    detail: [
      {
        material: 'material',
        price: 21,
      },
      {
        material: 'material',
        price: 12,
      },
      {
        material: 'material',
        price: 12,
      },
    ],
  },
];
const useListCustomerSimulation = () => {
  const items = dataSource;
  const loading = false;
  return { items, loading };
};

export default useListCustomerSimulation;
