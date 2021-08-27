import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
	Menu,
	Button,
	Modal,
	Typography,
	Alert,
	Dropdown
} from 'antd';
import { MoreOutlined, CheckOutlined, CloseOutlined  } from '@ant-design/icons';
const { Title } = Typography;
const ButtonAcceptReject = memo(({ onAccept, onReject, message, item }) => (
	<Dropdown
		trigger={[ 'click' ]}
		placement="bottomRight"
		overlay={(
		<Menu>
			<Menu.Item
				key="1"
				icon={( <CheckOutlined/> )}
				onClick={async( ) => Modal.confirm({
				title: (
					<Title level={3}>Accept Confirmation</Title>
				),
				content: ( <Alert message="Are you sure to Accept?" type="warning"/> ),
				width: 480,
				maskClosable: true,
				cancelText: 'Cancel',
				okText: 'Accept',
				onOk: onAccept
			})}>
				Accept
			</Menu.Item>
			<Menu.Item
				key="2"
				icon={( <CloseOutlined /> )}
				danger
				onClick={async( ) => Modal.confirm({
					title: (
						<Title level={3}>Reject Confirmation</Title>
					),
					content: ( <Alert message="Are you sure to Reject?" type="warning"/> ),
					width: 480,
					maskClosable: true,
					cancelText: 'Cancel',
					okText: 'Reject',
					onOk: onReject
				})}>
				Reject
			</Menu.Item>
		</Menu>
	)}>
		<Button>
			<MoreOutlined/>
			action
		</Button>
	</Dropdown>
));
ButtonAcceptReject.defaultProps = {
	onAccept: ( ) => console.log( 'accepted!' ),
	onReject: ( ) => console.log( 'rejected!' ),
	message: `make sure the selected data is correct, the data will be deleted permanently if you click Delete button below!`
};
ButtonAcceptReject.propTypes = {
	onAccept: PropTypes.func,
	onReject: PropTypes.func,
	message: PropTypes.string,
	item: PropTypes.string
};
export { ButtonAcceptReject };