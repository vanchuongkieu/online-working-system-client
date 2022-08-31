import {Table as AntdTable} from 'antd';
import {TableProps} from 'antd/lib/table';

type AntTableProps<T = any> = TableProps<T>;

function AntTable({dataSource, columns = [], ...props}: AntTableProps) {
  const newDataSource = dataSource?.map((data, key) => {
    if (data.key) {
      return data;
    }
    return {...data, key};
  });

  const newColumns = [...columns];

  return (
    <AntdTable {...props} columns={newColumns} dataSource={newDataSource} />
  );
}

export default AntTable;
