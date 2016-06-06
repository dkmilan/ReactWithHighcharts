/**
 * Created by a473434 on 06/06/2016.
 */
AssetMixLegend = React.createClass({
    getInitialState:function(){
        var data = {}
        this.props.items.map(function(item){
            data[item.key]=0;
        });
        return data;
    },
    
    render : function() {
        var legendItem = this.props.items.map(function (item) {
            return React.createElement(LegendItem, {
                key:item.key,
                assetClass: item.key,
                name: item.name
            });
        });


        return React.createElement("div", {className: 'assetmix-legend'},
            React.createElement("div", {className: 'assetmix-legend-box'}, legendItem));

    }
});
LegendItem = React.createClass({
    getInitialState :function() {

        return {value:"0"};
    },

    handleChange : function(event){
        this.setState({value:event.target.value});
    },
    render : function () {

        return React.createElement("div",{className:"assemix-legend-item"},[
            React.createElement("span", {className:"assemix-legend-item-block"}),
            React.createElement("span", {className:"assemix-legend-item-lebel"},this.props.name),
            React.createElement("span", {className:"assemix-legend-item-precent"},
                React.createElement("input", {className:this.props.assetClass, value:this.state.value, onChange:this.handleChange}))]);
    }
});
