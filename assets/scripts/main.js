'use strict';

var App = App || {};

App = {
    createCalendar: function (selector, data) {
        var cal = new CalHeatMap();
        cal.init({
            // passed in values
            itemSelector: selector,
            start: data.startDate,
            data: data.data,

            // formatting
            domain: 'month',
            subDomain: 'x_day',
            //subDomainTextFormat: "%d",
            domainMargin: [0, 10, 0, 0],
            legend: [100, 1000, 10000, 10000],
            range: 5,
            previousSelector: '#previous',
            nextSelector: '#next',
        });
    }
};