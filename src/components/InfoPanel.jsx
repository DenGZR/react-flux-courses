var React = require('react');

var InfoPanel = React.createClass({
	return: function() {
		var smallPanelStyle = {
			background: '#fff'	      
		},
		titleStyle = this.props.title || {
			background: '#fff',
			padding: '30px 5px 10px 10px',
			fontSize: '24',
			fontWeight: 'bold',
			color: '#000'
		},
		contentStyle = this.props.title || {
			background: '#fff',
			padding: '5px 10px 10px 10px',
			fontSize: '14',
			fontWeight: 'normal',
			color: '#eee'
		};


		return (
			<div className={this.props.size} style={smallPanelStyle}>
				<p style={titleStyle}>{this.props.titleTxt}</p>
				<p style={contentStyle}>{this.props.contentTxt}</p>
			</div>
			)
	}

});

module.exports = InfoPanel;