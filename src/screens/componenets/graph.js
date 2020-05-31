/* App.js */
var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Graph(props){

	    let dp =  props.activities.filter((item) => item !== undefined ).map((item)=>  {let obj = {y:item.fte,	label: item.name }; return obj})
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Most Popular Social Networking Sites"
			},
			axisX: {
				title: "FTE",
				reversed: true,
			},
			axisY: {
				title: "ACTIVITIES",
				labelFormatter: addSymbols
			},

			data: [{
				type: "bar",
				dataPoints: dp
			}]
		}
		console.log(options.data.dataPoints);

		const addSymbols= (e) => {
			var suffixes = ["", "K", "M", "B"];
			var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
			if(order > suffixes.length - 1){
				order = suffixes.length - 1;
			}
			var suffix = suffixes[order];
			return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
}
     