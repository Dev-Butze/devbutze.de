/**
 * Parse the DOM for the given selector. If the value matches an item in the given index, create instances of it.
 *
 * @module Modules/DomParser
 */

var DomParser;

/**
 * DomParser
 * @param args {Object} The options object which will configure the parser.
 * @constructor
 */
DomParser = function(args) {
	'use strict';

	this.defaultCallback = args.defaultCallback;
	this.selector = args.selector;
	this.index = args.constructors;

    return this;
};


/**
 * parse
 * @description Parse trough the DOM.
 * @memberof module:Modules/DomParser
 * @param args {Object} Several options which can be passed individually on each parse.
 * @returns {DomParser}
 */
DomParser.prototype.parse = function(args) {
	'use strict';

    args = args || {};

	var callback = args.callback || this.defaultCallback,
		elements = (args.context || window.document).querySelectorAll('[data-' + this.selector + ']'),
		i;

	if(!elements.length) {
		return this;
	}

	for (i in elements) {
		if(i === 'length' || i === 'item') {
			continue;
		}

        var el = elements[i],
            val = el.dataset[this.selector],
            Module = this.index[val];

        // Check if the attr's value is in the index.
        if (!Module) {
            console.info('Component "' + val + '" is not present in the index.');
        } else {
            this.createInstance(Module, el, callback);
        }
	}

	return this;
};


/**
 *
 * @param Constructor
 * @param el {HTMLElement} The element on which the component will mount upon.
 * @param cb {Function} The callback to execute after the instance was created.
 * @returns {DomParser}
 */
DomParser.prototype.createInstance = function(Constructor, el, cb) {
	'use strict';

	// Create the instance of the Module.
	var instance = new Constructor(el, el.dataset);

	if(cb) {
		cb.call(this, instance, el, el.dataset);
	}

	return this;
};


// Return the Constructor.
module.exports = DomParser;