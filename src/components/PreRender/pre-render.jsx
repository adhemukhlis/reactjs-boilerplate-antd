import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import View403 from '@src/pages/403/view-403';
import View404 from '@src/pages/404/view-404';
import View500 from '@src/pages/500/view-500';
import Loading from '@src/utility/loader';
const PreRender = memo(({ children, isAllow, isNoData, isError, isLoading }) => ( isLoading ? <Loading/> : isError ? <View500/> : isAllow ? isNoData ? <View404/> : <Layout>{children}</Layout> : <View403/>));
PreRender.defaultProps = {
	isAllow: true,
	isNoData: false,
	isError: false,
	isLoading: false
};
PreRender.propTypes = {
	isAllow: PropTypes.bool,
	isNoData: PropTypes.bool,
	isError: PropTypes.bool,
	isLoading: PropTypes.bool,
	children: PropTypes.node.isRequired
};
export { PreRender };