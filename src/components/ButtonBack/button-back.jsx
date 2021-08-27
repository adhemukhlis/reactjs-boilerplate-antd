import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
const ButtonBack = memo(({
	label,
	icon,
	type,
	style,
	shape,
	size,
	disabled,
	block,
	onBack
}) => (
	<Button {...{style,type,size,icon,shape,block,disabled}} onClick={onBack}>
		{label}
	</Button>
));
ButtonBack.defaultProps = {
	onBack: ( ) => window
		.history
		.back( ),
	label: 'Back',
	type: 'text',
	size: 'large',
	icon: <ArrowLeftOutlined/>
};
ButtonBack.propTypes = {
	onBack: PropTypes.func,
	label: PropTypes.string,
	style: PropTypes.object,
	icon: PropTypes.element,
	type: PropTypes.string,
	shape: PropTypes.string,
	block: PropTypes.bool,
	size: PropTypes.string,
	disabled: PropTypes.bool
};
export { ButtonBack };