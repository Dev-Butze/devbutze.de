/*
 * App.min.js
 * @description Require the main application modules.
 */

var ComponentDomParser = require("componentdomparser"),
    ScrollReveal = require('scrollReveal'),
    ComponentIndex = require('./Utilities/ComponentIndex/Util.js'),
    componentStore = new ComponentIndex();

// Register the base modules.
componentStore.register('classToggler', require('./Components/ClassToggler/View.js'));
componentStore.register('parallaxStage', require('./Components/ParallaxStage/View.js'));
componentStore.register('scrollTo', require('./Components/ScrollTo/View.js'));

// Sets up the componentParser.
var parser = new ComponentDomParser({
    dataSelector: 'component', // Equals [data-component="*"]
    componentIndex: componentStore.getIndex(),
    componentDidMountCallback: function(instance, el, dataset) {
        'use strict';

        if(!instance.initialize) {
            return instance;
        }

        // Initialize the module.
        instance.initialize.call(instance, el, dataset);

        return instance;
    }
});

// Parse the document for all [data-component] nodes.
parser.parse();

var scrollReveal = new ScrollReveal();