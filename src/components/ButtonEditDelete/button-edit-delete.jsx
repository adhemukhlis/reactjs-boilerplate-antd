import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Menu, Button, Dropdown } from 'antd';
import { MoreOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ModalDeleteConfirmation } from '../ModalDeleteConfirmation';
const ButtonEditDelete = memo(({ onEdit, onDelete, message, item }) => (
	<Dropdown
		trigger={[ 'click' ]}
		placement="bottomRight"
		overlay={(
		<Menu>
			<Menu.Item key="1" icon={( <EditOutlined/> )} onClick={onEdit}>
				Edit
			</Menu.Item>
			<Menu.Item
				key="2"
				icon={( <DeleteOutlined/> )}
				danger
				onClick={( ) => ModalDeleteConfirmation({ onConfirmClick: onDelete, message, item })}>
				Delete
			</Menu.Item>
		</Menu>
	)}>
		<Button type='text' icon={( <MoreOutlined/> )}>
			more
		</Button>
	</Dropdown>
));
ButtonEditDelete.defaultProps = {
	onEdit: ( ) => console.log( 'edited!' ),
	onDelete: ( ) => console.log( 'deleted!' ),
	message: `make sure the selected data is correct, the data will be deleted permanently if you click Delete button below!`
};
ButtonEditDelete.propTypes = {
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
	message: PropTypes.string,
	item: PropTypes.string
};
export { ButtonEditDelete };