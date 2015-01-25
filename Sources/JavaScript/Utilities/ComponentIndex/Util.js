var ComponentIndex = function() {
    'use strict';

    this.index = {};
};
ComponentIndex.prototype.register = function(key, Constructor) {
    'use strict';

    if(!key || !Constructor || typeof key !== 'string' || typeof Constructor !== 'function') {
        return this;
    }

    if(this.index[key]) {
        console.info('Component ' + key + ' was already registered in this index.', this);
    } else {
        this.index[key] = Constructor;
    }

    return this;
};
ComponentIndex.prototype.getIndex = function() {
    'use strict';

    return this.index;
};



module.exports = ComponentIndex;