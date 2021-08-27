import React, { lazy, Suspense } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Navigation from '@src/components/navigation';
import Loader from '@src/utility/loader';
const ViewHome = lazy(( ) => import ( '@src/pages/home/view-home' ));
const ViewDashboard = lazy(( ) => import ( '@src/pages/dashboard/view-dashboard' ));
const ViewLogin = lazy(( ) => import ( '@src/pages/login/view-login' ));
const ViewForm = lazy(( ) => import ( '@src/pages/form/view-form' ));
const ViewChartNetwork = lazy(( ) => import ( '@src/pages/charts/network-chart' ));
function App( ) {
	return (
		<Suspense fallback={( <Loader/> )}>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Navigation>
							<ViewHome/>
						</Navigation>
					</Route>
					<Route exact path='/login'>
						<ViewLogin/>
					</Route>
					<Route exact path='/dashboard'>
						<Navigation>
							<ViewDashboard/>
						</Navigation>
					</Route>
					<Route exact path='/form'>
						<Navigation>
							<ViewForm/>
						</Navigation>
					</Route>
					<Route exact path='/charts/network'>
						<Navigation>
							<ViewChartNetwork/>
						</Navigation>
					</Route>
				</Switch>
			</Router>
		</Suspense>

	);
}

export default App;
