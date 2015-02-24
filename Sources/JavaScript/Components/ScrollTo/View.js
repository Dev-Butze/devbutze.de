var componentPrototype = require('componentPrototype'),
    easeInOutQuad = require('./../../Utilities/Helpers').easeInOutQuad,
    ScrollTo;

/**
 * ScrollTo
 * @description Scrolls to a certain target element on the elements click.
 * @constructor
 */
ScrollTo = componentPrototype.extend({
    /**
     * initialize
     * @description Initializes the module.
     * @param el {HTMLElement} The Element on which the event listener will be mounted.
     * @param dataset {Object} The configuration objectfor the Component.
     * @returns {ScrollTo}
     */
    initialize: function() {
        'use strict';

        var dataset = this.el.dataset;

        this.target = document.querySelectorAll(dataset.target)[0];
        this.set('duration', dataset.duration || 600);

        this.el.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            this.scrollToTarget();
        }.bind(this));

        return this;
    },

    /**
     * scrollToTarget
     * @description Scrolls to the target.
     * @returns {ScrollTo}
     */
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