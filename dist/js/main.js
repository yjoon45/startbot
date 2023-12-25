(function () {
    'use strict';

    const Navigation = {
        nav: document.querySelector('.navigation'),
        openTrigger: document.querySelector('.navigation-open'),
        closeTrigger: document.querySelector('.navigation-close'),
        body: document.querySelector('body'),
        handleNavigation() {
            var _a, _b, _c, _d;
            (_a = this.body) === null || _a === void 0 ? void 0 : _a.classList.add('overflow-hidden');
            if ((_b = this.nav) === null || _b === void 0 ? void 0 : _b.classList.contains('is-open')) {
                (_c = this.nav) === null || _c === void 0 ? void 0 : _c.classList.add('is-close');
            }
            else {
                (_d = this.nav) === null || _d === void 0 ? void 0 : _d.classList.add('is-open');
            }
        },
        removeAnimationClasses(e) {
            var _a, _b;
            const animationName = e.animationName;
            if (animationName === 'dropup') {
                (_a = this.nav) === null || _a === void 0 ? void 0 : _a.classList.remove('is-close', 'is-open');
                (_b = this.body) === null || _b === void 0 ? void 0 : _b.classList.remove('overflow-hidden');
            }
        },
        init() {
            var _a, _b, _c;
            (_a = this.openTrigger) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.handleNavigation.bind(this));
            (_b = this.closeTrigger) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.handleNavigation.bind(this));
            (_c = this.nav) === null || _c === void 0 ? void 0 : _c.addEventListener('animationend', this.removeAnimationClasses.bind(this));
        },
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT$1 = 'Expected a function';

    /** Used as references for various `Number` constants. */
    var NAN$1 = 0 / 0;

    /** `Object#toString` result references. */
    var symbolTag$1 = '[object Symbol]';

    /** Used to match leading and trailing whitespace. */
    var reTrim$1 = /^\s+|\s+$/g;

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

    /** Used to detect binary string values. */
    var reIsBinary$1 = /^0b[01]+$/i;

    /** Used to detect octal string values. */
    var reIsOctal$1 = /^0o[0-7]+$/i;

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt$1 = parseInt;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

    /** Detect free variable `self`. */
    var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

    /** Used for built-in method references. */
    var objectProto$1 = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString$1 = objectProto$1.toString;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMax$1 = Math.max,
        nativeMin$1 = Math.min;

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now$1 = function() {
      return root$1.Date.now();
    };

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce$2(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$1);
      }
      wait = toNumber$1(wait) || 0;
      if (isObject$1(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin$1(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now$1();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now$1());
      }

      function debounced() {
        var time = now$1(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$1);
      }
      if (isObject$1(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce$2(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject$1(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike$1(value) {
      return !!value && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol$1(value) {
      return typeof value == 'symbol' ||
        (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1);
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber$1(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol$1(value)) {
        return NAN$1;
      }
      if (isObject$1(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject$1(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim$1, '');
      var isBinary = reIsBinary$1.test(value);
      return (isBinary || reIsOctal$1.test(value))
        ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex$1.test(value) ? NAN$1 : +value);
    }

    var lodash_throttle = throttle;

    var throttle$1 = /*@__PURE__*/getDefaultExportFromCjs(lodash_throttle);

    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /** Used as references for various `Number` constants. */
    var NAN = 0 / 0;

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]';

    /** Used to match leading and trailing whitespace. */
    var reTrim = /^\s+|\s+$/g;

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i;

    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i;

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt = parseInt;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMax = Math.max,
        nativeMin = Math.min;

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = function() {
      return root.Date.now();
    };

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag);
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    var lodash_debounce = debounce;

    var debounce$1 = /*@__PURE__*/getDefaultExportFromCjs(lodash_debounce);

    var callback = function callback() {};

    function containsAOSNode(nodes) {
      var i = void 0,
          currentNode = void 0,
          result = void 0;

      for (i = 0; i < nodes.length; i += 1) {
        currentNode = nodes[i];

        if (currentNode.dataset && currentNode.dataset.aos) {
          return true;
        }

        result = currentNode.children && containsAOSNode(currentNode.children);

        if (result) {
          return true;
        }
      }

      return false;
    }

    function check(mutations) {
      if (!mutations) return;

      mutations.forEach(function (mutation) {
        var addedNodes = Array.prototype.slice.call(mutation.addedNodes);
        var removedNodes = Array.prototype.slice.call(mutation.removedNodes);
        var allNodes = addedNodes.concat(removedNodes);

        if (containsAOSNode(allNodes)) {
          return callback();
        }
      });
    }

    function getMutationObserver() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }

    function isSupported() {
      return !!getMutationObserver();
    }

    function ready(selector, fn) {
      var doc = window.document;
      var MutationObserver = getMutationObserver();

      var observer = new MutationObserver(check);
      callback = fn;

      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true,
        removedNodes: true
      });
    }

    var observer = { isSupported: isSupported, ready: ready };

    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /**
     * Device detector
     */

    var fullNameRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
    var prefixRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    var fullNameMobileRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
    var prefixMobileRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

    function ua() {
      return navigator.userAgent || navigator.vendor || window.opera || '';
    }

    var Detector = function () {
      function Detector() {
        classCallCheck(this, Detector);
      }

      createClass(Detector, [{
        key: 'phone',
        value: function phone() {
          var a = ua();
          return !!(fullNameRe.test(a) || prefixRe.test(a.substr(0, 4)));
        }
      }, {
        key: 'mobile',
        value: function mobile() {
          var a = ua();
          return !!(fullNameMobileRe.test(a) || prefixMobileRe.test(a.substr(0, 4)));
        }
      }, {
        key: 'tablet',
        value: function tablet() {
          return this.mobile() && !this.phone();
        }

        // http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c

      }, {
        key: 'ie11',
        value: function ie11() {
          return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
        }
      }]);
      return Detector;
    }();

    var detect = new Detector();

    /**
     * Adds multiple classes on node
     * @param {DOMNode} node
     * @param {array}  classes
     */
    var addClasses = function addClasses(node, classes) {
      return classes && classes.forEach(function (className) {
        return node.classList.add(className);
      });
    };

    /**
     * Removes multiple classes from node
     * @param {DOMNode} node
     * @param {array}  classes
     */
    var removeClasses = function removeClasses(node, classes) {
      return classes && classes.forEach(function (className) {
        return node.classList.remove(className);
      });
    };

    var fireEvent = function fireEvent(eventName, data) {
      var customEvent = void 0;

      if (detect.ie11()) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(eventName, true, true, { detail: data });
      } else {
        customEvent = new CustomEvent(eventName, {
          detail: data
        });
      }

      return document.dispatchEvent(customEvent);
    };

    /**
     * Set or remove aos-animate class
     * @param {node} el         element
     * @param {int}  top        scrolled distance
     */
    var applyClasses = function applyClasses(el, top) {
      var options = el.options,
          position = el.position,
          node = el.node;
          el.data;


      var hide = function hide() {
        if (!el.animated) return;

        removeClasses(node, options.animatedClassNames);
        fireEvent('aos:out', node);

        if (el.options.id) {
          fireEvent('aos:in:' + el.options.id, node);
        }

        el.animated = false;
      };

      var show = function show() {
        if (el.animated) return;

        addClasses(node, options.animatedClassNames);

        fireEvent('aos:in', node);
        if (el.options.id) {
          fireEvent('aos:in:' + el.options.id, node);
        }

        el.animated = true;
      };

      if (options.mirror && top >= position.out && !options.once) {
        hide();
      } else if (top >= position.in) {
        show();
      } else if (el.animated && !options.once) {
        hide();
      }
    };

    /**
     * Scroll logic - add or remove 'aos-animate' class on scroll
     *
     * @param  {array} $elements         array of elements nodes
     * @return {void}
     */
    var handleScroll = function handleScroll($elements) {
      return $elements.forEach(function (el, i) {
        return applyClasses(el, window.pageYOffset);
      });
    };

    /**
     * Get offset of DOM element
     * like there were no transforms applied on it
     *
     * @param  {Node} el [DOM element]
     * @return {Object} [top and left offset]
     */
    var offset = function offset(el) {
      var _x = 0;
      var _y = 0;

      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - (el.tagName != 'BODY' ? el.scrollLeft : 0);
        _y += el.offsetTop - (el.tagName != 'BODY' ? el.scrollTop : 0);
        el = el.offsetParent;
      }

      return {
        top: _y,
        left: _x
      };
    };

    /**
     * Get inline option with a fallback.
     *
     * @param  {Node} el [Dom element]
     * @param  {String} key [Option key]
     * @param  {String} fallback [Default (fallback) value]
     * @return {Mixed} [Option set with inline attributes or fallback value if not set]
     */

    var getInlineOption = (function (el, key, fallback) {
      var attr = el.getAttribute('data-aos-' + key);

      if (typeof attr !== 'undefined') {
        if (attr === 'true') {
          return true;
        } else if (attr === 'false') {
          return false;
        }
      }

      return attr || fallback;
    });

    /**
     * Calculate offset
     * basing on element's settings like:
     * - anchor
     * - offset
     *
     * @param  {Node} el [Dom element]
     * @return {Integer} [Final offset that will be used to trigger animation in good position]
     */

    var getPositionIn = function getPositionIn(el, defaultOffset, defaultAnchorPlacement) {
      var windowHeight = window.innerHeight;
      var anchor = getInlineOption(el, 'anchor');
      var inlineAnchorPlacement = getInlineOption(el, 'anchor-placement');
      var additionalOffset = Number(getInlineOption(el, 'offset', inlineAnchorPlacement ? 0 : defaultOffset));
      var anchorPlacement = inlineAnchorPlacement || defaultAnchorPlacement;
      var finalEl = el;

      if (anchor && document.querySelectorAll(anchor)) {
        finalEl = document.querySelectorAll(anchor)[0];
      }

      var triggerPoint = offset(finalEl).top - windowHeight;

      switch (anchorPlacement) {
        case 'top-bottom':
          // Default offset
          break;
        case 'center-bottom':
          triggerPoint += finalEl.offsetHeight / 2;
          break;
        case 'bottom-bottom':
          triggerPoint += finalEl.offsetHeight;
          break;
        case 'top-center':
          triggerPoint += windowHeight / 2;
          break;
        case 'center-center':
          triggerPoint += windowHeight / 2 + finalEl.offsetHeight / 2;
          break;
        case 'bottom-center':
          triggerPoint += windowHeight / 2 + finalEl.offsetHeight;
          break;
        case 'top-top':
          triggerPoint += windowHeight;
          break;
        case 'bottom-top':
          triggerPoint += windowHeight + finalEl.offsetHeight;
          break;
        case 'center-top':
          triggerPoint += windowHeight + finalEl.offsetHeight / 2;
          break;
      }

      return triggerPoint + additionalOffset;
    };

    var getPositionOut = function getPositionOut(el, defaultOffset) {
      var anchor = getInlineOption(el, 'anchor');
      var additionalOffset = getInlineOption(el, 'offset', defaultOffset);
      var finalEl = el;

      if (anchor && document.querySelectorAll(anchor)) {
        finalEl = document.querySelectorAll(anchor)[0];
      }

      var elementOffsetTop = offset(finalEl).top;

      return elementOffsetTop + finalEl.offsetHeight - additionalOffset;
    };

    /* Clearing variables */

    var prepare = function prepare($elements, options) {
      $elements.forEach(function (el, i) {
        var mirror = getInlineOption(el.node, 'mirror', options.mirror);
        var once = getInlineOption(el.node, 'once', options.once);
        var id = getInlineOption(el.node, 'id');
        var customClassNames = options.useClassNames && el.node.getAttribute('data-aos');

        var animatedClassNames = [options.animatedClassName].concat(customClassNames ? customClassNames.split(' ') : []).filter(function (className) {
          return typeof className === 'string';
        });

        if (options.initClassName) {
          el.node.classList.add(options.initClassName);
        }

        el.position = {
          in: getPositionIn(el.node, options.offset, options.anchorPlacement),
          out: mirror && getPositionOut(el.node, options.offset)
        };

        el.options = {
          once: once,
          mirror: mirror,
          animatedClassNames: animatedClassNames,
          id: id
        };
      });

      return $elements;
    };

    /**
     * Generate initial array with elements as objects
     * This array will be extended later with elements attributes values
     * like 'position'
     */
    var elements = (function () {
      var elements = document.querySelectorAll('[data-aos]');
      return Array.prototype.map.call(elements, function (node) {
        return { node: node };
      });
    });

    /**
     * *******************************************************
     * AOS (Animate on scroll) - wowjs alternative
     * made to animate elements on scroll in both directions
     * *******************************************************
     */

    /**
     * Private variables
     */
    var $aosElements = [];
    var initialized = false;

    /**
     * Default options
     */
    var options = {
      offset: 120,
      delay: 0,
      easing: 'ease',
      duration: 400,
      disable: false,
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
      startEvent: 'DOMContentLoaded',
      animatedClassName: 'aos-animate',
      initClassName: 'aos-init',
      useClassNames: false,
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50
    };

    // Detect not supported browsers (<=IE9)
    // http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
    var isBrowserNotSupported = function isBrowserNotSupported() {
      return document.all && !window.atob;
    };

    var initializeScroll = function initializeScroll() {
      // Extend elements objects in $aosElements with their positions
      $aosElements = prepare($aosElements, options);
      // Perform scroll event, to refresh view and show/hide elements
      handleScroll($aosElements);

      /**
       * Handle scroll event to animate elements on scroll
       */
      window.addEventListener('scroll', throttle$1(function () {
        handleScroll($aosElements, options.once);
      }, options.throttleDelay));

      return $aosElements;
    };

    /**
     * Refresh AOS
     */
    var refresh = function refresh() {
      var initialize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // Allow refresh only when it was first initialized on startEvent
      if (initialize) initialized = true;
      if (initialized) initializeScroll();
    };

    /**
     * Hard refresh
     * create array with new elements and trigger refresh
     */
    var refreshHard = function refreshHard() {
      $aosElements = elements();

      if (isDisabled(options.disable) || isBrowserNotSupported()) {
        return disable();
      }

      refresh();
    };

    /**
     * Disable AOS
     * Remove all attributes to reset applied styles
     */
    var disable = function disable() {
      $aosElements.forEach(function (el, i) {
        el.node.removeAttribute('data-aos');
        el.node.removeAttribute('data-aos-easing');
        el.node.removeAttribute('data-aos-duration');
        el.node.removeAttribute('data-aos-delay');

        if (options.initClassName) {
          el.node.classList.remove(options.initClassName);
        }

        if (options.animatedClassName) {
          el.node.classList.remove(options.animatedClassName);
        }
      });
    };

    /**
     * Check if AOS should be disabled based on provided setting
     */
    var isDisabled = function isDisabled(optionDisable) {
      return optionDisable === true || optionDisable === 'mobile' && detect.mobile() || optionDisable === 'phone' && detect.phone() || optionDisable === 'tablet' && detect.tablet() || typeof optionDisable === 'function' && optionDisable() === true;
    };

    /**
     * Initializing AOS
     * - Create options merging defaults with user defined options
     * - Set attributes on <body> as global setting - css relies on it
     * - Attach preparing elements to options.startEvent,
     *   window resize and orientation change
     * - Attach function that handle scroll and everything connected to it
     *   to window scroll event and fire once document is ready to set initial state
     */
    var init = function init(settings) {
      options = _extends(options, settings);

      // Create initial array with elements -> to be fullfilled later with prepare()
      $aosElements = elements();

      /**
       * Disable mutation observing if not supported
       */
      if (!options.disableMutationObserver && !observer.isSupported()) {
        console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    ');
        options.disableMutationObserver = true;
      }

      /**
       * Observe [aos] elements
       * If something is loaded by AJAX
       * it'll refresh plugin automatically
       */
      if (!options.disableMutationObserver) {
        observer.ready('[data-aos]', refreshHard);
      }

      /**
       * Don't init plugin if option `disable` is set
       * or when browser is not supported
       */
      if (isDisabled(options.disable) || isBrowserNotSupported()) {
        return disable();
      }

      /**
       * Set global settings on body, based on options
       * so CSS can use it
       */
      document.querySelector('body').setAttribute('data-aos-easing', options.easing);

      document.querySelector('body').setAttribute('data-aos-duration', options.duration);

      document.querySelector('body').setAttribute('data-aos-delay', options.delay);

      /**
       * Handle initializing
       */
      if (['DOMContentLoaded', 'load'].indexOf(options.startEvent) === -1) {
        // Listen to options.startEvent and initialize AOS
        document.addEventListener(options.startEvent, function () {
          refresh(true);
        });
      } else {
        window.addEventListener('load', function () {
          refresh(true);
        });
      }

      if (options.startEvent === 'DOMContentLoaded' && ['complete', 'interactive'].indexOf(document.readyState) > -1) {
        // Initialize AOS if default startEvent was already fired
        refresh(true);
      }

      /**
       * Refresh plugin on window resize or orientation change
       */
      window.addEventListener('resize', debounce$1(refresh, options.debounceDelay, true));

      window.addEventListener('orientationchange', debounce$1(refresh, options.debounceDelay, true));

      return $aosElements;
    };

    /**
     * Export Public API
     */

    var aos = {
      init: init,
      refresh: refresh,
      refreshHard: refreshHard
    };

    $(() => {
        const options = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplaySpeed: 5000,
            autoplay: true,
            arrows: false,
            dots: true,
            appendDots: '.feature-slider-dots',
        };
        const featureSlider = $('.feature-slider').slick(options);
        const sliderLogo = featureSlider.next('.slider-logo');
        featureSlider.on('afterChange', handleRotation);
        function handleRotation(_slick, { currentSlide }) {
            var _a;
            const slickOptions = featureSlider.slick('getSlick');
            const slides = ((_a = slickOptions.$slides) === null || _a === void 0 ? void 0 : _a.length) || 0;
            const angle = 360 / slides;
            let ang = angle * currentSlide;
            sliderLogo.css({ '--angle': `${ang}deg` });
        }
    });

    aos.init({ once: true });
    Navigation.init();

})();
