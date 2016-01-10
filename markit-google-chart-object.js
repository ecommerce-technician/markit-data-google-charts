{
            "type": "Line",
            "displayed": false,
            "data": {
                "cols": [
                    {
                        "id": "date",
                        "label": "date",
                        "type": "string",
                        "p": {}
                    },
                    {
                        "id": "close",
                        "label": lookup.Symbol,
                        "type": "number",
                        "p": {}
                    }
                ],
                "rows": []
            },
            "options": {
                chart: {
                    "title": "Closing Value",
                    subtitle: 'by Date in US Dollars'
                },
                "isStacked": "true",
                "fill": 20,
                'height':500,
                "displayExactValues": true,
                "vAxis": {
                    "gridlines": {
                        "count": 10
                    }
                },
                legend: { position: 'bottom' },
                "tooltip": {
                    "isHtml": false
                },
                trendlines: {
                    1: {
                        type: 'linear',
                        color: 'green',
                        lineWidth: 3,
                        opacity: 0.3,
                        showR2: true,
                        visibleInLegend: true
                    }
                }
            },
            "formatters": {},
            "view": {
                "columns": [
                    0,
                    1
                ]
            }
        }
        for(i=0; i < interactive.data.Dates.length; i++) {
            $scope.chartObject.data.rows.push({
                c : [
                    {
                        "v": interactive.data.Dates[i]
                    },
                    {
                        "v": interactive.data.Elements[0].DataSeries.close.values[i]
                    }
                ]
            })
        }
