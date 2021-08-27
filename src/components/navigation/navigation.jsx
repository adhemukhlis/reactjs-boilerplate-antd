import React, { Component, Fragment, memo } from 'react';
import {
	Layout,
	Button,
	Menu,
	Avatar,
	Popover,
	Badge,
	Typography,
	Divider,
	notification
} from 'antd';
import { menu_properties } from './properties-navigation';
import { withRouter } from "react-router-dom";
import Logo from "../../logo.svg";
import Profile from "../../assets/imgs/profile.png";
import { UserOutlined, BellOutlined, MailOutlined, LogoutOutlined, KeyOutlined } from '@ant-design/icons';


import {
	style_full_height,
	style_sidebar_brand_container,
	style_brand_logo,
	style_header_container,
	style_menu_wrapper,
	style_menu
} from '@src/style';
import { Link } from 'react-router-dom';
const { Header, Sider } = Layout;
const { SubMenu, Item } = Menu;
const { Text } = Typography;

class Navigation extends Component {
	// constructor( props ) {
	// 	super( props );
	// 	const { profile_url, nama } = getState( '_userData' );
	// 	this.profile_url = profile_url;
	// 	this.nama = nama;
	// }
	state = {
		// collapsed: getCookie( 'collapse_nav' ) === undefined ? false : getCookie( 'collapse_nav' )
		collapsed: false
	};
	componentDidMount( ) {
		const ava_element = document
			.getElementsByClassName( 'profile-image-menu' )[ 0 ]
			.getElementsByTagName( 'img' );
		if ( ava_element.length > 0 ) {
			ava_element[0].style.objectPosition = '0% 0%';
		}
	}
	onCollapse = collapsed => {
		this.setState({ collapsed });
		// setCookie( 'collapse_nav', collapsed, 7 );
	};
	navigateTo = ( value ) => {
		(this.props.history.push( value.key ));
	}

	render( ) {
		const { collapsed } = this.state;
		const { children } = this.props;
	
		return (
			<Layout style={style_full_height}>
				<SideBar
					collapsed={collapsed}
					onCollapse={this.onCollapse}
					navigateTo={this.navigateTo}
					/>
				<Layout>
					<TopBar nama="mukhlis" profile_url={Profile}/> {children}
				</Layout>
			</Layout>
		);
	}
}
const openNotificationWithIcon = type => {
	notification[type]({
	  message: 'Notification Title',
	  description:
		'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
	});
  };
const TopBar = memo(({ nama, profile_url }) => (
	<Header style={style_header_container}>
		<div style={style_menu_wrapper}>
			<Popover
				placement="bottomRight"
				title={(
				<div className="noselect">Message</div>
			)}
				content={(
				<div className="noselect">content..</div>
			)}
				trigger="click">
				<Badge count={100} className="noselect">
					<Button
						style={style_menu}
						size="large"
						type="default"
						shape="circle"
						icon={( <MailOutlined/> )}/>
				</Badge>
			</Popover>
			<Popover
				placement="bottomRight"
				title={(
				<div className="noselect">Notification</div>
			)}
				content={(
				<div className="noselect"><Button onClick={() => openNotificationWithIcon('info')}>notification +</Button></div>
			)}
				trigger="click">
				<Badge count={100} className="noselect">
					<Button
						size="large"
						type="default"
						shape="circle"
						style={style_menu}
						icon={( <BellOutlined/> )}/>
				</Badge>
			</Popover>
			<Popover
				placement="bottomRight"
				title={(
				<div className="noselect">Account</div>
			)}
				content={(
				<Fragment>
					<div style={{
						display: 'flex',
						flexDirection: 'column'
					}}>
						<Text type="secondary">Signed in as</Text>
						<Text strong>{nama}</Text>
					</div>
					<Divider/>
					<Menu>
						<Item key="0" icon={( <KeyOutlined/> )} className="noselect">
							<Link to='/'>
								Change Password
							</Link>
						</Item>
					</Menu>
					<Menu>
						<Item
							key="1"
							icon={( <LogoutOutlined/> )}
							onClick={()=>console.log('logout!')}
							className="noselect">
							Logout
						</Item>
					</Menu>
				</Fragment>
			)}
				trigger="click">
				<Avatar
					style={style_menu}
					className="profile-image-menu"
					size={40}
					{...profile_url?{src:profile_url}:{icon:(<UserOutlined/>)}}/>
			</Popover>
		</div>
	</Header>
));

const SideBar = memo(({ collapsed, onCollapse, navigateTo, }) => (
	<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
		<div style={style_sidebar_brand_container}>
			<div style={style_brand_logo( Logo )}/>
		</div>
		<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
			{menu_properties.map(menu => {
				const menuItem = menu.children ? (
					<SubMenu
						key={menu.path}
						icon={menu.icon}
						title={menu.title}
						// onTitleClick={navigateTo}
						className="noselect">
						{menu
							.children
							.map(child_menu => {
								return  (
									<Item key={child_menu.path} onClick={navigateTo} className="noselect">{child_menu.title}</Item>
								);
							})}
					</SubMenu>
				) : (
					<Item key={menu.path} icon={menu.icon} onClick={navigateTo} className="noselect">
						{menu.title}
					</Item>
				);
				return menuItem;
			})}
		</Menu>
	</Sider>
));

export default withRouter( Navigation );