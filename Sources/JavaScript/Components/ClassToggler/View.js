var componentPrototype = require('componentPrototype'),
    ClassToggler;

ClassToggler = componentPrototype.extend({
    initialize: function(el, dataset) {
        'use strict';

        this.el = el;
        this.target = document.querySelectorAll(dataset.target);
        this.set('class', dataset.class || 'active');

        this.el.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            this.toggleClass();
        }.bind(this));

        return this;
    },
    toggleClass: function() {
        'use strict';

        this.el.classList.toggle('active');
        this.target[0].classList.toggle(this.get('class'));

        return this;
    }
});

module.exports = ClassToggler;