import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { style_full_page } from '@src/style';
class View404 extends Component {
	render( ) {
		return (
			<div style={style_full_page}>
				<Result
					status='404'
					title='404'
					subTitle='Sorry, the page you visited does not exist.'
					extra={(
					<Button
						size='large'
						type='primary'
						shape='round'
						icon={( <ArrowLeftOutlined/> )}
						onClick={( ) => {
						window
							.history
							.back( );
					}}>Go Back</Button>
				)}/>
			</div>
		);
	}
}
export default View404;