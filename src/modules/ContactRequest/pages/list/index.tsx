import { TablePaginationConfig, Row, Col } from 'antd';
import { CommonPath } from 'commons/base-routes';
import ContactRequestLayout from 'commons/components/layouts/ContactRequest';
import PageHeader from 'commons/components/layouts/PageHeader';
import TableHeader from 'commons/components/layouts/TableHeader';
import { TypeKeyFilterRequest, TypePagination } from 'commons/type';
import { FilterInput, IRequest } from 'graphql/generated/graphql';
import { OrderOfSorter } from 'helpers/string';
import { FormSearch } from 'modules/ContactRequest/components/Filter-Form';
import { useListRequests } from 'modules/ContactRequest/hooks/useListRequest';
import { useRemoveRequest } from 'modules/ContactRequest/hooks/useRemoveRequest';
import React from 'react';
import { useNavigate } from 'react-router';
import ContactRequestTable from './Table';

function ContactRequestPage() {
  const { dataRequests, loading, paginationTable, updatePaginationAndSorterRequests, pagination, filterRequests } =
    useListRequests();
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const navigate = useNavigate();
  const { removeRequest } = useRemoveRequest();
  const arrFilter: FilterInput[] = [{ key: TypeKeyFilterRequest.EMAIL, value: '' }];

  React.useEffect(() => {
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  const onDelete = (record: IRequest) => () => {
    removeRequest({
      id: record.id,
    });
  };

  const onEdit = (record: IRequest) => () => {
    navigate('/contact-request/detail/' + record.id);
  };

  const onChange = (paginationTable: TablePaginationConfig, __: any, sorter: any) => {
    const order = OrderOfSorter(sorter.order);
    const limit = pagination.limit || TypePagination.DEFAULT_LIMIT;
    const current = paginationTable.current || 1;
    const skip = (current - 1) * limit;
    updatePaginationAndSorterRequests(
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
      value: i.key === TypeKeyFilterRequest.EMAIL ? value : '',
    }));
    filterRequests(newFilter);
  };

  const onReset = () => {};

  return (
    <ContactRequestLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableHeader title="お問い合わせ一覧">
        <Row justify="center">
          <Col span={23}>
            <FormSearch
              disabled={disabled}
              value={value}
              onChange={onChangeValue}
              handleSearch={handleSearch}
              onReset={onReset}
            />
            <Col span={23}></Col>
            <ContactRequestTable
              onDelete={onDelete}
              onEdit={onEdit}
              items={dataRequests}
              loading={loading}
              pagination={paginationTable}
              onChange={onChange}
            />
          </Col>
        </Row>
      </TableHeader>
    </ContactRequestLayout>
  );
}

export default ContactRequestPage;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'HOME',
  },
  {
    path: CommonPath.CONTACT_REQUEST,
    breadcrumbName: 'お問い合わせ一覧',
  },
];
