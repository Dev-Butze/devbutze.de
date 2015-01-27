/*
 * App.min.js
 * @description Require the main application modules.
 */

var DomParser = require('./Utilities/DomParser/Parser.js'),
    ComponentIndex = require('./Utilities/ComponentIndex/Util.js'),
    componentStore = new ComponentIndex(),
    componentParser;

// Register the base modules.
componentStore.register('classToggler', require('./Components/ClassToggler/View.js'));
componentStore.register('scrollTo', require('./Components/ScrollTo/View.js'));

// Sets up the componentParser.
componentParser = new DomParser({
    constructors: componentStore.getIndex(),
    selector: 'component', // Equals [data-component="*"]
    defaultCallback: function(instance, el, dataset) {
        'use strict';

        if(!instance.initialize) {
            return instance;
        }

        // Initialize the module.
        instance.initialize.call(instance, el, dataset);

        return instance;
    }
}).parse();