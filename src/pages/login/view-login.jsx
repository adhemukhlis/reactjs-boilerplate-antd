import React from 'react';
import {
	Form,
	Input,
	Button,
	Checkbox,
	Card,
	Typography
} from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import Logo from '../../logo.svg';
import { get_responsive, responsive_size } from '../../style';
const { Title } = Typography;
const ViewSignIn = ( ) => {
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
				backgroundImage: `url(${ Logo })`,
				width: get_responsive( 10 ),
				height: 120,
				marginBottom: 48,
				backgroundPosition: 'center',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat'
			}}/>
			<Card
				hoverable
				style={{
				width: get_responsive( 16 ),
				borderRadius: responsive_size
			}}>
				<Title
					level={1}
					style={{
					color: '#333',
					marginBottom: responsive_size
				}}>
					Login
				</Title>
				<Form
					onFinish={( ) => console.log( 'auth!' )}
					name='normal_login'
					size='large'
					className='login-form'
					initialValues={{
					remember: false
				}}>
					<Form.Item
						name='email'
						rules={[{
							required: true,
							type: 'email',
							message: 'Please input your Email!'
						}
					]}>
						<Input size='large' prefix={( <MailOutlined/> )} placeholder='Email'/>
					</Form.Item>
					<Form.Item
						name='password'
						rules={[{
							required: true,
							message: 'Please input your Password!'
						}
					]}>
						<Input.Password
							size='large'
							prefix={( <LockOutlined/> )}
							placeholder='Password'/>
					</Form.Item>
					<Form.Item>
						<Form.Item name='remember' valuePropName={'checked'} noStyle>
							<Checkbox>
								remember me</Checkbox>
						</Form.Item>
					</Form.Item>
					<Form.Item style={{
						marginBottom: 0
					}}>
						<Button
							type='primary'
							size='large'
							shape='round'
							htmlType='submit'
							loading={false}
							style={{
							width: '100%'
						}}>
							Login
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
}
export default ViewSignIn;