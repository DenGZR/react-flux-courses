var React = require('react');

var InfoPanel = React.createClass({
	render: function() {

		return (
			<div className={this.props.data.containerClass} style={this.props.data.containerStyle}>
				<p style={this.props.data.titleStyle}>{this.props.data.titleTxt}</p>
				<p style={this.props.data.contentStyle}>{this.props.data.contentTxt}</p>
			</div>
			)
	}

});

module.exports = InfoPanel;