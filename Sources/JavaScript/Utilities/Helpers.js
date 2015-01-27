var helpers = {
    extend: function() {
        'use strict';

        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if ( typeof target === "boolean" ) {
            deep = target;

            // Skip the boolean and the target
            target = arguments[ i ] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if ( i === length ) {
            target = this;
            i--;
        }

        for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( (options = arguments[ i ]) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];

                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[ name ] = jQuery.extend( deep, clone, copy );

                        // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    },
    easeInOutQuad: function(currentTime, startValue, changedValue, duration) {
        'use strict';

        currentTime /= duration / 2;
        if (currentTime < 1) {
            return changedValue / 2 * currentTime * currentTime + startValue;
        }

        currentTime--;

        return -changedValue / 2 * (currentTime * (currentTime - 2) - 1) + startValue;
    },
    setTransform: function(element, prop) {
        'use strict';

        element.style.webkitTransform = prop;
        element.style.MozTransform = prop;
        element.style.msTransform = prop;
        element.style.OTransform = prop;
        element.style.transform = prop;
    }
};

module.exports = helpers;