// import { RabbitLegacy, enc } from "crypto-js";
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
export const client_crypto_auth = "wmYrmtXFHYQnmZr6d5BQQm7ZQWVtJvJ6";
export const getPathWithoutParam = ( path ) => path.split( ':' )[ 0 ];
export const getPathKebabCase = ( path ) => path.replace( /\//g, '-' );
// export const ENCRYPT_DATA = ( DataString, Password ) => {
// 	return RabbitLegacy.encrypt( DataString.toString( ), Password ).toString( );
// }
// export const DECRYPT_DATA = ( Encrypt, Password ) => {
// 	return RabbitLegacy
// 		.decrypt( Encrypt, Password )
// 		.toString( enc.Utf8 );
// }
export const setCookie = ( cname, cvalue, exdays ) => {
	const d = new Date( );
	d.setTime(d.getTime( ) + ( exdays * 24 * 60 * 60 * 1000 ));
	const expires = `expires=${ d.toUTCString( ) }`;
	document.cookie = `${ cname }=${ cvalue };${ expires };path=/`;
}
export const getCookie = ( cname ) => {
	const name = cname + "=";
	const decodedCookie = decodeURIComponent( document.cookie );
	const ca = decodedCookie.split( ';' );
	for ( let i = 0; i < ca.length; i += 1 ) {
		let c = ca[i];
		while ( c.charAt( 0 ) === ' ' ) {
			c = c.substring( 1 );
		}
		if ( c.indexOf( name ) === 0 ) {
			const value = c.substring( name.length, c.length );
			return value === 'true' ? true : value === 'false' ? false : value === '' ? undefined : value;
		}
	}
	return "";
}
export const getSession = ( header ) => {
	return JSON.parse(window.sessionStorage.getItem( header ));
}
export const setSession = ( header, value ) => {
	return window
		.sessionStorage
		.setItem(header, JSON.stringify( value ));
}
export const delSession = ( header ) => {
	return window
		.sessionStorage
		.removeItem( header );
}
export const clearSession = ( ) => {
	return window
		.sessionStorage
		.clear( );
}
export const DisableReactDevTools = ( flag ) => {
	if ( typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object" && flag ) {
		for (let [key,
			value]of Object.entries( window.__REACT_DEVTOOLS_GLOBAL_HOOK__ )) {
			window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == "function" ? ( ) => {} : null;
		}
	}
}
export const greeterWord = ( name ) => {
	const currentHour = dayjs(new Date( )).format( "HH" );
	const text = `Good ${ currentHour >= 3 && currentHour < 12 ? 'Morning' : currentHour >= 12 && currentHour < 15 ? 'Afternoon' : currentHour >= 15 && currentHour < 20 ? 'Evening' : currentHour >= 20 || currentHour < 3 ? 'Night' : '' }, ${ name ? name : 'Sir' }!`;
	return text;
}
export const greeter_word = ( name ) => greeterWord( name );
export const now_long_date = ( ) => `it's ${ dayjs(new Date( )).format( "dddd, DD MMMM YYYY" ) }`;
export const idrCurrencyFormatter = ( val ) => {
	return val === undefined || val === '' ? 'Rp -' : new Intl
		.NumberFormat("id", {
		style: "currency",
		currency: 'IDR'
	})
		.format( val )
		.replace( /(\.|,)00$/g, '' );
}
export const idrCurrencyParser = ( val ) => {
	try {
		if ( typeof val === "string" && !val.length ) {
			val = "0.0";
		}
		const group = new Intl
			.NumberFormat( 'id' )
			.format( 1111 )
			.replace( /1/g, "" );
		const decimal = new Intl
			.NumberFormat( 'id' )
			.format( 1.1 )
			.replace( /1/g, "" );
		var reversedVal = val.replace( new RegExp( "\\" + group, "g" ), "" );
		reversedVal = reversedVal.replace( new RegExp( "\\" + decimal, "g" ), "." );
		reversedVal = reversedVal.replace( /[^0-9.]/g, "" );
		const digitsAfterDecimalCount = ( reversedVal.split( "." )[ 1 ] || [ ]).length;
		const needsDigitsAppended = digitsAfterDecimalCount > 2;
		if ( needsDigitsAppended ) {
			reversedVal = reversedVal * Math.pow( 10, digitsAfterDecimalCount - 2 );
		}
		return Number.isNaN( reversedVal ) ? 0 : reversedVal;
	} catch ( error ) {
		console.error( error );
	}
};
export const isLocalhost = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match( /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/ ));
export const isJsonString = ( str ) => {
	try {
		const parsing_test = JSON.parse( str );
		if ( typeof parsing_test === 'number' ) {
			return false;
		} else if ( typeof parsing_test === 'boolean' ) {
			return false;
		}
	} catch ( e ) {
		return false;
	}
	return true;
}
const promiseAll = async({ funcList }) => await Promise.all( funcList );
promiseAll.propTypes = {
	funcList: PropTypes.array
};
export { promiseAll };
