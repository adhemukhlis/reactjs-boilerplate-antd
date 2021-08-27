import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { style_full_page } from '@src/style';
class View403 extends Component {
	render( ) {
		return (
			<div style={style_full_page}>
				<Result
					status='403'
					title='403'
					subTitle='Sorry, you are not authorized to access this page.'
					extra={(
					<Button
						size='large'
						type='primary'
						shape='round'
						icon={( <ArrowLeftOutlined/> )}
						onClick={( ) => {
						this
							.props
							.history
							.push( '/dashboard' );
					}}>Go to Dashboard</Button>
				)}/>
			</div>
		);
	}
}
export default withRouter( View403 );