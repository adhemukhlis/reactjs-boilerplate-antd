import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
const ButtonLink = memo(({
	to,
	label,
	style,
	icon,
	type,
	shape,
	block,
	size,
	disabled,
	children
}) => (
	<Link to={to}>
		<Button {...{block,style,icon,type,size,shape,disabled}}>
			{label|| children}
		</Button>
	</Link>
));
ButtonLink.defaultProps = {
	type: 'default',
	size: 'large'
};
ButtonLink.propTypes = {
	to: PropTypes.string.isRequired,
	label: PropTypes.string,
	style: PropTypes.object,
	icon: PropTypes.element,
	type: PropTypes.string,
	shape: PropTypes.string,
	block: PropTypes.bool,
	size: PropTypes.string,
	disabled: PropTypes.bool
};
export { ButtonLink };