var React = require('react');
var InfoPanel = require('./InfoPanel.jsx');

var SadeBar = React.createClass({
    render: function() {
        var panelBoxStyle = {
            textAlign: "center",
            background: "#ccFF8A00"
        },
            titleStyle = {
                color: '#fff',
                fontSize: '18px'
            }   ;
        var dataSadeBars = [
            {id: "location", size: "col-md-6 col-lg-6", titleTxt: "18", contentTxt: "Paris"},
            {id: "visotor", size: "col-md-6 col-lg-6", titleTxt: "New visotors", contentTxt: "1.5k"},
            {id: "rate", size: "col-md-6 col-lg-6", titleTxt: "Bounce Rate", contentTxt: "Average Monthly income"},
            {id: "searchs", size: "col-md-6 col-lg-6", titleTxt: "Searchs", contentTxt: "Yearly income Goal"},
            {id: "traffic", size: "col-md-6 col-lg-6", titleTxt: "Traffic", contentTxt: "Yearly income Goal"}
        ];
        var SadeBarNodes = dataSadeBars.map(function(SadeBar) {
                return (
                    <InfoPanel data={SadeBar} key={SadeBar.id}></InfoPanel>
                )
        });

        return (
            <div className='row'>
                {SadeBarNodes}
            </div>
        );
    }
});

module.exports = SadeBar;