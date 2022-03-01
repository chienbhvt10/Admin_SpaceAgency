import { TablePaginationConfig, Row, Col } from 'antd';
import { CommonPath } from 'commons/base-routes';
import RequestLayout from 'commons/components/layouts/Request';
import PageHeader from 'commons/components/layouts/PageHeader';
import TableHeader from 'commons/components/layouts/TableHeader';
import { TypeKeyFilterRequest, TypePagination } from 'commons/type';
import { FilterInput, IRequest } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
import { FormSearch } from 'modules/Request/components/Filter-Form';
import { useListRequests } from 'modules/Request/hooks/useListRequest';
import { useRemoveRequest } from 'modules/Request/hooks/useRemoveRequest';
import React from 'react';
import { useNavigate } from 'react-router';
import RequestTable from './Table';

function RequestPage() {
  const { dataRequests, loading, paginationTable, updatePaginationAndSorterRequests, pagination, filterRequests } =
    useListRequests();
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const navigate = useNavigate();
  const { removeRequest } = useRemoveRequest();
  const arrFilter: FilterInput[] = [{ key: TypeKeyFilterRequest.EMAIL, value: '' }];

  React.useEffect(() => {
    filterRequests([]);
    setTitle('問い合わせ一覧');
  }, []);
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

  const onReset = () => {
    setValue('');
    setDisabled(true);
    filterRequests([]);
  };

  return (
    <RequestLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableHeader title="問い合わせ一覧">
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
            <RequestTable
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
    </RequestLayout>
  );
}

export default RequestPage;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'Home',
  },
  {
    path: CommonPath.CONTACT_REQUEST,
    breadcrumbName: '問い合わせ一覧',
  },
];
