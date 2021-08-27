import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'antd';
const StatusBadge = memo(({ status }) => ( <Badge
	status={status === 0 ? 'error' : status === 1 ? 'success' : status === 2 ? 'processing' : null}
	text={status === 0 ? 'Rejected' : status === 1 ? 'Accepted' : status === 2 ? 'Pending' : null}/> ));
StatusBadge.propTypes = {
	status: PropTypes
		.PropTypes
		.oneOf([ 0, 1, 2 ])
		.isRequired
};
export { StatusBadge };