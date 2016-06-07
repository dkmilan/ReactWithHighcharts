/**
 * Created by a473434 on 06/06/2016.
 */
var AssetMixLegend = React.createClass({
    getInitialState: function () {
        var data = {}
        this.props.items.map(function (item) {
            data[item.key] = item.value;
        });
        return data;
    },

    render: function () {
        var that = this;
        var legendItem = this.props.items.map(function (item) {
            return React.createElement(LegendItem, {
                key: item.key,
                assetClass: item.key,
                name: item.name,
                value: item.value

            });
        });


        return (
            <div class='assetmix-legend'>
                <div class='assetmix-legend-box'>
                    {legendItem}
                </div>
            </div>);

    }
});
var LegendItem = React.createClass({
    getInitialState: function () {

        return {
            isChanged: false,
            value: this.props.value
        };
    },
    componentWillReceiveProps: function (props) {
        this.setState({value: props.value});
    },
    handleBlur: function (event) {
        //this.setState({value:event.target.value});

        var percent = parseInt(event.target.value);
        var isValChanged = percent != this.state.value;

        if (isValChanged){
            var data = {
                assetClass: this.props.assetClass,
                value: percent
            };
            Actions.updateAssetMix(data);
            this.setState({value: percent});
        }
    },
    render: function () {
        return (<div class="assemix-legend-item">
            <span class="assemix-legend-item-block"/>
            <span class="assemix-legend-item-lebel">{this.props.name}</span>
            <span class="assemix-legend-item-precent">
                <input class={this.props.assetClass} defaultValue={this.state.value}
                       onBlur={this.handleBlur}></input>
            </span>
        </div>);
    }
});
