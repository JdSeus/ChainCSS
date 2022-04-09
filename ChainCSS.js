(function() {
    ChainCSS = function (el) {

        var queue = []
        var executing = false;

        function queueOrExecute(fn) {
            if (queue.length || executing) {
                queue.push({fn: fn});
            } else {
                schedule(fn);
            }
        }

        async function schedule(fn) {
            executing = true;
            await fn();
            if (queue.length) {
                var item = queue.shift();
                schedule(item.fn);
            } else {
                executing = false;
            }  
        }

        const self = {
            element: el,

            keepClass: function(cssClass, time = 0) {
                var element = this.element;
                var fn = function() {
                    return new Promise((resolve) => {
                        element.classList.add(cssClass);
                        setTimeout(() => {
                            element.classList.remove(cssClass);  
                            resolve();
                        }, time);   
                    });
                }
                queueOrExecute(fn);
                return this;
            },

            addClass: function(cssClass, time = 0) {
                var element = this.element;
                var fn = function() {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            element.classList.add(cssClass);
                            resolve();
                        }, time); 
                    });
                }
                queueOrExecute(fn);
                return this;
            },

            removeClass: function(cssClass, time = 0) {
                var element = this.element;
                var fn = function() {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            element.classList.remove(cssClass);
                            resolve();
                        }, time);  
                    });
                }
                queueOrExecute(fn);
                return this;
            },

            transitionToClass(cssClass, transitionClass, time = 0) {
                var element = this.element;
                var fn = function() {
                    return new Promise((resolve) => {
                        element.classList.add(transitionClass);
                        setTimeout(() => {
                            element.classList.remove(transitionClass);  
                            element.classList.add(cssClass);
                            resolve();
                        }, time);   
                    });
                }
                queueOrExecute(fn);
                return this;
            },

            transitionToNotClass(cssClass, transitionClass, time = 0) {
                var element = this.element;
                var fn = function() {
                    return new Promise((resolve) => {
                        element.classList.add(transitionClass);
                        setTimeout(() => {
                            element.classList.remove(transitionClass);  
                            element.classList.remove(cssClass);
                            resolve();
                        }, time);   
                    });
                }
                queueOrExecute(fn);
                return this;
            },

            delay(foo, time = 0) {
                var element = this.element;
                var fn = function() {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            foo();
                            resolve();
                        }, time);   
                    });
                }
                queueOrExecute(fn);
                return this;
            },

            setAttribute(attribute, value, time = 0) {
                var element = this.element;

                var fn = function () {
                    element.setAttribute(attribute, value);
                }

                return this.delay(fn, time);
            },

            removeAttribute(attribute, time = 0) {
                var element = this.element;

                var fn = function () {
                    element.removeAttribute(attribute);
                }

                return this.delay(fn, time);
            },
        }

        return self;
    }
})();