/**
 * Created by a473434 on 06/06/2016.
 */
  var AssetMixLegend = React.createClass({
    getInitialState:function(){
        var data = {}
        this.props.items.map(function(item){
            data[item.key]=item.value;
        });
        return data;
    },

    render : function() {
      var that = this;
        var legendItem = this.props.items.map(function (item) {
            return React.createElement(LegendItem, {
                key:item.key,
                assetClass: item.key,
                name: item.name,
                value: that.state[item.key]

            });
        });


        return (
          <div  class='assetmix-legend'>
            <div  class='assetmix-legend-box'>
              {legendItem}
            </div>
          </div>);

    }
  });
  var LegendItem = React.createClass({
    getInitialState :function() {

        return {value: this.props.value};
    },

    handleBlur : function(event){
        //this.setState({value:event.target.value});
        var data ={
          assetClass : this.props.assetClass,
          value :this.state.value
        };
        Actions.updateAssetMix(data)
    },
    handleChange : function(event){
      var percent = parseInt(event.target.value);
        this.setState({value:percent});
    },
    render : function () {
        return (<div class="assemix-legend-item">
            <span class="assemix-legend-item-block"/>
            <span class="assemix-legend-item-lebel">this.props.name</span>
            <span class="assemix-legend-item-precent">
                <input class={this.props.assetClass} value={this.state.value} onChange={this.handleChange} onBlur={this.handleBlur}></input>
            </span>
        </div>);
    }
});
