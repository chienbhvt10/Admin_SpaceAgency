import { Col, Row, TablePaginationConfig } from 'antd';
import { CommonPath } from 'commons/base-routes';
import AppointmentRequestLayout from 'commons/components/layouts/AppointmentRequest';
import PageHeader from 'commons/components/layouts/PageHeader';
import TableHeader from 'commons/components/layouts/TableHeader';
import { TypeKeyFilterAppointment, TypePagination } from 'commons/type';
import { FilterInput, IAppointmentRequest } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
import FormSearch from 'modules/AppointmentRequest/components/filter-form';
import { useListAppointments } from 'modules/AppointmentRequest/hooks/useListAppointmentRequest';
import { useRemoveAppointmentRequest } from 'modules/AppointmentRequest/hooks/useRemoveAppointmentRequest';
import React from 'react';
import AppointmentTable from './Table';

const AppointmentRequestPage = () => {
  const {
    dataAppointments,
    loading,
    paginationTable,
    updatePaginationAndSorterAppointments,
    pagination,
    filterAppointments,
  } = useListAppointments();
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const { removeAppointment } = useRemoveAppointmentRequest();
  const arrFilter: FilterInput[] = [{ key: TypeKeyFilterAppointment.EMAIL, value: '' }];

  React.useEffect(() => {
    filterAppointments([]);
    setTitle('Appointment Request');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  const onDelete = (record: IAppointmentRequest) => () => {
    removeAppointment({
      id: record.id,
    });
  };
  const onChange = (paginationTable: TablePaginationConfig, __: any, sorter: any) => {
    const order = OrderOfSorter(sorter.order);
    const limit = pagination.limit || TypePagination.DEFAULT_LIMIT;
    const current = paginationTable.current || 1;
    const skip = (current - 1) * limit;
    updatePaginationAndSorterAppointments(
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
  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    const newFilter = arrFilter.map((i) => ({
      ...i,
      value: i.key === TypeKeyFilterAppointment.EMAIL ? value : '',
    }));
    filterAppointments(newFilter);
  };

  const onReset = () => {
    setValue('');
    setDisabled(true);
    filterAppointments([]);
  };
  return (
    <AppointmentRequestLayout>
      <PageHeader title="" breadcrumb={{ routes }} />

      <TableHeader title="Appointment Request">
        <Row justify="center">
          <Col span={23}>
            <FormSearch
              disabled={disabled}
              value={value}
              onChange={onChangeValue}
              handleSearch={handleSearch}
              onReset={onReset}
            />
          </Col>
          <Col span={23}>
            <AppointmentTable
              onDelete={onDelete}
              items={dataAppointments}
              loading={loading}
              pagination={paginationTable}
              onChange={onChange}
            />
          </Col>
        </Row>
      </TableHeader>
    </AppointmentRequestLayout>
  );
};

export default AppointmentRequestPage;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'HOME',
  },
  {
    path: CommonPath.APPOINTMENTS_REQUEST,
    breadcrumbName: 'Appointment Request',
  },
];
