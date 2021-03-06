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
import { useRemoveSimulation } from '../../hooks/useRemoveSimulation';

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
  const [userId, setUserId] = React.useState<string>('');

  const [disabled, setDisabled] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const { removeSimulation } = useRemoveSimulation();
  const arrFilter: FilterInput[] = [
    { key: TypeKeyFilterUserSimulation.NAME, value: '' },
    { key: TypeKeyFilterUserSimulation.STYLE, value: '' },
    { key: TypeKeyFilterUserSimulation.THEME, value: '' },
    { key: TypeKeyFilterUserSimulation.CUSTOMER, value: '' },
  ];

  React.useEffect(() => {
    filterSimulations([]);
    setTitle('ユーザーのシミュレーション一覧');
  }, []);

  React.useEffect(() => {
    if (value || themeId || styleId || userId) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [themeId, styleId, value, userId]);

  const onDelete = (record: ISimulation) => () => {
    removeSimulation({
      id: record.id,
    });
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

  const onChangeUser = (value: string) => {
    setUserId(value);
  };
  const onReset = () => {
    setValue('');
    setDisabled(true);
    filterSimulations([]);
  };

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
          : i.key === TypeKeyFilterUserSimulation.CUSTOMER
          ? userId
          : '',
    }));
    filterSimulations(newFilter);
  };
  return (
    <CustomerSimulationLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableHeader title="ユーザーのシミュレーション一覧">
        <Row justify="center">
          {/* <Col span={23}>
            <FilterForm
              onChangeTheme={onChangeTheme}
              value={value}
              handleSearch={handleSearch}
              onChangeValue={onChangeValue}
              onReset={onReset}
              disabled={disabled}
              onChangeStyle={onChangeStyle}
              onChangeUser={onChangeUser}
            />
          </Col> */}
          <Col span={23}>
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
    breadcrumbName: 'ユーザーのシミュレーション一覧',
  },
];
