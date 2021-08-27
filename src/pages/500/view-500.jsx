import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { style_full_page } from '@src/style';
class View500 extends Component {
	render( ) {
		return (
			<div style={style_full_page}>
				<Result
					status='500'
					title='500'
					subTitle='Sorry, something went wrong.'
					extra={(
					<Button
						size='large'
						type='primary'
						shape='round'
						icon={< ReloadOutlined />}
						onClick={( ) => {
						window
							.location
							.reload( );
					}}>Muat Ulang</Button>
				)}/>
			</div>
		);
	}
}
export default View500;