import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { responsive_size } from '@src/style';
const TabMenu = memo(({ tabIndex, handleChange, tabProperties }) => (
	<Menu
		className='noselect'
		onClick={handleChange}
		style={{
		marginBottom: responsive_size
	}}
		selectedKeys={[tabIndex.toString( )]}
		mode="horizontal"
		selectable>
		{tabProperties.map(( item, i ) => (
			<Menu.Item key={i}>
				{item.title}
			</Menu.Item>
		))}
	</Menu>
));
TabMenu.propTypes = {
	tabProperties: PropTypes.array,
	handleChange: PropTypes.func,
	tabIndex: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
};
export { TabMenu };