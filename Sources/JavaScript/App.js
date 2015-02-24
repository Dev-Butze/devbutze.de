var ComponentDomParser = require("componentdomparser"),
    ScrollReveal = require('scrollReveal'),
    ComponentIndex = require('./Utilities/ComponentIndex/Util.js'),
    componentStore = new ComponentIndex(),
    parser, scrollReveal;

// Register the components.
componentStore.register('classToggler', require('./Components/ClassToggler/View.js'));
componentStore.register('parallaxStage', require('./Components/ParallaxStage/View.js'));
componentStore.register('scrollTo', require('./Components/ScrollTo/View.js'));

// Sets up the componentDomParser and parse for all component nodes.
parser = new ComponentDomParser({
    dataSelector: 'component', // Equals [data-component="*"]
    componentIndex: componentStore.getIndex(),
    componentDidMountCallback: function(instance) {
        'use strict';

        if(!instance.initialize) {
            return instance;
        }

        instance.initialize();

        return instance;
    }
}).parse();

scrollReveal = new ScrollReveal();