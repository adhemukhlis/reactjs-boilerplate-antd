import React from 'react';
import AntdLogo from '../../assets/imgs/antd-logo.svg';
import { get_responsive } from '../../style';
const ViewHome = ( ) => {
	return (
		<div
			style={{
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			height: '100vh',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#e5e5e5'
		}}>
			<div
				style={{
				backgroundImage: `url(${ AntdLogo })`,
				width: get_responsive( 10 ),
				height: get_responsive( 10 ),
				marginBottom: 48,
				backgroundPosition: 'center',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat'
			}}/>
		</div>
	);
}
export default ViewHome;