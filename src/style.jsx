export const get_responsive = ( val ) => {
	return `calc( ${ val * ( window.innerWidth / window.innerHeight ) }vh + ${ val }vw)`;
}
export const get_responsive_px = ( val ) => {
	return ( ( val * window.innerWidth / window.innerHeight ) * window.innerHeight / 100 ) + ( val * window.innerWidth / 100 );
}
export const responsive_size = get_responsive( 0.6 );
export const color_black = {
	color: '#333'
};
export const table_height = ( ) => {
	const clientHeight = document
		.getElementById( 'table-container' )
		.clientHeight;
	const theadHeight = document
		.getElementsByClassName( 'ant-table-thead' )
		.item( 0 )
		.clientHeight;
	return clientHeight - theadHeight;
}
export const style_full_height = {
	minHeight: '100vh'
};
export const cursorPointer = {
	cursor: 'pointer'
};
export const textCenter = {
	textAlign: 'center'
};
export const style_content = {
	margin: responsive_size,
	display: 'flex',
	flex:1,
	flexDirection: 'column',
	overflow: 'hidden',
	padding: responsive_size,
	backgroundColor: '#fff',
	borderRadius: responsive_size
};
export const buttonTopBar = ( marginLeft ) => ({ marginLeft: marginLeft, cursor: 'pointer' });

export const style_top_tab = {
	marginLeft: responsive_size,
	borderRadius: responsive_size
};
export const style_card_float_panel = {
	display: 'flex',
	flexDirection: 'row'
};
export const style_card_menu_container = {
	marginBottom: 48,
	borderRadius: '2em'
};
export const style_card_item_container = {
	borderRadius: '2em'
};
export const style_card_item_body = {
	overflow: 'initial',
	paddingTop:0,
	paddingLeft: get_responsive(1.2),
	paddingRight: get_responsive(1.2),
	paddingBottom: get_responsive(1.2),
	display: 'flex',
	justifyContent: 'center'
};
export const style_card_menu_body = {
	overflow: 'initial',
	padding: get_responsive(1.2),
	display: 'flex',
	alignItems: 'center'
};
export const style_form = {
	marginTop: responsive_size

};
export const style_button = {
	minWidth: get_responsive( 6 )
};
export const style_full_page = {
	width: '100%',
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column'
};
export const style_container = {
	padding: responsive_size,
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	// backgroundColor:'#00f' overflowY: 'scroll', minHeight: '100%'
};
export const style_sidebar_brand_container = {
	backgroundColor: 'rgba(225,225,225,0.06)',
	display: 'flex',
	alignItems: 'center',
	height: 'calc(4.5vh + 3vw)',
	padding: responsive_size
};
export const style_brand_logo = ( logo ) => ({
	backgroundImage: `url(${ logo })`,
	width: '100%',
	height: '36px',
	backgroundPosition: 'center',
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat'
});
export const style_item_image = ( img ) => ({
	backgroundImage: `url(${ img })`,
	width: 140,
	height: 140,
	backgroundPosition: 'center',
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat'
});
export const style_hero_image = ( img ) => ({
	backgroundImage: `url(${ img })`,
	width: 210,
	height: 210,
	margin: responsive_size,
	backgroundPosition: 'center',
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat'
});
export const style_header_container = {
	position: 'absolute',
	display: 'flex',
	flex: '1',
	top: '0',
	right: '0',
	padding: '0',
	background: 'transparent',
	height: 'calc(4.5vh + 3vw)'
};
export const style_menu_wrapper = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: responsive_size
};
export const style_menu = {
	cursor: 'pointer',
	marginLeft: responsive_size
};
export const style_title_container = {
	display: 'flex',
	flexDirection: 'column'
};
export const style_on_flex_end = {
	flex: 1,
	display: 'flex',
	justifyContent: 'flex-end'
};