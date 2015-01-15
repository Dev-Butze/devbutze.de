/**
 * Fetches a webfont based of JSONP.
 *
 * @example
 * new WebFontLoader({
 *      url: 'fonts/webfont.json', // Path to the JSONP.
 *      timeStamp: '?t=01072015', // Timestamp for the cache.
 *      callbackName:  'callback', //JSONP callback name.
 *      namespace: 'webfont' // localStorage namespace for the fonts.
 * });
 */

(function(global, factory) {
    'use strict';

    // If the env is browserify, export the factory using the module object.
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(global);

    // If the env is AMD, register the Module as 'webfontjsonloader'.
    } else if (typeof define === "function" && define.amd) {
        define("webfontjsonloader", [], function() {
            return factory(global);
        });

    // If the env is a browser, export the factory in the global window object.
    } else {
        global.WebFontLoader = factory(global);
    }
// Pass this if window is not defined yet
}(window, function(global) {
    'use strict';

    // Shorthand for window.document
    var doc = global.document;

    // Shorthand for the <head> element.
    var headElement = doc.getElementsByTagName('head')[0];

    // Future proof way of testing the aviability of the localStorage API.
    var hasLocalStorage = function() {
        try {
            global.localStorage.setItem('test', 1);
            global.localStorage.removeItem('test');
            return true;
        } catch(e) {
            return false;
        }
    };

    // The default jsonp callback.
    var jsonpCallback = function(res) {
        var css = res.css;

        // Create the localStorage cache.
        global.localStorage[this.namespace + '_font_src'] = css;

        // Attach the css to the document.
        this.attachStyles(css);

        // Make sure the global namespace isn't polluted with unused functions.
        global[this.callbackName] = undefined;

        return this;
    };


    /**
     * WebFontLoader
     * @param options {Object} The options Object which initializes the loader.
     * @constructor
     */
    var WebFontLoader = function(options) {
        // Fallbacks for the options.
        var url = options.url;
        var timeStamp = options.timeStamp;
        var callback = options.callback;
        var callbackName = options.callbackName || 'WebFontJsonCallback';
        var namespace = options.namespace || 'webfontjsonloader';

        // Check for localStorage support, as well as the primary options.
        if(!hasLocalStorage() || !url || !timeStamp) {
            return;
        }

        // Setup the constants.
        this.url = url;
        this.namespace = namespace;
        this.callbackName = callbackName;

        // If the passed timestamp matches the localStorage timestamp, attach the css from the users localStorage.
        if(global.localStorage[namespace + '_font_src'] && global.localStorage[namespace + '_font_timestamp'] === timeStamp) {
            this.attachStyles(global.localStorage[namespace + '_font_src']);

        // If the timestamp does NOT match, load and run the JSONP callback.
        } else {
            // Renew the timestamp.
            global.localStorage[namespace + '_font_timestamp'] = timeStamp;

            // Make the callback accessible for the JSONP.
            global[callbackName] = jsonpCallback.bind(this);

            // Load the JSONP and run the callback.
            this.loadJSONP(null, callback);
        }
    };

    /**
     * loadJSONP
     * @param url {String} Optional URL of the jsonp file.
     * @param callback {Function} Optional callback to execute after the script was loaded.
     * @returns {WebFontLoader}
     */
    WebFontLoader.prototype.loadJSONP = function(url, callback) {
        url = url || this.url;

        // Create the script element
        var script = doc.createElement('script');

        // Setup the script element.
        script.type = 'text/javascript';
        script.src = url;
        console.log(url, this);

        // Load the JSONP.
        headElement.appendChild(script);

        // Remove the temporary script element.
        headElement.removeChild(script);

        // Execute the callback as the JSONP file was loaded.
        if(callback) {
            script.onload = callback;
        }

        return this;
    };

    /**
     * attachStyles
     * @param css {String} The css which get's attached to the document.
     * @returns {WebFontLoader}
     */
    WebFontLoader.prototype.attachStyles = function(css) {
        // Create the inline style element
        var style = doc.createElement('style');

        // Setup the style element.
        style.type = 'text/css';
        style.id = this.namespace + '_fontStyles';
        style.appendChild(doc.createTextNode(css));

        // Append the element to the UA's <head>.
        headElement.appendChild(style);

        return this;
    };

    // Return the module.
    return WebFontLoader;
}));