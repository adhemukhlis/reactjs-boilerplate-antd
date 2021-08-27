import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import dayjs from 'dayjs';
import { SearchOutlined } from '@ant-design/icons';
const display_date_format = 'DD MMM YYYY';
export const ColumnSearchProps = ({ dataIndex, label }) => {
	const [searchedText,
		setSearchedText] = useState( '' );
	const [searchedColumn,
		setSearchedColumn] = useState( '' );
	let searchInput = undefined;
	const handleSearch = ( selectedKeys, confirm, dataIndex ) => {
		confirm( );
		setSearchedText(selectedKeys[0]);
		setSearchedColumn( dataIndex );
	};
	const handleReset = clearFilters => {
		clearFilters( );
		setSearchedText( '' );
	};
	return {
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div style={{
				padding: 8
			}}>
				<Input
					ref={node => {
					searchInput = node;
				}}
					placeholder={`Search ${ label }`}
					value={selectedKeys[0]}
					onChange={e => setSelectedKeys(e.target.value ? [ e.target.value ] : [ ])}
					onPressEnter={( ) => handleSearch( selectedKeys, confirm, dataIndex )}
					style={{
					width: 188,
					marginBottom: 8,
					display: 'block'
				}}/>
				<Space>
					<Button
						type="primary"
						onClick={( ) => handleSearch( selectedKeys, confirm, dataIndex )}
						icon={< SearchOutlined />}
						size="small"
						style={{
						width: 90
					}}>
						Search
					</Button>
					<Button
						onClick={( ) => handleReset( clearFilters )}
						size="small"
						style={{
						width: 90
					}}>
						Reset
					</Button>
				</Space>
			</div>
		),
		filterIcon: filtered => <SearchOutlined style={{
			color: filtered ? '#1890ff' : undefined
		}}/>,
		onFilter: ( value, record ) => record[dataIndex] ? record[dataIndex]
			.toString( )
			.toLowerCase( )
			.includes(value.toLowerCase( )) : '',
		onFilterDropdownVisibleChange: visible => {
			if ( visible ) {
				setTimeout( ( ) => searchInput.select( ), 100 );
			}
		},
		render: text => searchedColumn === dataIndex ? ( <Highlighter
			highlightStyle={{
			backgroundColor: '#ffc069',
			padding: 0
		}}
			searchWords={[ searchedText ]}
			autoEscape
			textToHighlight={text ? text.toString( ) : ''}/> ) : ( text )
	};
};
export const ColumnFilterProps = ({ filters, dataIndex }) => {
	return {
		filters,
		onFilter: ( value, record ) => record[dataIndex].indexOf( value ) === 0
	};
}
export const ColumnSorterProps = ({ dataIndex, type }) => {
	return {
		...type === 'date' ? {
			sorter : ( a, b ) => {
				if (!a[dataIndex]) {
					return -1;
				} else if (!b[dataIndex]) {
					return 1;
				} else {
					return dayjs( a[dataIndex], display_date_format ).unix( ) - dayjs( b[dataIndex], display_date_format ).unix( );
				}
			}
		} : type === 'number' ? {
			sorter : ( a, b ) => {
				if (!a[dataIndex]) {
					return -1;
				} else if (!b[dataIndex]) {
					return 1;
				} else {
					return a[dataIndex] - b[dataIndex];
				}
			}
		} : {
			sorter: ( a, b ) => {
				if (!a[dataIndex]) {
					return -1;
				} else if (!b[dataIndex]) {
					return 1;
				} else {
					return a[dataIndex].localeCompare(b[dataIndex]);
				}
			}
		},
		sortDirections: [ 'descend', 'ascend' ]
	};
}
export const rowSelection = ( _this ) => {
	const { selected_row_keys } = _this.state;
	return {
		selected_row_keys,
		onChange: ( selected_row_keys ) => _this.setState({ selected_row_keys })
	};
};