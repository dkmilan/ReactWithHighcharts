(function(Reflux, Actions, global) {
    'use strict';

    global.assetMixStore = Reflux.createStore({
        // this will set up listeners to all publishers in TodoActions, using onKeyname (or keyname) as callbacks
        listenables: [Actions],
        onUpdateAssetMix: function(assetAllocation){

            this.updateAssetMix(assetAllocation)
        },
        updateAssetMix: function(assetAllocation){
            this.assetAllocations.map(function(assetAllocationPart)
            {
              if (assetAllocationPart.key == assetAllocation.assetClass)
              {
                assetAllocationPart.value = assetAllocation.value;
              }
            })
            this.assetAllocations[assetAllocation.assetClass] = assetAllocation.value;
            this.trigger(this.assetAllocations);
        },
        // this will be called by all listening components as they register their listeners
        getInitialState: function() {
            this.assetAllocations = [{
              key:"DOMESTIC_STOCK",
              name:"Domestic Stock",
              value:20
            },{
              key:"FOREIGN_STOCK",
              name:"Foreign Stock",
              value:40
            },{
              key:"BOND",
              name:"BONDS",
              value:15
            },{
              key:"CASH",
              name:"Short-Term",
              value: 25
            }];
            return this.assetAllocations;
        }
    });

})(window.Reflux, window.Actions, window);
