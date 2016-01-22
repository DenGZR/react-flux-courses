var React = require('react');
var InfoPanel = require('./InfoPanel.jsx');

var MainPanel = React.createClass({
    render: function() {
        var dataPanel = [
            {id: 'views', size: "col-xs-12 col-ms-4 col-md-3 col-lg-3", titleTxt: "15080", contentTxt: "Shot views", panelBoxStyle:{ textAlign: "center", background: "#484D4D"}},
            {id: 'likes', size: "col-xs-12 col-ms-4 col-md-3 col-lg-3", titleTxt: "12000", contentTxt: "Likes", panelBoxStyle:{ textAlign: "center", background: "#484D4D"}},
            {id: 'comments', size: "col-xs-12 col-ms-4 col-md-3 col-lg-3", titleTxt: "5100", contentTxt: "Comments", panelBoxStyle:{ textAlign: "center", background: "#484D4D"}}
        ];
        var panelHeaderStyle = {
            background: '#0096D0',
            height: '100px'
        };
        var PanelNodes = dataPanel.map(function(panelItem) {
                return (
                    <InfoPanel data={panelItem} key={panelItem.id}></InfoPanel>
                )
        });

        return (
                <div className='row'>
                    <div className='col-xs-12 col-md-12' style={panelHeaderStyle}></div>
                        <div className='row'>
                            {PanelNodes}
                        </div>
                </div>
        );
    }
});

module.exports = MainPanel;