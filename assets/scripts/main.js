'use strict';

var App = App || {};

App = {
    createCalendar: function (selector, data) {
        var obj = {
            "1451155335": 10,
            "2451155335": 40,
            "3451155335": 30,
            "4451155335": 40,
            "5451155335": 50,
            "6451155335": 40,
            "7451155335": 80,
            "8451155335": 450,
            "9451155335": 49,
            "10451155335": 944,
            "1151155335": 40,
            "12451155335": 66,
            "8851155335": 40,
            "43451155335": 645,
            "771155335": 40,
            "001155335": 232342,
            "3251155335": 40,
            "4151155335": 2540,
            "4251155335": 40,
            "4351155335": 77770,
            "4751155335": 40,
        }

        var cal = new CalHeatMap();
        cal.init({
            itemSelector: selector,
            domain: 'month',
            subDomain: 'x_day',
            //subDomainTextFormat: "%d",
            domainMargin: [0, 10, 0, 0],
            range: 5,
            previousSelector: '#previous',
            nextSelector: '#next',
            data: obj
        });
    }
};