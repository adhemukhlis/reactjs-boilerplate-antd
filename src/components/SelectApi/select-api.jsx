import React, { Component } from 'react';
import { Select } from 'antd';
import { setState,state } from 'react-rest-state';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { get_responsive } from '@root/src/style';
import { isJsonString } from '@src/utility/lib';
const { Option } = Select;
class SelectApi extends Component {
	constructor( props ) {
		super( props );
		const getSelectValue = state[`select-api-value-${ props.name }`] ;
		console.log(Array.isArray( props.staticItems ));
		this.state = {
			loading: false,
			options: Array.isArray( props.staticItems ) ? props.staticItems : [],
			value: typeof getSelectValue === 'object' ? JSON.stringify( getSelectValue ) : getSelectValue
		};
	}
	onHandleChange = async( value ) => {
		const { onChange, name, disableValueCache } = this.props;
		const value_res = !!value ? isJsonString( value ) ? JSON.parse( value ) : value : undefined;
		if ( !disableValueCache ) {
			await setState({
				[ `select-api-value-${ name }` ]: value_res
			});
		}
		this.setState({ value });
		await onChange( value_res );
	}
	onHandleFocus = async( ) => {
		console.log( 'select focus' );
		const { options } = this.state;
		const { fetchItems, disableItemsCache } = this.props;
		if ( !disableItemsCache ) {
			if ( options.length === 0 ) {
				await this.setState({ loading: true });
				const { name } = this.props;
				const items_cache = state[`select-api-items-${ name }`];
				if ( items_cache === undefined ) {
					await fetchItems( ).then(items => {
						if ( items.length > 0 ) {
							setState({
								[ `select-api-items-${ name }` ]: items
							});
						}
						this.setState({ options: items, loading: false });
					});
				} else {
					this.setState({ options: items_cache, loading: false });
				}
			}
		} else {
			await this.setState({ loading: true });
			await fetchItems( ).then(items => {
				this.setState({ options: items, loading: false });
			});
		}
	}
	render( ) {
		const { options, loading, value } = this.state;
		const {
			placeholder,
			style,
			type,
			defaultValue,
			disabled,
			staticItems
		} = this.props;
		return (
			<Select
				{ ...(!loading&&(type==='filter'?{suffixIcon:(<FilterOutlined/>)}:type==='search'?{suffixIcon:(<SearchOutlined/>)}:{})) }
				{...type==='search'&&{showSearch:true,optionFilterProp:"children",filterOption:(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }}
				{ ...(!loading&&{allowClear:true}) }
				{...{loading,placeholder,value,defaultValue, disabled, ...!Array.isArray(staticItems)&&{onFocus:this.onHandleFocus}}}
				size="large"
				onChange={this.onHandleChange}
				style={{
				...style,
				minWidth: get_responsive( 6 )
			}}>{options.map(x => (
					<Option
						key={`select-item-${ x.id }`}
						value={typeof x.value === 'object' ? JSON.stringify( x.value ) : x.value}>
						{x.title}
					</Option>
				))}
			</Select>
		);
	}
}
SelectApi.defaultProps = {
	placeholder: 'select value',
	onChange: ( ) => console.log( 'item selected!' ),
	disableItemsCache: false,
	disableValueCache: false,
	type: 'dropdown'
};
SelectApi.propTypes = {
	disableItemsCache: PropTypes.bool,
	disableValueCache: PropTypes.bool,
	disabled: PropTypes.bool,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	fetchItems: PropTypes.func,
	staticItems: PropTypes.array,
	type: PropTypes.oneOf([ 'dropdown', 'filter', 'search' ]),
	style: PropTypes.object,
	defaultValue: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.object ])
};
export { SelectApi };