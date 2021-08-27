import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Space } from 'antd';
import { get_responsive_px, responsive_size } from '../../style';
const TablePanel = memo(({ style, left, right }) => (
	<div
		style={{
		...style,
		display: 'flex',
		marginBottom: responsive_size
	}}>{(left && (
			<div style={{
				display: 'flex',
				flexDirection: 'row'
			}}>
				<Space size={get_responsive_px( 0.6 )}>{left}</Space>
			</div>
		))} {(right && (
			<div
				style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-end',
				flex: 1
			}}>
				<Space size={get_responsive_px( 0.6 )}>{right}</Space>
			</div>
		))}
	</div>
));
TablePanel.propTypes = {
	style: PropTypes.object,
	left: PropTypes.node,
	right: PropTypes.node
};
export { TablePanel };