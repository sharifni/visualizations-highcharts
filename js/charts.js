$.get("ethereum.csv", function(data){

var ethereum_data = parseEthereumCSV(data);


Highcharts.chart('ethereum_bitcoin', {
    chart:{
        type:'line'
    },

    title: {
        text: 'Crypto Currency Chart from 2014 - 2018'
    },

    subtitle: {
        text: 'Comparing price trend of Bitcoin vs Ethereum'
    },

    yAxis: {
        title: {
            text: 'Price'
        }
    },
    
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [
        {
            name: 'Ethereum',
            data: data,
            tooltip:{
                valueDecimals:2
            }

        }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

});

function parseEthereumCSV(csvFile){
//array to store chart data
var data = [];

//splitting csv data into lines
var lines = csvFile.split("\n");

//going through each line of csv file
$.each(lines,  function(lineNumber, line){
    if(lineNumber !=0){
        var fields = line.split(",");
        if(fields.length==2){
            var date = Date.parse(fields[0]);
            var price = parseFloat(fields[1]);
            data.push([date, price]);
        }
    }
});

return data.reverse();
}