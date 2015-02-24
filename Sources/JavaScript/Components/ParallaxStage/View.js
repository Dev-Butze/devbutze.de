var componentPrototype = require('componentPrototype'),
    forEach = require('./../../Utilities/Helpers').forEach,
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
     * @returns {ParallaxStage}
     */
    initialize: function() {
        'use strict';

        var dataset = this.el.dataset;

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

    /**
     * render
     * @description Renders the state of the component, depending on the last scrolled position.
     * @returns {ParallaxStage}
     */
    render: function() {
        'use strict';

        var currentScrollTop = document.body.scrollTop,
            lastScrollTop = this.get('lastScrollTop');

        if(currentScrollTop === lastScrollTop) {
            return this;
        }

        this.set('lastScrollTop', currentScrollTop);
        this.adjustTargetPositions(currentScrollTop);

        return this;
    },

    /**
     * adjustTargetPositions
     * @description Loops over each target node and calls the transform method to adjust it's position.
     * @param scrollTop {Number} The current scroll position of the document/target node.
     * @returns {ParallaxStage}
     */
    adjustTargetPositions: function(scrollTop) {
        'use strict';

        var stageOffset = this.el.offsetTop,
            scrollPos = scrollTop - stageOffset;

        forEach(this.targets, function(index, item) {
            var elementScrollPos = this.calculateElementsScrollPosition(item, scrollPos);

            this.setElementsTransformValue(item, elementScrollPos);
        }.bind(this));

        return this;
    },

    /**
     * calculateElementsScrollPosition
     * @param element {HTMLElement} The node on which the calculation is based on.
     * @param scrollPos {Number} The scroll position of the instance's node.
     * @returns {number}
     */
    calculateElementsScrollPosition: function(element, scrollPos) {
        'use strict';

        var parallaxFactor = (Math.abs(element.dataset.parallaxfactor) || 1);

        return Math.round(scrollPos / parallaxFactor);
    },

    /**
     * setElementsTransformValue
     * @param element {HTMLElement} The node on which the calculation is based on.
     * @param scrollPos {Number} The scroll position of the instance's node.
     * @returns {ParallaxStage}
     */
    setElementsTransformValue: function(element, scrollPos) {
        'use strict';

        setTransform(element, 'translateY(' + scrollPos + 'px)');

        return this;
    }
});

module.exports = ParallaxStage;