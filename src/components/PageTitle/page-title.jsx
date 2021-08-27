import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { color_black, responsive_size } from '../../style';
const { Title } = Typography;
const PageTitle = memo(({ children }) => (
	<Title
		className='noselect'
		level={2}
		style={{
		...color_black,
		height: 'calc(4.5vh + 3vw)',
		margin: 0,
		marginLeft: responsive_size,
		display: 'flex',
		alignItems: 'flex-end'
	}}>
		{children}
	</Title>
));
PageTitle.propTypes = {
	children: PropTypes.node.isRequired
};
export { PageTitle };