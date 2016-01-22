var React = require('react');
var InfoPanel = require('./InfoPanel.jsx');

var HeaderPanel = React.createClass({
	render: function() {
debugger;
		var dataObj = {
			baseStyle: {
				container:{
					background: '#fff',
					borderRadius: '5',
					border: '1px solid #eee',
					margin: '20px'
				},
				title:{
					padding: '30px 5px 10px 10px',
					fontSize: '24',
					fontWeight: 'bold',
					color: '#000'
				},
				content:{
					padding: '5px 10px 30px 10px',
					fontSize: '14',
					fontWeight: 'normal',
					color: '#ccc'
				}
			},
			items: [
				{
					containerClass: 'col-xs-12 col-ms-4 col-md-3 col-lg-3',
					containerStyle: this.baseStyle.container,
					titleTxt: '20',
					titleStyle: this.baseStyle.title,
					contentTxt: 'New follwers added this month',
					contentStyle: this.baseStyle.content
				},
				{
					containerClass: 'col-xs-12 col-ms-4 col-md-3 col-lg-3',
					containerStyle: this.baseStyle.container,
					titleTxt: '$1250',
					titleStyle: this.baseStyle.title,
					contentTxt: 'Average Monthly income',
					contentStyle: this.baseStyle.content
				},
				{
					containerClass: 'col-xs-12 col-ms-4 col-md-3 col-lg-3',
					containerStyle: this.baseStyle.container,
					titleTxt: '$13865',
					titleStyle: this.baseStyle.title,
					contentTxt: 'Yearly income Goal',
					contentStyle: this.baseStyle.content
				}
			]
		};

		var headerPanels = dataObj.items.map(function(item, index){
			console.log(item);
			return (
				<InfoPanel data={item} key={index}></InfoPanel>
			)
		});

		return (
			<div className='row'>
				{headerPanels}
			</div>
		);
	}
});

module.exports = HeaderPanel;
