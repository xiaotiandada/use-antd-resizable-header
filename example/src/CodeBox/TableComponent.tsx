import React, { useMemo } from 'react'
import { Table } from 'antd'
import useATRH from '@minko-fe/use-antd-resizable-header'
import '@minko-fe/use-antd-resizable-header/dist/style.css'

interface IProps {
  columns: any[]
  dataSource: any[]
}
const TableComponent: React.FC<IProps> = (props) => {
  const { components, resizableColumns, tableWidth } = useATRH({
    columns: useMemo(() => props.columns, [props.columns]),
    minConstraints: 70,
    defaultWidth: 222,
    columnsState: {
      persistenceType: 'localStorage',
      persistenceKey: 'localColumns',
    },
  })

  return (
    <div style={{ width: 500 }}>
      <Table
        columns={resizableColumns}
        components={components}
        dataSource={props.dataSource}
        scroll={{ x: tableWidth }}
      />
    </div>
  )
}

// eslint-disable-next-line no-restricted-syntax
export default TableComponent
