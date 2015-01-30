var componentPrototype = require('componentPrototype'),
    setTransform = require('./../../Utilities/Helpers').setTransform,
    ParallaxStage;

/**
 * ParallaxStage
 * @description Creates a subtle parallax scrolling effect on some child elements.
 * @constructor
 */
ParallaxStage = componentPrototype.extend({
    /**
     * initialize
     * @description Initializes the module.
     * @param el {HTMLElement} The Element on which the parallax values will be based on.
     * @param dataset {Object} The configuration objectfor the Component.
     * @returns {ParallaxStage}
     */
    initialize: function(el, dataset) {
        'use strict';

        this.el = el;
        this.targets = document.querySelectorAll(dataset.target || '[data-parallax]');
        this.set('lastScrollTop', 0);

        // Setup the rAF.
        var self = this,
            _animFrame;

        (function animloop(){
            self.render();
            _animFrame = window.requestAnimationFrame(animloop);
        }());

        return this;
    },

    render: function() {
        'use strict';

        var currentScrollTop = document.body.scrollTop,
            lastScrollTop = this.get('lastScrollTop');

        if(currentScrollTop === lastScrollTop) {
            return this;
        }

        this.set('lastScrollTop', currentScrollTop);
        this.adjustPositions(currentScrollTop);

        return this;
    },
    adjustPositions: function(scrollTop) {
        'use strict';

        var stageOffset = this.el.offsetTop,
            scrollPos = scrollTop - stageOffset;

        this.setElementsTransformValue(this.targets[0], scrollPos);
        this.setElementsTransformValue(this.targets[1], scrollPos);

        return this;
    },
    setElementsTransformValue: function(element, scrollPos) {
        'use strict';

        var val = Math.round(scrollPos / (Math.abs(element.dataset.parallaxfactor) || 1));

        setTransform(element, 'translateY(' + val + 'px)');

        return this;
    }
});

module.exports = ParallaxStage;