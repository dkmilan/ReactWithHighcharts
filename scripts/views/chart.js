var DonutChart = React.createClass({
    options: {
        chart: {
            backgroundColor: '#FFFFFF',
            type: 'pie',
            height: 178,
            width: 178,
            margin: [-10, -10, -10, -10],
            spacing: [0, 0, 0, 0]
        },
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            data: []
        }, {
            data: []
        }, {
            data: []
        }],
        plotOptions: {
            pie: {
                borderColor: '#FFFFFF',
                borderWidth: '2px',
                innerSize: '65%',
                center: ['50%', '50%'],
                dataLabels: {
                    enabled: false
                },
                showInLegend: false
            },
            series: {
                states: {
                    hover: {
                        brightness: .05,
                        halo: {
                            opacity: 0
                        }
                    }
                }
            }
        }
    },

// When the DOM is ready, create the chart.
    componentDidMount: function () {
        // Extend Highcharts with modules
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        this.options.series[0].data = this.props.data
        // Set container which the chart should render to.
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container,
            this.options
        );
    },
//Destroy chart before unmount.
    componentWillUnmount: function () {
        this.chart.destroy();
    },
//Create the div which the chart will be rendered to.
    render: function () {
        return React.createElement('div', {
            id: this.props.container
        });
    }
});
