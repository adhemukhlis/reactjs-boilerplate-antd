import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Alert, Typography } from 'antd';
import { ArrowLeftOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { responsive_size } from '@root/src/style';
const { Text } = Typography;
const ModalDeleteConfirmation = ({ message, item, onConfirmClick, onCancelClick }) => Modal.confirm({
	title: 'Confirmation', icon: <ExclamationCircleOutlined/>,
	maskClosable: true,
	content: (
		<Fragment>
			<Alert
				style={{
				marginBottom: responsive_size
			}}
				message={message}
				type='warning'
				showIcon/>
			<p>
				{!!item ? (
					<Fragment>{`Are you sure to delete `}
						<Text mark>{item}</Text>
						{` ?`}</Fragment>
				) : `Are you sure to delete?`}
			</p>
		</Fragment>
	),
	width: 480,
	okButtonProps: {
		danger: true,
		icon: <DeleteOutlined/>
	},
	cancelButtonProps: {
		type: 'text',
		icon: <ArrowLeftOutlined/>
	},
	okText: 'Delete',
	cancelText: 'Cancel',
	onOk: onConfirmClick,
	onCancel: onCancelClick
});
ModalDeleteConfirmation.defaultProps = {
	onConfirmClick: ( ) => console.log( 'Delete Confirmed!' ),
	onCancelClick: ( ) => console.log( 'Delete Canceled!' )
};
ModalDeleteConfirmation.propTypes = {
	onConfirmClick: PropTypes.func,
	onCancelClick: PropTypes.func,
	message: PropTypes.string,
	item: PropTypes.string
};
export { ModalDeleteConfirmation };