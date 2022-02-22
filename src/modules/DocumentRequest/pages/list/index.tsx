import { Col, PageHeader, Row, TablePaginationConfig } from 'antd';
import { CommonPath } from 'commons/base-routes';
import DocumentRequestLayout from 'commons/components/layouts/DocumentRequest';
import TableHeader from 'commons/components/layouts/TableHeader';
import { TypeKeyFilterDocument, TypePagination } from 'commons/type';
import { FilterInput, IDocumentRequest } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import { OrderOfSorter } from 'helpers/string';
import FormSearch from 'modules/DocumentRequest/components/filter-form';
import { useListDocuments } from 'modules/DocumentRequest/hooks/useListDocumnentRequest';
import { useRemoveDocumentRequest } from 'modules/DocumentRequest/hooks/useRemoveDocumentRequest';
import React from 'react';
import DocumentTable from './Table';

const DocumentRequestPage = () => {
  const arrFilter: FilterInput[] = [{ key: TypeKeyFilterDocument.EMAIL, value: '' }];
  const { dataDocuments, loading, paginationTable, updatePaginationAndSorterDocuments, pagination, filterDocuments } =
    useListDocuments();
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const { removeDocument } = useRemoveDocumentRequest();

  React.useEffect(() => {
    filterDocuments([]);
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
  const onDelete = (record: IDocumentRequest) => () => {
    removeDocument({
      id: record.id,
    });
  };
  const onChange = (paginationTable: TablePaginationConfig, __: any, sorter: any) => {
    const order = OrderOfSorter(sorter.order);
    const limit = pagination.limit || TypePagination.DEFAULT_LIMIT;
    const current = paginationTable.current || 1;
    const skip = (current - 1) * limit;
    updatePaginationAndSorterDocuments(
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
      value: i.key === TypeKeyFilterDocument.EMAIL ? value : '',
    }));
    filterDocuments(newFilter);
  };

  const onReset = () => {
    setValue('');
    setDisabled(true);
    filterDocuments([]);
  };
  return (
    <DocumentRequestLayout>
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
            <DocumentTable
              onDelete={onDelete}
              items={dataDocuments}
              loading={loading}
              pagination={paginationTable}
              onChange={onChange}
            />
          </Col>
        </Row>
      </TableHeader>
    </DocumentRequestLayout>
  );
};

export default DocumentRequestPage;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'HOME',
  },
  {
    path: CommonPath.DOCUMENTS_REQUEST,
    breadcrumbName: 'Document Request',
  },
];
