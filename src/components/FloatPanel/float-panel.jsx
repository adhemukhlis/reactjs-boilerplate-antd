import React, { memo } from 'react';
import { Affix, Card, Space } from 'antd';
import PropTypes from 'prop-types';
import { responsive_size } from '@src/style';
const FloatPanel = memo(({ style, offsetTop, offsetBottom, left, right }) => (
	<Affix
		offsetTop={offsetTop}
		offsetBottom={offsetBottom}
		onChange={affixed => {
		affixed ? document
			.getElementById( 'affix-form-control-button' )
			.style
			.boxShadow = '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px ' +
				'4px rgba(0, 0, 0, 0.09)' : document
			.getElementById( 'affix-form-control-button' )
			.style
			.boxShadow = null;
	}}>
		<Card
			id="affix-form-control-button"
			bodyStyle={{
			padding: responsive_size
		}}>
			<div style={{
				...style,
				display: 'flex'
			}}>{(left && (
					<div style={{
						display: 'flex',
						flexDirection: 'row'
					}}>
						<Space>{left}</Space>
					</div>
				))} {(right && (
					<div
						style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-end',
						flex: 1
					}}>
						<Space>{right}</Space>
					</div>
				))}
			</div>
		</Card>
	</Affix>
));
FloatPanel.propTypes = {
	style: PropTypes.object,
	offsetTop: PropTypes.number,
	offsetBottom: PropTypes.number,
	left: PropTypes.element,
	right: PropTypes.element
};
export { FloatPanel };