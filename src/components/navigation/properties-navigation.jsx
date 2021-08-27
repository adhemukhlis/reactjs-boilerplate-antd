import React from 'react';
import { DashboardOutlined, FolderOpenOutlined } from '@ant-design/icons';
export const menu_properties = [
	{
		path: '/dashboard',
		title: 'Dashboard',
		icon: <DashboardOutlined/>
	}, {
		path: '/',
		title: 'Public Pages',
		icon: <FolderOpenOutlined/>,
		children: [
			{
				path: '/login',
				title: 'Login'
			},{
				path: '/form',
				title: 'Form'
			},{
				path: '/charts/network',
				title: 'Network Graph'
			}
		]
	}
];
