var componentPrototype = require('componentPrototype'),
    ScrollTo;


//t = current time
//b = start value
//c = change in value
//d = duration
var easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b;
    }

    t--;

    return -c / 2 * (t * (t - 2) - 1) + b;
};

ScrollTo = componentPrototype.extend({
    initialize: function(el, dataset) {
        'use strict';

        this.el = el;
        this.target = document.querySelectorAll(dataset.target)[0];
        this.set('duration', dataset.duration || 600);

        this.el.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            this.scrollToTarget();
        }.bind(this));

        return this;
    },
    scrollToTarget: function() {
        'use strict';

        var element = document.body,
            to = this.target.offsetTop,
            duration = this.get('duration'),
            start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function(){
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();

        return this;
    }
});

module.exports = ScrollTo;