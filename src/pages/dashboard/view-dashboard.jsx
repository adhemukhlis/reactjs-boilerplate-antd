import React from 'react';
import { Layout, Button } from 'antd';
import { DisplayDate, distinctArray } from '../../utility/utility';
import { TableComponent,PageTitle,TablePanel,ButtonEditDelete } from '../../components';
import { style_content } from '../../style';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import {TableData} from '@src/dummy/data-table-dummy'
const { Content } = Layout;
const ViewDashboard = ( ) => {
	const age_array = TableData.filter( obj => obj.age !== undefined && obj.age !== null && obj.age !== '' && typeof( obj.age ) !== 'boolean' ).map( obj => obj.age );
	const age_array_distinct = distinctArray( age_array ).sort( );
	const column_data = [
		{
			title: 'No.',
			dataIndex: 'no',
			align: 'center',
			render: ( value, row, index ) => index + 1,
			width: '6%'
		}, {
			title: 'Name',
			dataIndex: 'name',
			searchOption: true
		}, {
			title: 'Email',
			dataIndex: 'email'
		}, {
			title: 'Age',
			dataIndex: 'age',
			sortOption: 'number',
			filterOption: age_array_distinct.map(value => ({ value, text: value }))
		}, {
			title: 'Join Date',
			dataIndex: 'joinDate',
			sortOption: 'date',
			render: date => DisplayDate( date )
		}, {
			title: <SettingOutlined/>,
			align: 'center',
			width: '10%',
			render: ({ id, nama_training_category, divisi_name }) => ( <ButtonEditDelete
				item={nama_training_category}
				onDelete={( ) => {}}
				onEdit={( ) => {}}/> )
		}
	];
	return (
		<div style={{
			display: 'flex',
			flex: 1,
			flexDirection: 'column'
		}}>
			<PageTitle>Dashboard</PageTitle>
			<Content style={style_content}>
				<TablePanel left={( <ButtonAdd onClick={( ) => {}}/> )}/>
				<TableComponent
					rowKey='id'
					noFixed
					rowHeight={56}
					columns={column_data}
					dataSource={TableData}
					loading={false}/>
			</Content>
		</div>
	);
}

const ButtonAdd = ({ onClick }) => (
	<Button size='large' onClick={onClick} type='default' icon={< PlusOutlined />}>
		Add
	</Button>
);
export default ViewDashboard;