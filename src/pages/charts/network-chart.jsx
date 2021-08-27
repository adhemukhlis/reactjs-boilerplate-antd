import React from "react";
import { Layout } from 'antd';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { GraphChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import ChartData from '../../assets/json/les-miserables.json';
import { PageTitle } from '@src/components';
import { style_content } from '../../style';
const { Content } = Layout;
echarts.use([ TooltipComponent, LegendComponent, GraphChart, CanvasRenderer ]);
var contrastColor = '#B9B8CE';
var backgroundColor = '#100C2A';
var axisCommon = function ( ) {
	return {
		axisLine: {
			lineStyle: {
				color: contrastColor
			}
		},
		splitLine: {
			lineStyle: {
				color: '#484753'
			}
		},
		splitArea: {
			areaStyle: {
				color: [ 'rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)' ]
			}
		},
		minorSplitLine: {
			lineStyle: {
				color: '#20203B'
			}
		}
	};
};

var colorPalette = [
	'#4992ff',
	'#7cffb2',
	'#fddd60',
	'#ff6e76',
	'#58d9f9',
	'#05c091',
	'#ff8a45',
	'#8d48e3',
	'#dd79ff'
];
echarts.registerTheme('dark', {
	darkMode: true,

	color: colorPalette,
	backgroundColor: backgroundColor,
	axisPointer: {
		lineStyle: {
			color: '#817f91'
		},
		crossStyle: {
			color: '#817f91'
		},
		label: {
			color: '#fff'
		}
	},
	legend: {
		textStyle: {
			color: contrastColor
		}
	},
	textStyle: {
		color: contrastColor
	},
	title: {
		textStyle: {
			color: '#EEF1FA'
		},
		subtextStyle: {
			color: '#B9B8CE'
		}
	},
	toolbox: {
		iconStyle: {
			borderColor: contrastColor
		}
	},
	dataZoom: {
		borderColor: '#71708A',
		textStyle: {
			color: contrastColor
		},
		brushStyle: {
			color: 'rgba(135,163,206,0.3)'
		},
		handleStyle: {
			color: '#353450',
			borderColor: '#C5CBE3'
		},
		moveHandleStyle: {
			color: '#B0B6C3',
			opacity: 0.3
		},
		fillerColor: 'rgba(135,163,206,0.2)',
		emphasis: {
			handleStyle: {
				borderColor: '#91B7F2',
				color: '#4D587D'
			},
			moveHandleStyle: {
				color: '#636D9A',
				opacity: 0.7
			}
		},
		dataBackground: {
			lineStyle: {
				color: '#71708A',
				width: 1
			},
			areaStyle: {
				color: '#71708A'
			}
		},
		selectedDataBackground: {
			lineStyle: {
				color: '#87A3CE'
			},
			areaStyle: {
				color: '#87A3CE'
			}
		}
	},
	visualMap: {
		textStyle: {
			color: contrastColor
		}
	},
	timeline: {
		lineStyle: {
			color: contrastColor
		},
		label: {
			color: contrastColor
		},
		controlStyle: {
			color: contrastColor,
			borderColor: contrastColor
		}
	},
	calendar: {
		itemStyle: {
			color: backgroundColor
		},
		dayLabel: {
			color: contrastColor
		},
		monthLabel: {
			color: contrastColor
		},
		yearLabel: {
			color: contrastColor
		}
	},
	timeAxis: axisCommon( ),
	logAxis: axisCommon( ),
	valueAxis: axisCommon( ),
	categoryAxis: axisCommon( ),

	line: {
		symbol: 'circle'
	},
	graph: {
		color: colorPalette
	},
	gauge: {
		title: {
			color: contrastColor
		}
	},
	candlestick: {
		itemStyle: {
			color: '#FD1050',
			color0: '#0CF49B',
			borderColor: '#FD1050',
			borderColor0: '#0CF49B'
		}
	}
});
const ViewChartNetwork = ( ) => {
	// const options = { 	tooltip: {}, 	legend: [ 		{ 			data: ChartData
	// 				.categories 				.map( function ( a ) { 					return a.name; 				}) 		} 	],
	// 	series: [ 		{ 			name: 'Les Miserables', 			type: 'graph', 			layout:
	// 'none', 			data: ChartData.nodes, 			links: ChartData.links, 			categories:
	// ChartData.categories, 			roam: true, 			label: { 				show: true,
	// 				position: 'right', 				formatter: '{b}' 			}, 			labelLayout: {
	// 				hideOverlap: true 			}, 			scaleLimit: { 				min: 0.4, 				max: 2 			},
	// 			lineStyle: { 				color: 'source', 				curveness: 0.3 			} 		} 	] };
	const ChartDataOpt2Nodes = ChartData
		.nodes
		.map(({
			symbolSize,
			...node
		}) => ({
			...node,
			itemStyle: null,
			value: symbolSize,
			symbolSize: symbolSize / 1.5,
			label: {
				show: symbolSize > 30
			}
		}));
	const options2 = {
		title: {
			text: 'Les Miserables',
			subtext: 'Default layout',
			top: 'bottom',
			left: 'right'
		},
		tooltip: {},
		legend: [
			{
				data: ChartData
					.categories
					.map( function ( a ) {
						return a.name;
					})
			}
		],
		animationDuration: 1500,
		animationEasingUpdate: 'quinticInOut',
		series: [
			{
				name: 'Network Graph',
				type: 'graph',
				layout: 'none',
				data: ChartDataOpt2Nodes,
				links: ChartData.links,
				categories: ChartData.categories,
				roam: true,
				focusNodeAdjacency: true,
				itemStyle: {
					borderColor: '#fff',
					borderWidth: 1,
					shadowBlur: 10,
					shadowColor: 'rgba(0, 0, 0, 0.3)'
				},
				label: {
					position: 'right',
					formatter: '{b}'
				},
				lineStyle: {
					color: 'source',
					curveness: 0.3
				},
				emphasis: {
					lineStyle: {
						width: 10
					}
				}
			}
		]
	};
	return (
		<div style={{
			display: 'flex',
			flex: 1,
			flexDirection: 'column'
		}}>
			<PageTitle>Network Graph</PageTitle>
			<Content style={style_content}><ReactECharts
				option={options2}
				style={{
			height: '100%',
			width: '100%'
		}}
				theme='dark'/></Content>
		</div>
	);
}
export default ViewChartNetwork;