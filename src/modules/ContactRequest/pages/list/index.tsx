import { Button, TablePaginationConfig } from 'antd';
import { CommonPath } from 'commons/base-routes';
import ContactRequestLayout from 'commons/components/layouts/ContactRequest';
import PageHeader from 'commons/components/layouts/PageHeader';
import TableHeader from 'commons/components/layouts/TableHeader';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import ContactRequestTable from './Table';
import { FilterInput, IRequest } from 'graphql/generated/graphql';
import { useListRequests } from 'modules/ContactRequest/hooks/useListRequest/useListRequest';
import { OrderOfSorter } from 'helpers/string';
import { TypeKeyFilterRequest, TypePagination } from 'commons/type';
import { FormSearch } from 'modules/ContactRequest/components/Filter-Form';

function ContactRequestPage() {
  const { dataRequests, loading, paginationTable, updatePaginationAndSorterRequests, pagination, filterRequests } =
    useListRequests();
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const arrFilter: FilterInput[] = [{ key: TypeKeyFilterRequest.EMAIL, value: '' }];

  React.useEffect(() => {
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);
  const onNew = () => {};

  const onDelete = (record: IRequest) => () => {};

  const onEdit = (record: IRequest) => () => {};

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
      <TableHeader
        title="Contact Request Collections"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={onNew}>
            Request
          </Button>
        }
      >
        <FormSearch
          disabled={disabled}
          value={value}
          onChange={onChangeValue}
          handleSearch={handleSearch}
          onReset={onReset}
        />
        <ContactRequestTable
          onDelete={onDelete}
          onEdit={onEdit}
          items={dataRequests}
          loading={loading}
          pagination={paginationTable}
          onChange={onChange}
        />
      </TableHeader>
    </ContactRequestLayout>
  );
}

export default ContactRequestPage;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'Home',
  },
  {
    path: CommonPath.CONTACT_REQUEST,
    breadcrumbName: 'Contact Request Collections',
  },
];
