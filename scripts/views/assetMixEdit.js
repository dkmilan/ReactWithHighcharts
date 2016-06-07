(function (React, ReactRouter, Reflux, Actions, assetMixStore, global) {
    // Renders the full application
    // RouteHandler will always be TodoMain, but with different 'showing' prop (all/completed/active)
    var AssetMix = React.createClass({
        // this will cause setState({list:updatedlist}) whenever the store does trigger(updatedlist)
        mixins: [Reflux.connect(assetMixStore, "assetAllocations")],

        render: function () {

            return <div>
                <DonutChart container='chart'
                            data={this.state.assetAllocations}/>

                <AssetMixLegend items={this.state.assetAllocations}/>
            </div>;
        }
    });

    ReactDOM.render(<AssetMix/>, document.getElementById('react-donut-edit1'));
})(window.React, window.ReactRouter, window.Reflux, window.Actions, window.assetMixStore, window);