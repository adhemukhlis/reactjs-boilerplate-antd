import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(( <App/> ), document.getElementById( 'root' ));

serviceWorker.unregister({
	onUpdate: registration => {
		if ( registration && registration.waiting ) {
			registration
				.waiting
				.postMessage({ type: 'SKIP_WAITING' });
			registration
				.waiting
				.addEventListener('statechange', e => {
					if ( e.target.state === 'activated' ) {
						window
							.location
							.reload( true );
					}
				});
		}
	}
});
