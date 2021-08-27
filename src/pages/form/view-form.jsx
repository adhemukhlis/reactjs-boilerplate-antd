import React, { Component } from 'react';
import dayjs from 'dayjs';
import difference from 'lodash/difference';
import {
	Layout,
	Row,
	Col,
	Form,
	Select,
	Input,
	InputNumber,
	DatePicker,
	Button,
	Checkbox,
	Divider,
	Typography,
	Radio,
	Space,
	Switch,
	Transfer,
	Table,
	Upload,Modal
} from 'antd';
import {
	PreRender,
	PageTitle,
	SelectApi,
	ButtonBack,
	FloatPanel,
	CascadeWilayahApi
} from '@src/components';
import {TableData} from '@src/dummy/data-table-dummy'
import { responsive_size, style_button, style_content } from '@src/style';
import { idrCurrencyFormatter, idrCurrencyParser } from '@src/utility/lib';
import { ArrowRightOutlined,InboxOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
const CheckboxGroup = Checkbox.Group;
const { Paragraph } = Typography;
const { RangePicker } = DatePicker;
const { Dragger } = Upload;
// import { PRIVATE_ROUTE } from '@src/routes/path';
const { TextArea } = Input;
const { Content } = Layout;
const plainOptions = [ 'Apple', 'Pear', 'Orange' ];
const defaultCheckedList = [ 'Apple', 'Orange' ];
class ViewForm extends Component {

	state = {
		loading: false,
		tag: [],
		range_date: [],
		checkedList: defaultCheckedList,
		indeterminate: true,
		checkAll: false,
		address: '',
		selected_transfer_table:[]
	};

	inputHandler = ({ target }) => {
		this.setState({
			[ target.name ]: target.value !== '' ? target.value : undefined
		});
	}
	onSelectChange = ( value ) => {
		const name = Object.keys( value )[ 0 ];
		this.setState({[ name ]: value[name]});
	}
	onDateChange = async( value ) => {
		const name = Object.keys( value )[ 0 ];
		const selectedDate = dayjs(value[name]).format( 'YYYY-MM-DD' );
		this.setState({ [ name ]: selectedDate });
	}
	handleTag = ( value ) => {
		console.log( value );
		const tag = value.map(name => ({ name }));
		this.setState({ tag });
	}
	inputNumberHandler = ( value ) => {
		const name = Object.keys( value )[ 0 ];
		this.setState({[ name ]: value[name]});
	}
	onRangePickerChange = ( dates, dateStrings ) => {
		this.setState({ range_date: dates });
	}


	onCheckChange = list => {
		this.setState({
			checkedList: list,
			indeterminate: !!list.length && list.length < plainOptions.length,
			checkAll: list.length === plainOptions.length
		});

	};

	onCheckAllChange = e => {
		this.setState({
			checkedList: e.target.checked ? plainOptions : [],
			indeterminate: false,
			checkAll: e.target.checked
		});
	};
	onAddressChange = ( value, all ) => {
		this.setState({
			address: all
				.map( s => s.label )
				.join( ', ' )
		});
	};
	onTransferTableChange = nextselected_employee => {
		console.log(nextselected_employee)
		this.setState({ selected_transfer_table: nextselected_employee });
	};
	render( ) {
		const {
			loading,
			range_date,
			checkedList,
			indeterminate,
			checkAll,
			address,
			selected_transfer_table
		} = this.state;
		return (
			<PreRender>
				<PageTitle>Form</PageTitle>
				<Content style={style_content}>
					<Form layout='vertical' size='large'>
						<FloatPanel
							left={( <ButtonBack/> )}
							right={(
							<Button
								loading={loading}
								size='large'
								type='primary'
								onClick={()=>Modal.confirm({
									title: 'Do you Want to submit?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
								  })}
								style={style_button}>
								Submit<ArrowRightOutlined/>
							</Button>
						)}
							offsetTop={0}/>
						<Row gutter={24} style={{
							marginTop: responsive_size
						}}>
							<Col span={12}>
								<Form.Item label='Input Name'>
									<Input
										allowClear
										name='nama_job'
										placeholder='your name'
										onChange={this.inputHandler}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Position'>
									<SelectApi
										disableValueCache
										name={`select-divisi${ 1 }`}
										placeholder='Select Position'
										staticItems={[
										{
											id: 0,
											title: 'Front-end',
											value: 'front-end'
										}, {
											id: 1,
											title: 'Back-end',
											value: 'back-end'
										}
									]}
										onChange={( value ) => this.onSelectChange({ divisi: value })}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Currency IDR'>
									<InputNumber
										size='large'
										style={{
										width: '100%'
									}}
										name='currency'
										formatter={idrCurrencyFormatter}
										parser={idrCurrencyParser}
										onChange={( value ) => this.inputNumberHandler({ gaji: value })}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item name='date' label='Date'>
									<DatePicker
										format='DD MMM YYYY'
										style={{
										width: '100%'
									}}
										placeholder='Select date'
										onSelect={( value ) => this.onDateChange({ expired_date: value })}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24} style={{
							marginBottom: 24
						}}>
							<Col span={12}>
								<RangePicker
									style={{
									width: '100%'
								}}
									size='large'
									format='DD MMM YYYY'
									value={range_date}
									ranges={{
									Today: [
										dayjs( ), dayjs( )
									],
									'This Month': [
										dayjs( ).startOf( 'month' ),
										dayjs( ).endOf( 'month' )
									]
								}}
									onChange={this.onRangePickerChange}/>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<RangePicker
									style={{
									width: '100%'
								}}
									size='large'
									picker="year"/>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Description'>
									<TextArea
										style={{
										width: '100%'
									}}
										autoSize={{
										minRows: 3
									}}
										name='description_field'
										placeholder='Description field'
										onChange={this.inputHandler}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Tags'>
									<Select
										mode='tags'
										style={{
										width: '100%'
									}}
										name='tag'
										placeholder='Tags'
										onChange={this.handleTag}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Address'>
									<CascadeWilayahApi
										size='large'
										onChange={this.onAddressChange}
										placeholder='Set Address'/>
									<Paragraph copyable>{address}</Paragraph>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Fruits'>
									<Checkbox
										indeterminate={indeterminate}
										onChange={this.onCheckAllChange}
										checked={checkAll}>
										Check all
									</Checkbox>
									<Divider/>
									<CheckboxGroup
										options={plainOptions}
										value={checkedList}
										onChange={this.onCheckChange}/>
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Choice'>
									<Radio.Group defaultValue={1}>
										<Space direction="vertical">
											<Radio value={1}>Option A</Radio>
											<Radio value={2}>Option B</Radio>
											<Radio value={3}>Option C</Radio>
										</Space>
									</Radio.Group>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Accept?'>
									<Switch defaultChecked/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Table Transfer'>
									<TableTransfer
										dataSource={TableData.map((user,i)=>({...user,key:i.toString()}))}
										targetKeys={selected_transfer_table}
										showSearch
										onChange={this.onTransferTableChange}
										filterOption={( inputValue, item ) => item.name.indexOf( inputValue ) > -1}
										leftColumns={TableColumns}
										rightColumns={TableColumns}
										titles={[ 'User', 'Selected User' ]}
										
										/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Table Transfer'>
								<Dragger onChange={(info)=>{
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
		console.log(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
		console.log(`${info.file.name} file upload failed.`);
    }
  }} onDrop={(e)=> {
    console.log('Dropped files', e.dataTransfer.files);
  }}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
								</Form.Item>
							</Col>
						</Row>
					
					</Form>
				</Content>
			</PreRender>
		);
	}
}
const TableTransfer = ({
	leftColumns,
	rightColumns,
	...restProps
}) => (
	<Transfer {...restProps} showSelectAll={false}>
		{({
			direction,
			filteredItems,
			onItemSelectAll,
			onItemSelect,
			selectedKeys: listSelectedKeys,
			disabled: listDisabled
		}) => {
			const columns = direction === 'left' ? leftColumns : rightColumns;
			const rowSelection = {
				getCheckboxProps: item => ({
					disabled: listDisabled || item.disabled
				}),
				onSelectAll( selected, selectedRows ) {
					const treeSelectedKeys = selectedRows
						.filter( item => !item.disabled )
						.map( ({ key }) => key );
					const diffKeys = selected ? difference( treeSelectedKeys, listSelectedKeys ) : difference( listSelectedKeys, treeSelectedKeys );
					onItemSelectAll( diffKeys, selected );
				},
				onSelect( {
					key
				}, selected ) {
					onItemSelect( key, selected );
				},
				selectedRowKeys: listSelectedKeys
			};
			return ( <Table
				rowSelection={rowSelection}
				columns={columns}
				dataSource={filteredItems}
				size='large'
				// loading={loading}
				pagination={false}
				scroll={{
				y: 220
			}}
				onRow={({ key }) => ({
				onClick: ( ) => {
					onItemSelect(key, !listSelectedKeys.includes( key ));
				}
			})}/> );
		}}
	</Transfer>
);
const TableColumns = [
	{
		dataIndex: 'name',
		title: 'Name'
	}, {
		dataIndex: 'gender',
		title: 'Gender'
	}
];
export default ViewForm;