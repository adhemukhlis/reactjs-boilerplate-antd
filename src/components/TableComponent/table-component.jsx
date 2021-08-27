import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { ColumnSearchProps, ColumnSorterProps, ColumnFilterProps } from './table-libs';
import ContainerDimensions from 'react-container-dimensions';
const TableComponent = memo(({
	bordered,
	noFixed,
	rowHeight,
	rowKey,
	columns,
	dataSource,
	loading,
	pagination,
	rowSelection,
	rowClassName,
	locale,
	size
}) => {

	const _columns = columns.map(({
		searchOption,
		sortOption,
		filterOption,
		...data
	}) => {
		return ({
			...data,
			...(!!searchOption && {
				...ColumnSearchProps({ dataIndex: data.dataIndex, label: data.title })
			}),
			...(!!sortOption && {
				...ColumnSorterProps({ type: sortOption, dataIndex: data.dataIndex })
			}),
			...(!!filterOption && {
				...ColumnFilterProps({ filters: filterOption, dataIndex: data.dataIndex })
			})
		});
	});
	return (
		<div style={{
			flex: 1
		}}>
			<ContainerDimensions>
				{({ height }) => ( <Table
					{...{ rowKey, columns:_columns, dataSource, loading , pagination, rowSelection, rowClassName, locale, bordered, size}}
					scroll={{
					...!noFixed && {
						x: 1200
					},
					y: height - rowHeight
				}}/> )}
			</ContainerDimensions>
		</div>
	);
});
TableComponent.defaultProps = {
	rowKey: 'id',
	dataSource: [],
	loading: false,
	pagination: false,
	rowHeight: 56,
	noFixed: false
};
TableComponent.propTypes = {
	rowKey: PropTypes.string,
	columns: PropTypes.array,
	dataSource: PropTypes.array,
	loading: PropTypes.bool,
	pagination: PropTypes.bool,
	bordered: PropTypes.bool,
	noFixed: PropTypes.bool,
	rowSelection: PropTypes.object,
	rowClassName: PropTypes.func,
	locale: PropTypes.object,
	rowHeight: PropTypes.number,
	height: PropTypes.number,
	size: PropTypes.oneOf([ 'small', 'middle' ])
};
export { TableComponent };