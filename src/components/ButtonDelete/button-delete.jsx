import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ModalDeleteConfirmation } from '@src/components';
const ButtonDelete = memo(({
	onConfirmClick,
	onCancelClick,
	style,
	icon,
	label,
	size,
	disabled,
	type,
	message,
	item
}) => (
	<Tooltip title='click to confirmation delete'>
		<Button
			{...{disabled,icon,size,style,type}}
			danger
			onClick={( ) => ModalDeleteConfirmation({ onConfirmClick, onCancelClick,message,item })}>
			{label}
		</Button>
	</Tooltip>
));
ButtonDelete.defaultProps = {
	onConfirmClick: ( ) => console.log( 'Delete Confirmed!' ),
	onCancelClick: ( ) => console.log( 'Delete Canceled!' ),
	message: `make sure the selected data is correct, the data will be deleted permanently if you click Delete button below!`,
	label: 'Delete',
	size: 'large',
	icon: <DeleteOutlined/>,
	type: 'primary'
};
ButtonDelete.propTypes = {
	onConfirmClick: PropTypes.func,
	onCancelClick: PropTypes.func,
	label: PropTypes.string,
	style: PropTypes.object,
	message: PropTypes.string,
	icon: PropTypes.element,
	size: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	item:PropTypes.string
};
export { ButtonDelete };