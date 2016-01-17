var React = require('react');
var InfoPanel = require('./InfoPanel.jsx');

var HeaderPanel = React.createClass({
	render: function() {
		var data = [
			{size: "col-ms-4", titleTxt: 20, contentTxt: "New follwers added this month"},
			{size: "col-ms-4", titleTxt: 20, contentTxt: "New follwers added this month"}
		];
		var infoPanelNodes = data.map(function(that) {
			return (
				<InfoPanel size={that.size} titleTxt={that.titleTxt} contentTxt={that.contentTxt}></InfoPanel>
			)
		});

		return (
			<div className='row'>
				{infoPanelNodes}
			</div>
		);
	}
});

module.exports = HeaderPanel;