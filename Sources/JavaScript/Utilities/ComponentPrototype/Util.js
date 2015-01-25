/**
 * ModulePrototype
 * @description Creates a set of handy functions and reference them to a target e.g.:
 * @author Tyll Weiß
 */


var extend = require('./../Helpers.js').extend;

var Prototype = {
        /**
         * initialize
         * @description A dummy initialize function which set's given attributes on the module.
         * @param attributes {object || string} The attribute(s) to set on the module.
         * @returns {Prototype}
         */
        initialize: function(attributes) {
            'use strict';

            // If attributes where passed, set them on the constructor.
            if(attributes) {
                this.set(attributes);
            }

            return this;
        },

        /**
         * set
         * @description Set a key & val pair on the module attributes object.
         * @param key {string} The target key.
         * @param val {string} The value to set.
         * @returns {Prototype}
         */
        set: function(key, val) {
            'use strict';

            // Set the target to the attributes obj.
            var target = this.attributes;

            // Check if the first argument is an obj, if true - set each key/val pair.
            if(typeof key === 'object') {
                key.forEach(function(objKey, value) {
                    target[objKey] = value;
                }.bind(this));

                return this;
            }

            // If the first argument is a string, set the key/val pair.
            if(typeof key === 'string') {
                target[key] = val;

                return this;
            }

            return this;
        },

        /**
         * unset
         * @description Unset/Delete a key from the attributes obj.
         * @param key
         * @returns {Prototype}
         */
        unset: function(key) {
            'use strict';
            delete this.attributes[key];

            return this;
        },

        /**
         * get
         * @description Get the value of an key in the attributes obj.
         * @param key {string} The target key to look for in the attributes obj.
         * @returns {*}
         */
        get: function(key) {
            'use strict';

            return this.attributes[key];
        },

        /**
         * has
         * @description Returns a bool which indicates if an attribute was set on the module.
         * @param attr {string} The target key to test.
         * @returns {boolean}
         */
        has: function(attr) {
            'use strict';

            return this.get(attr) != null;
        },

        /**
         * extend
         * @description The initiator function for each module, invokes a new module Constructor and extends the prototype with all functions found in this object.
         * @example Prototype.extend({object});
         * @param prototypeProps {object} A set of functions which will be applied to the prototype of the created Constructor.
         * @returns {Function}
         */
        extend: function(obj) {
            'use strict';

            // Prevent empty objects.
            obj = obj ? obj : {};

            // Create an empty function wrapper.
            var Constructor = function() {
                this.attributes = {};
            };

            // Extend the target function with the base functions, as well as the protoProps
            extend(Constructor.prototype, this, obj);

            // Return the target function.
            return Constructor;
        },

        /**
         * mixin
         * @description Mix a set of functions into the current prototype.
         * @example this.mixin({ getFour: function() { return 2+2; } });
         * @param target {Object} The prototype, to mix the Obj into.
         * @param obj {object} A set of functions that will be extended on the current prototype.
         * @returns {Prototype}
         */
        mixin: function(target, obj) {
            'use strict';

            // Prevent empty objects.
            obj = obj ? obj : {};

            target = target || this.prototype;

            if(!target) {
                return this;
            }

            // Extend the target function with the base functions, as well as the protoProps
            extend(target, obj);

            return this;
        }
    };

module.exports = Prototype;