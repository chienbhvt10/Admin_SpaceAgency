import { Col, Row, TablePaginationConfig } from 'antd';
import { CommonPath } from 'commons/base-routes';
import CustomerSimulationLayout from 'commons/components/layouts/CustomerSimulation';
import PageHeader from 'commons/components/layouts/PageHeader';
import TableHeader from 'commons/components/layouts/TableHeader';
import { TypeKeyFilterUserSimulation, TypePagination } from 'commons/type';
import { FilterInput, ISimulation } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
import FilterForm from 'modules/CustomerSimulation/components/filter-form';
import { useListSimulations } from 'modules/CustomerSimulation/hooks/useListCustomerSimulation';
import React from 'react';
import { useNavigate } from 'react-router';
import CustomerSimulationTable from './Table';

const CustomerSimulationPage = () => {
  const {
    dataSimulations,
    loading,
    paginationTable,
    pagination,
    updatePaginationAndSorterSimulations,
    filterSimulations,
  } = useListSimulations();
  const [value, setValue] = React.useState<string>('');
  const [themeId, setThemeId] = React.useState<string>('');
  const [styleId, setStyleId] = React.useState<string>('');
  const [disabled, setDisabled] = React.useState<boolean>(false);
  // const { removeSimulation } = useRemoveSimulation();
  const navigate = useNavigate();
  const arrFilter: FilterInput[] = [{ key: TypeKeyFilterUserSimulation.NAME, value: '' }];
  React.useEffect(() => {
    setTitle('Customer Simulation Collections');
  });

  const onDelete = (record: ISimulation) => () => {
    console.log(parseInt(record.id));
    // removeSimulation({
    //   id: parseFloat(record.id),
    // });
  };
  const onEdit = (record: ISimulation) => () => {
    navigate('/user-simulate-collection/detail/' + record.id);
  };
  const onChange = (paginationTable: TablePaginationConfig, __: any, sorter: any) => {
    const order = OrderOfSorter(sorter.order);
    const limit = pagination?.limit || TypePagination.DEFAULT_LIMIT;
    const current = paginationTable.current || 1;
    const skip = (current - 1) * limit;
    updatePaginationAndSorterSimulations(
      {
        skip,
        limit,
      },
      {
        key: sorter.columnKey?.toString() || '',
        value: order,
      },
    );
  };

  const onNew = () => {
    navigate(CommonPath.USER_SIMULATE_COLLECTION_NEW);
  };

  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  const onChangeTheme = (value: string) => {
    setThemeId(value);
  };

  const onChangeStyle = (value: string) => {
    setStyleId(value);
  };

  const onReset = () => {};

  const handleSearch = () => {
    const newFilter = arrFilter.map((i) => ({
      ...i,
      value:
        i.key === TypeKeyFilterUserSimulation.NAME
          ? value
          : i.key === TypeKeyFilterUserSimulation.STYLE
          ? styleId
          : i.key === TypeKeyFilterUserSimulation.THEME
          ? themeId
          : '',
    }));
    filterSimulations(newFilter);
  };
  return (
    <CustomerSimulationLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableHeader title="Customer Simulation Collections">
        <Row justify="center">
          <Col span={24}>
            <FilterForm
              onChangeTheme={onChangeTheme}
              value={value}
              handleSearch={handleSearch}
              onChangeValue={onChangeValue}
              onReset={onReset}
              disabled={disabled}
              onChangeStyle={onChangeStyle}
            />
          </Col>
          <Col span={24}>
            <CustomerSimulationTable
              onDelete={onDelete}
              onEdit={onEdit}
              items={dataSimulations}
              loading={loading}
              pagination={paginationTable}
              onChange={onChange}
            />
          </Col>
        </Row>
      </TableHeader>
    </CustomerSimulationLayout>
  );
};

export default CustomerSimulationPage;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'Home',
  },
  {
    path: CommonPath.USER_SIMULATE_COLLECTION,
    breadcrumbName: 'User Simulation Collections',
  },
];
