import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Button, Dropdown } from 'antd';
import { MoreOutlined, FileSearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { ModalDeleteConfirmation } from '../ModalDeleteConfirmation';
const ButtonDetailDelete = memo(({ onDelete, to, message, item }) => (
	<Dropdown
		trigger={[ 'click' ]}
		placement="bottomRight"
		overlay={(
		<Menu>
			<Menu.Item key="1" icon={( <FileSearchOutlined/> )}>
				<Link to={to}>Details</Link>
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
ButtonDetailDelete.defaultProps = {
	onDelete: ( ) => console.log( 'rejected!' ),
	message: `make sure the selected data is correct, the data will be deleted permanently if you click Delete button below!`
};
ButtonDetailDelete.propTypes = {
	to: PropTypes.string,
	onDelete: PropTypes.func,
	message: PropTypes.string,
	item: PropTypes.string
};
export { ButtonDetailDelete };