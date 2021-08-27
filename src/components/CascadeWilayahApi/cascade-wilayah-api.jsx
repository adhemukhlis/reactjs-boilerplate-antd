import React, { memo } from "react";
import { Cascader } from "antd";
import axios from "axios";

const CascadeWilayahApi = memo(({
	onChange,
	...props
}) => {
	const [options,
		setOptions] = React.useState([ ]);
	const onFocus = ( ) => {
		if ( options.length === 0 ) {
			fetchProvinsi( ).then(result => setOptions( result ));
		}
	};
	const loadData = selectedOptions => {
		const targetOption = selectedOptions[selectedOptions.length - 1];
		targetOption.loading = true;
		if ( selectedOptions.length === 1 ) {
			fetchKabupatenKota({ id_provinsi: targetOption.value }).then(result => {
				targetOption.loading = false;
				targetOption.children = result;
				setOptions([...options]);
			});
		} else if ( selectedOptions.length === 2 ) {
			fetchKecamatan({ id_kabupaten_kota: targetOption.value }).then(result => {
				targetOption.loading = false;
				targetOption.children = result;
				setOptions([...options]);
			});
		} else if ( selectedOptions.length === 3 ) {
			fetchDesaKelurahan({ id_kecamatan: targetOption.value }).then(result => {
				targetOption.loading = false;
				targetOption.children = result;
				setOptions([...options]);
			});
		}
	};
	return ( <Cascader
		{...props}
		options={options}
		loadData={loadData}
		onChange={onChange}
		onFocus={onFocus}
		changeOnSelect/> );
});

const Axios = axios.create({
	baseURL: "https://api-wilayah-indonesia-firebase.firebaseio.com",
	timeout: 12000,
	headers: {
		"Content-Type": "application/json"
	}
});
const fetchProvinsi = async( ) => {
	const config = {
		method: "get",
		url: "/wilayah/provinsi.json"
	};
	return await Axios( config ).then(async response => {
		const res = response.data;
		const result = Object
			.keys( res )
			.map(x => ({ value: res[x].id, label: res[x].name, isLeaf: false }));
		return result;
	}).catch(error => {
		console.log(error.toJSON( ));
		return [ ];
	});
};
const fetchKabupatenKota = async({ id_provinsi }) => {
	const config = {
		method: "get",
		url: `/wilayah/kabupaten_kota.json?orderBy="id_provinsi"&equalTo="${ id_provinsi }"`
	};
	return await Axios( config ).then(async response => {
		const res = response.data;
		const result = Object
			.keys( res )
			.map(x => ({ value: res[x].id, label: res[x].name, isLeaf: false }));
		return result;
	}).catch(error => {
		console.log(error.toJSON( ));
		return [ ];
	});
};
const fetchKecamatan = async({ id_kabupaten_kota }) => {
	const config = {
		method: "get",
		url: `/wilayah/kecamatan.json?orderBy="id_kabupaten_kota"&equalTo="${ id_kabupaten_kota }"`
	};
	return await Axios( config ).then(async response => {
		const res = response.data;
		const result = Object
			.keys( res )
			.map(x => ({ value: res[x].id, label: res[x].name, isLeaf: false }));
		return result;
	}).catch(error => {
		console.log(error.toJSON( ));
		return [ ];
	});
};
const fetchDesaKelurahan = async({ id_kecamatan }) => {
	const config = {
		method: "get",
		url: `/wilayah/desa_kelurahan.json?orderBy="id_kecamatan"&equalTo="${ id_kecamatan }"`
	};
	return await Axios( config ).then(async response => {
		const res = response.data;
		const result = Object
			.keys( res )
			.map(x => ({ value: res[x].id, label: res[x].name }));
		return result;
	}).catch(error => {
		console.log(error.toJSON( ));
		return [ ];
	});
};

export { CascadeWilayahApi };
