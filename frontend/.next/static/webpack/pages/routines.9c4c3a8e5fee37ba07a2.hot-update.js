webpackHotUpdate_N_E("pages/routines",{

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-modal/lib/components/Modal.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/components/Modal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "./node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent && parent.contains(_this.node)) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  preventScroll: false,
  parentSelector: function parentSelector() {
    return document.body;
  },
  overlayElement: function overlayElement(props, contentEl) {
    return _react2.default.createElement(
      "div",
      props,
      contentEl
    );
  },
  contentElement: function contentElement(props, children) {
    return _react2.default.createElement(
      "div",
      props,
      children
    );
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

exports.default = Modal;

/***/ }),

/***/ "./node_modules/react-modal/lib/components/ModalPortal.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal/lib/components/ModalPortal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "./node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "./node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "./node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _portalOpenInstances = __webpack_require__(/*! ../helpers/portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

__webpack_require__(/*! ../helpers/bodyTrap */ "./node_modules/react-modal/lib/helpers/bodyTrap.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus(_this.props.preventScroll);
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen({
              overlayEl: _this.overlay,
              contentEl: _this.content
            });
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles,
          children = _props2.children;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      if (this.shouldBeClosed()) {
        return null;
      }

      var overlayProps = {
        ref: this.setOverlayRef,
        className: this.buildClassName("overlay", overlayClassName),
        style: _extends({}, overlayStyles, this.props.style.overlay),
        onClick: this.handleOverlayOnClick,
        onMouseDown: this.handleOverlayOnMouseDown
      };

      var contentProps = _extends({
        id: id,
        ref: this.setContentRef,
        style: _extends({}, contentStyles, this.props.style.content),
        className: this.buildClassName("content", className),
        tabIndex: "-1",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContentOnMouseDown,
        onMouseUp: this.handleContentOnMouseUp,
        onClick: this.handleContentOnClick,
        role: this.props.role,
        "aria-label": this.props.contentLabel
      }, this.attributesFromObject("aria", _extends({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
        "data-testid": this.props.testId
      });

      var contentElement = this.props.contentElement(contentProps, children);
      return this.props.overlayElement(overlayProps, contentElement);
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/bodyTrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/bodyTrap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _portalOpenInstances = __webpack_require__(/*! ./portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

function focusContent() {
  if (instances.length === 0) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn("React-Modal: Open instances > 0 expected");
    }
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before || !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/classList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/classList.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n";
    }

    classes = document.body.className;

    // eslint-disable-next-line max-len
    buffer += "\n\ndoc.body (" + classes + "):\n";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
    }

    buffer += "\n";

    // eslint-disable-next-line no-console
    console.log(buffer);
  }
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/focusManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/focusManager.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var preventScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus({ preventScroll: preventScroll });
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/portalOpenInstances.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Cannot register modal instance that's already open");
      }
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
      }
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

exports.default = portalOpenInstances;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/scopeTab.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/tabbable.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/tabbable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
  // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(/*! ./components/Modal */ "./node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./pages/routines.js":
/*!***************************!*\
  !*** ./pages/routines.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Routines; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Navigation_IconNavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navigation/IconNavBar */ "./components/Navigation/IconNavBar.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _components_NewRoutineLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NewRoutineLink */ "./components/NewRoutineLink.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");






var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\pages\\routines.js",
    _s = $RefreshSig$();



function _templateObject2() {
  var data = Object(C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  font-size: 1.15rem;\n  // border-top: 0.5px solid lightgray;\n  border-bottom: 0.5px solid lightgray;\n  // padding: 0.85rem 0;\n  padding: 0.85rem 0;\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  // border: 1px dashed blue;\n  width: 100%;\n  padding-left: 1.25rem;\n  padding-bottom: 6.5rem;\n  overflow: scroll;\n  height: 80vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var RoutinesContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());
_c = RoutinesContainer;
var Routine = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].p(_templateObject2());
_c2 = Routine;
function Routines() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      routine = _useState[0],
      setRoutine = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    function doFetch() {
      return _doFetch.apply(this, arguments);
    }

    function _doFetch() {
      _doFetch = Object(C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var url, res, body;
        return C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = 'http://localhost:3000/routines';
                _context.next = 3;
                return fetch('http://localhost:3000/routines', {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  credentials: 'include'
                });

              case 3:
                res = _context.sent;

                if (res.status === 403) {
                  console.log('403 error');
                  router.push('/');
                }

                _context.next = 7;
                return res.json();

              case 7:
                body = _context.sent;
                console.log('body is ...', body);
                setRoutine(body.routinesResults);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _doFetch.apply(this, arguments);
    }

    doFetch();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-1760265450" + " " + "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        className: "jsx-1760265450",
        children: "Routines"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-1760265450"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NewRoutineLink__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PageTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Routines"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "jsx-1760265450",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RoutinesContainer, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: routine.map(function (routine, idx) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Routine, {
              children: routine.routine_name
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 20
            }, _this);
          })
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navigation_IconNavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "1658831784",
      children: ".container.jsx-1760265450{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-1760265450{width:100%;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1760265450{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1760265450 img.jsx-1760265450{margin-left:0.5rem;}footer.jsx-1760265450 a.jsx-1760265450{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-1760265450{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1760265450 a.jsx-1760265450{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1760265450 a.jsx-1760265450:hover,.title.jsx-1760265450 a.jsx-1760265450:focus,.title.jsx-1760265450 a.jsx-1760265450:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1760265450{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1760265450,.description.jsx-1760265450{text-align:center;}.description.jsx-1760265450{line-height:1.5;font-size:1.5rem;}code.jsx-1760265450{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1760265450{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-1760265450{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1760265450:hover,.card.jsx-1760265450:focus,.card.jsx-1760265450:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1760265450 h3.jsx-1760265450{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1760265450 p.jsx-1760265450{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1760265450{height:1em;}@media (max-width:600px){.grid.jsx-1760265450{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2ltd29vZGZpZWxkXFxEb2N1bWVudHNcXEdpdEh1Ylxcd29ya291dC10cmFja2VyXFxmcm9udGVuZFxccGFnZXNcXHJvdXRpbmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGa0IsQUFHNEIsQUFZTixBQVNBLEFBU1EsQUFJTixBQU1DLEFBS0EsQUFPWSxBQUlqQixBQU9TLEFBSUYsQUFLRyxBQVNOLEFBVUQsQUFjRSxBQUtJLEFBS1QsQUFNRSxBQUtFLFNBckVJLEFBMkRDLEVBdkdYLEFBU00sQUFvR2YsQUFLMEIsQ0FuQ1QsRUFuRE0sQUFLQSxBQTREQSxFQXRDSixDQWxFSixDQThEZixBQStDbUIsQ0FoRm5CLEFBMENvQixLQWxEVyxFQW1DZCxDQTJEQyxNQWhEbEIsRUFzQ0EsQUFLQSxFQXRDa0IsSUFmbEIsRUEyREEsQ0F4R2UsU0FVQSxBQW1ESSxPQXRCbkIsSUFYQSxBQUtBLE1BOEJzRSxJQTFDN0MsQUErQ0osSUFXSixXQW1DZixFQTdIc0IsRUEyRk4sZ0JBQ0YsU0FoRlEsS0FpRkQsSUF2RUUsd0NBMERBLEVBL0VBLElBZ0NKLEFBNkRNLGtCQW5CM0IsS0E3RHFCLEVBaUZBLG1CQUNrQyxTQXpFbEMsd0NBV3JCLEFBK0NpQixFQS9FSSxxQkFhckIsOEJBU0EsSUEyRGtCLE1BY2xCLFVBYmtCLGdCQUNsQixNQWxGQSIsImZpbGUiOiJDOlxcVXNlcnNcXGtpbXdvb2RmaWVsZFxcRG9jdW1lbnRzXFxHaXRIdWJcXHdvcmtvdXQtdHJhY2tlclxcZnJvbnRlbmRcXHBhZ2VzXFxyb3V0aW5lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEljb25OYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0ljb25OYXZCYXInO1xyXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVRpdGxlJ1xyXG5pbXBvcnQgTmV3Um91dGluZUxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdSb3V0aW5lTGluaydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCdcclxuXHJcblxyXG5pbXBvcnQgeyBBaU91dGxpbmVQbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5jb25zdCBSb3V0aW5lc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2LjVyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbmBcclxuXHJcbmNvbnN0IFJvdXRpbmUgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgLy8gYm9yZGVyLXRvcDogMC41cHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAvLyBwYWRkaW5nOiAwLjg1cmVtIDA7XHJcbiAgcGFkZGluZzogMC44NXJlbSAwO1xyXG4gIG1hcmdpbjogMDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGluZXMoKSB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbcm91dGluZSwgc2V0Um91dGluZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKCkge1xyXG4gICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yb3V0aW5lcyc7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcm91dGluZXMnLCB7IFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnNDAzIGVycm9yJyk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coJ2JvZHkgaXMgLi4uJywgYm9keSk7XHJcbiAgICAgIHNldFJvdXRpbmUoYm9keS5yb3V0aW5lc1Jlc3VsdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvRmV0Y2goKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Um91dGluZXM8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPE5ld1JvdXRpbmVMaW5rIC8+XHJcbiAgICAgIDxQYWdlVGl0bGUgbmFtZT1cIlJvdXRpbmVzXCIvPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPFJvdXRpbmVzQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3JvdXRpbmUubWFwKChyb3V0aW5lLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSb3V0aW5lIGtleT17aWR4fT57cm91dGluZS5yb3V0aW5lX25hbWV9PC9Sb3V0aW5lPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvUm91dGluZXNDb250YWluZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxJY29uTmF2QmFyIC8+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAvLyAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgIC8vIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxyXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxyXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSxcclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxyXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\kimwoodfield\\\\Documents\\\\GitHub\\\\workout-tracker\\\\frontend\\\\pages\\\\routines.js */"
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "3379920139",
      children: "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2ltd29vZGZpZWxkXFxEb2N1bWVudHNcXEdpdEh1Ylxcd29ya291dC10cmFja2VyXFxmcm9udGVuZFxccGFnZXNcXHJvdXRpbmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJOeUIsQUFJcUIsQUFRWSxVQVBiLFNBR0csR0FLZCxtSUFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXGtpbXdvb2RmaWVsZFxcRG9jdW1lbnRzXFxHaXRIdWJcXHdvcmtvdXQtdHJhY2tlclxcZnJvbnRlbmRcXHBhZ2VzXFxyb3V0aW5lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEljb25OYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0ljb25OYXZCYXInO1xyXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVRpdGxlJ1xyXG5pbXBvcnQgTmV3Um91dGluZUxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdSb3V0aW5lTGluaydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCdcclxuXHJcblxyXG5pbXBvcnQgeyBBaU91dGxpbmVQbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5jb25zdCBSb3V0aW5lc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2LjVyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbmBcclxuXHJcbmNvbnN0IFJvdXRpbmUgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgLy8gYm9yZGVyLXRvcDogMC41cHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAvLyBwYWRkaW5nOiAwLjg1cmVtIDA7XHJcbiAgcGFkZGluZzogMC44NXJlbSAwO1xyXG4gIG1hcmdpbjogMDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGluZXMoKSB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbcm91dGluZSwgc2V0Um91dGluZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKCkge1xyXG4gICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yb3V0aW5lcyc7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcm91dGluZXMnLCB7IFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnNDAzIGVycm9yJyk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coJ2JvZHkgaXMgLi4uJywgYm9keSk7XHJcbiAgICAgIHNldFJvdXRpbmUoYm9keS5yb3V0aW5lc1Jlc3VsdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvRmV0Y2goKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Um91dGluZXM8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPE5ld1JvdXRpbmVMaW5rIC8+XHJcbiAgICAgIDxQYWdlVGl0bGUgbmFtZT1cIlJvdXRpbmVzXCIvPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPFJvdXRpbmVzQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3JvdXRpbmUubWFwKChyb3V0aW5lLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSb3V0aW5lIGtleT17aWR4fT57cm91dGluZS5yb3V0aW5lX25hbWV9PC9Sb3V0aW5lPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvUm91dGluZXNDb250YWluZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxJY29uTmF2QmFyIC8+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAvLyAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgIC8vIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxyXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxyXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSxcclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxyXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\kimwoodfield\\\\Documents\\\\GitHub\\\\workout-tracker\\\\frontend\\\\pages\\\\routines.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_s(Routines, "/lulqZZncFZ6OrQsqsofpp7ddP8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
});

_c3 = Routines;

var _c, _c2, _c3;

$RefreshReg$(_c, "RoutinesContainer");
$RefreshReg$(_c2, "Routine");
$RefreshReg$(_c3, "Routines");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2V4ZW52L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2NvbXBvbmVudHMvTW9kYWxQb3J0YWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9hcmlhQXBwSGlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9ib2R5VHJhcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2NsYXNzTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2ZvY3VzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL3BvcnRhbE9wZW5JbnN0YW5jZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zYWZlSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zY29wZVRhYi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL3RhYmJhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd2FybmluZy93YXJuaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9yb3V0aW5lcy5qcyJdLCJuYW1lcyI6WyJSb3V0aW5lc0NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlJvdXRpbmUiLCJwIiwiUm91dGluZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInJvdXRpbmUiLCJzZXRSb3V0aW5lIiwidXNlRWZmZWN0IiwiZG9GZXRjaCIsInVybCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwicmVzIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJqc29uIiwiYm9keSIsInJvdXRpbmVzUmVzdWx0cyIsIm1hcCIsImlkeCIsInJvdXRpbmVfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEtBQUssSUFBNEU7QUFDakYsRUFBRSxtQ0FBTztBQUNUO0FBQ0EsR0FBRztBQUFBLG9HQUFDO0FBQ0osRUFBRSxNQUFNLEVBSU47O0FBRUYsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZDRDtB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Q0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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dUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzR0FBc0cscUNBQXFDO0FBQzNJO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7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OUQ7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBOztBQUVB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akIsT0FBRCxFQUFVa0IsR0FBVixFQUFrQjtBQUM3QixnQ0FBTyxxRUFBQyxPQUFEO0FBQUEsd0JBQW9CbEIsT0FBTyxDQUFDbUI7QUFBNUIsZUFBY0QsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0QsV0FGQTtBQURIO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQXdCRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUxEOztHQTdNdUJ0QixRO1VBRVBFLHNEOzs7TUFGT0YsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb3V0aW5lcy45YzRjM2E4ZTVmZWUzN2JhMDdhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICAvLyBVc2UgdGhlIHNldFN0YXRlKCkgdXBkYXRlciB0byBlbnN1cmUgc3RhdGUgaXNuJ3Qgc3RhbGUgaW4gY2VydGFpbiBlZGdlIGNhc2VzLlxuICBmdW5jdGlvbiB1cGRhdGVyKHByZXZTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlIDogbnVsbDtcbiAgfVxuICAvLyBCaW5kaW5nIFwidGhpc1wiIGlzIGltcG9ydGFudCBmb3Igc2hhbGxvdyByZW5kZXJlciBzdXBwb3J0LlxuICB0aGlzLnNldFN0YXRlKHVwZGF0ZXIuYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ib2R5T3BlbkNsYXNzTmFtZSA9IGV4cG9ydHMucG9ydGFsQ2xhc3NOYW1lID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX01vZGFsUG9ydGFsID0gcmVxdWlyZShcIi4vTW9kYWxQb3J0YWxcIik7XG5cbnZhciBfTW9kYWxQb3J0YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxQb3J0YWwpO1xuXG52YXIgX2FyaWFBcHBIaWRlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2FyaWFBcHBIaWRlclwiKTtcblxudmFyIGFyaWFBcHBIaWRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hcmlhQXBwSGlkZXIpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3NhZmVIVE1MRWxlbWVudFwiKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2FmZUhUTUxFbGVtZW50KTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHBvcnRhbENsYXNzTmFtZSA9IGV4cG9ydHMucG9ydGFsQ2xhc3NOYW1lID0gXCJSZWFjdE1vZGFsUG9ydGFsXCI7XG52YXIgYm9keU9wZW5DbGFzc05hbWUgPSBleHBvcnRzLmJvZHlPcGVuQ2xhc3NOYW1lID0gXCJSZWFjdE1vZGFsX19Cb2R5LS1vcGVuXCI7XG5cbnZhciBpc1JlYWN0MTYgPSBfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSAmJiBfcmVhY3REb20yLmRlZmF1bHQuY3JlYXRlUG9ydGFsICE9PSB1bmRlZmluZWQ7XG5cbnZhciBnZXRDcmVhdGVQb3J0YWwgPSBmdW5jdGlvbiBnZXRDcmVhdGVQb3J0YWwoKSB7XG4gIHJldHVybiBpc1JlYWN0MTYgPyBfcmVhY3REb20yLmRlZmF1bHQuY3JlYXRlUG9ydGFsIDogX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyO1xufTtcblxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChwYXJlbnRTZWxlY3Rvcikge1xuICByZXR1cm4gcGFyZW50U2VsZWN0b3IoKTtcbn1cblxudmFyIE1vZGFsID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1vZGFsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb2RhbCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IE1vZGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWwpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5yZW1vdmVQb3J0YWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNSZWFjdDE2ICYmIF9yZWFjdERvbTIuZGVmYXVsdC51bm1vdW50Q29tcG9uZW50QXROb2RlKF90aGlzLm5vZGUpO1xuICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQoX3RoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY29udGFpbnMoX3RoaXMubm9kZSkpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF90aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogXCJwYXJlbnRTZWxlY3RvclwiIHByb3AgZGlkIG5vdCByZXR1cm5lZCBhbnkgRE9NICcgKyBcImVsZW1lbnQuIE1ha2Ugc3VyZSB0aGF0IHRoZSBwYXJlbnQgZWxlbWVudCBpcyB1bm1vdW50ZWQgdG8gXCIgKyBcImF2b2lkIGFueSBtZW1vcnkgbGVha3MuXCIpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLnBvcnRhbFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLnBvcnRhbCA9IHJlZjtcbiAgICB9LCBfdGhpcy5yZW5kZXJQb3J0YWwgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHZhciBjcmVhdGVQb3J0YWwgPSBnZXRDcmVhdGVQb3J0YWwoKTtcbiAgICAgIHZhciBwb3J0YWwgPSBjcmVhdGVQb3J0YWwoX3RoaXMsIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Nb2RhbFBvcnRhbDIuZGVmYXVsdCwgX2V4dGVuZHMoeyBkZWZhdWx0U3R5bGVzOiBNb2RhbC5kZWZhdWx0U3R5bGVzIH0sIHByb3BzKSksIF90aGlzLm5vZGUpO1xuICAgICAgX3RoaXMucG9ydGFsUmVmKHBvcnRhbCk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSkgcmV0dXJuO1xuXG4gICAgICBpZiAoIWlzUmVhY3QxNikge1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMucG9ydGFsQ2xhc3NOYW1lO1xuXG4gICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudCh0aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuXG4gICAgICAhaXNSZWFjdDE2ICYmIHRoaXMucmVuZGVyUG9ydGFsKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBwcmV2UGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudChwcmV2UHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgdmFyIG5leHRQYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHRoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIHsgcHJldlBhcmVudDogcHJldlBhcmVudCwgbmV4dFBhcmVudDogbmV4dFBhcmVudCB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgXywgc25hcHNob3QpIHtcbiAgICAgIGlmICghX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00pIHJldHVybjtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzT3BlbiA9IF9wcm9wcy5pc09wZW4sXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lID0gX3Byb3BzLnBvcnRhbENsYXNzTmFtZTtcblxuXG4gICAgICBpZiAocHJldlByb3BzLnBvcnRhbENsYXNzTmFtZSAhPT0gcG9ydGFsQ2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc05hbWUgPSBwb3J0YWxDbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2UGFyZW50ID0gc25hcHNob3QucHJldlBhcmVudCxcbiAgICAgICAgICBuZXh0UGFyZW50ID0gc25hcHNob3QubmV4dFBhcmVudDtcblxuICAgICAgaWYgKG5leHRQYXJlbnQgIT09IHByZXZQYXJlbnQpIHtcbiAgICAgICAgcHJldlBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICAgICAgICBuZXh0UGFyZW50LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFN0b3AgdW5uZWNlc3NhcnkgcmVuZGVycyBpZiBtb2RhbCBpcyByZW1haW5pbmcgY2xvc2VkXG4gICAgICBpZiAoIXByZXZQcm9wcy5pc09wZW4gJiYgIWlzT3BlbikgcmV0dXJuO1xuXG4gICAgICAhaXNSZWFjdDE2ICYmIHRoaXMucmVuZGVyUG9ydGFsKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICghX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00gfHwgIXRoaXMubm9kZSB8fCAhdGhpcy5wb3J0YWwpIHJldHVybjtcblxuICAgICAgdmFyIHN0YXRlID0gdGhpcy5wb3J0YWwuc3RhdGU7XG4gICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIHZhciBjbG9zZXNBdCA9IHN0YXRlLmlzT3BlbiAmJiB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TICYmIChzdGF0ZS5jbG9zZXNBdCB8fCBub3cgKyB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TKTtcblxuICAgICAgaWYgKGNsb3Nlc0F0KSB7XG4gICAgICAgIGlmICghc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbC5jbG9zZVdpdGhUaW1lb3V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMucmVtb3ZlUG9ydGFsLCBjbG9zZXNBdCAtIG5vdyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZVBvcnRhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSB8fCAhaXNSZWFjdDE2KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMubm9kZSAmJiBpc1JlYWN0MTYpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNyZWF0ZVBvcnRhbCA9IGdldENyZWF0ZVBvcnRhbCgpO1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTW9kYWxQb3J0YWwyLmRlZmF1bHQsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLnBvcnRhbFJlZixcbiAgICAgICAgZGVmYXVsdFN0eWxlczogTW9kYWwuZGVmYXVsdFN0eWxlc1xuICAgICAgfSwgdGhpcy5wcm9wcykpLCB0aGlzLm5vZGUpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcInNldEFwcEVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QXBwRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBhcmlhQXBwSGlkZXIuc2V0RWxlbWVudChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGlzT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb250ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KSxcbiAgcG9ydGFsQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYm9keU9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBodG1sT3BlbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBiYXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFmdGVyT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBiZWZvcmVDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KV0pLFxuICBvdmVybGF5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGJhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJlZm9yZUNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pXSksXG4gIGFwcEVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuaW5zdGFuY2VPZihfc2FmZUhUTUxFbGVtZW50Mi5kZWZhdWx0KSxcbiAgb25BZnRlck9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25SZXF1ZXN0Q2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY2xvc2VUaW1lb3V0TVM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBhcmlhSGlkZUFwcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRGb2N1c0FmdGVyUmVuZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkUmV0dXJuRm9jdXNBZnRlckNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHByZXZlbnRTY3JvbGw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcGFyZW50U2VsZWN0b3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgYXJpYTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGRhdGE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICByb2xlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY29udGVudExhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc2hvdWxkQ2xvc2VPbkVzYzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBvdmVybGF5UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNvbnRlbnRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBvdmVybGF5RWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjb250ZW50RWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBwb3J0YWxDbGFzc05hbWU6IHBvcnRhbENsYXNzTmFtZSxcbiAgYm9keU9wZW5DbGFzc05hbWU6IGJvZHlPcGVuQ2xhc3NOYW1lLFxuICByb2xlOiBcImRpYWxvZ1wiLFxuICBhcmlhSGlkZUFwcDogdHJ1ZSxcbiAgY2xvc2VUaW1lb3V0TVM6IDAsXG4gIHNob3VsZEZvY3VzQWZ0ZXJSZW5kZXI6IHRydWUsXG4gIHNob3VsZENsb3NlT25Fc2M6IHRydWUsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXG4gIHNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZTogdHJ1ZSxcbiAgcHJldmVudFNjcm9sbDogZmFsc2UsXG4gIHBhcmVudFNlbGVjdG9yOiBmdW5jdGlvbiBwYXJlbnRTZWxlY3RvcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgfSxcbiAgb3ZlcmxheUVsZW1lbnQ6IGZ1bmN0aW9uIG92ZXJsYXlFbGVtZW50KHByb3BzLCBjb250ZW50RWwpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgcHJvcHMsXG4gICAgICBjb250ZW50RWxcbiAgICApO1xuICB9LFxuICBjb250ZW50RWxlbWVudDogZnVuY3Rpb24gY29udGVudEVsZW1lbnQocHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHByb3BzLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9XG59O1xuTW9kYWwuZGVmYXVsdFN0eWxlcyA9IHtcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpXCJcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjQwcHhcIixcbiAgICBsZWZ0OiBcIjQwcHhcIixcbiAgICByaWdodDogXCI0MHB4XCIsXG4gICAgYm90dG9tOiBcIjQwcHhcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgcGFkZGluZzogXCIyMHB4XCJcbiAgfVxufTtcblxuXG4oMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoTW9kYWwpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNb2RhbDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2ZvY3VzTWFuYWdlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2ZvY3VzTWFuYWdlclwiKTtcblxudmFyIGZvY3VzTWFuYWdlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9mb2N1c01hbmFnZXIpO1xuXG52YXIgX3Njb3BlVGFiID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc2NvcGVUYWJcIik7XG5cbnZhciBfc2NvcGVUYWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NvcGVUYWIpO1xuXG52YXIgX2FyaWFBcHBIaWRlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2FyaWFBcHBIaWRlclwiKTtcblxudmFyIGFyaWFBcHBIaWRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hcmlhQXBwSGlkZXIpO1xuXG52YXIgX2NsYXNzTGlzdCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2NsYXNzTGlzdFwiKTtcblxudmFyIGNsYXNzTGlzdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jbGFzc0xpc3QpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3NhZmVIVE1MRWxlbWVudFwiKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2FmZUhUTUxFbGVtZW50KTtcblxudmFyIF9wb3J0YWxPcGVuSW5zdGFuY2VzID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcG9ydGFsT3Blbkluc3RhbmNlc1wiKTtcblxudmFyIF9wb3J0YWxPcGVuSW5zdGFuY2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvcnRhbE9wZW5JbnN0YW5jZXMpO1xuXG5yZXF1aXJlKFwiLi4vaGVscGVycy9ib2R5VHJhcFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBzbyB0aGF0IG91ciBDU1MgaXMgc3RhdGljYWxseSBhbmFseXphYmxlXG52YXIgQ0xBU1NfTkFNRVMgPSB7XG4gIG92ZXJsYXk6IFwiUmVhY3RNb2RhbF9fT3ZlcmxheVwiLFxuICBjb250ZW50OiBcIlJlYWN0TW9kYWxfX0NvbnRlbnRcIlxufTtcblxudmFyIFRBQl9LRVkgPSA5O1xudmFyIEVTQ19LRVkgPSAyNztcblxudmFyIGFyaWFIaWRkZW5JbnN0YW5jZXMgPSAwO1xuXG52YXIgTW9kYWxQb3J0YWwgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTW9kYWxQb3J0YWwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1vZGFsUG9ydGFsKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsUG9ydGFsKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNb2RhbFBvcnRhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsUG9ydGFsKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc2V0T3ZlcmxheVJlZiA9IGZ1bmN0aW9uIChvdmVybGF5KSB7XG4gICAgICBfdGhpcy5vdmVybGF5ID0gb3ZlcmxheTtcbiAgICAgIF90aGlzLnByb3BzLm92ZXJsYXlSZWYgJiYgX3RoaXMucHJvcHMub3ZlcmxheVJlZihvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0Q29udGVudFJlZiA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBfdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgIF90aGlzLnByb3BzLmNvbnRlbnRSZWYgJiYgX3RoaXMucHJvcHMuY29udGVudFJlZihjb250ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYWZ0ZXJDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFwcEVsZW1lbnQgPSBfdGhpcyRwcm9wcy5hcHBFbGVtZW50LFxuICAgICAgICAgIGFyaWFIaWRlQXBwID0gX3RoaXMkcHJvcHMuYXJpYUhpZGVBcHAsXG4gICAgICAgICAgaHRtbE9wZW5DbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5odG1sT3BlbkNsYXNzTmFtZSxcbiAgICAgICAgICBib2R5T3BlbkNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lO1xuXG4gICAgICAvLyBSZW1vdmUgY2xhc3Nlcy5cblxuICAgICAgYm9keU9wZW5DbGFzc05hbWUgJiYgY2xhc3NMaXN0LnJlbW92ZShkb2N1bWVudC5ib2R5LCBib2R5T3BlbkNsYXNzTmFtZSk7XG5cbiAgICAgIGh0bWxPcGVuQ2xhc3NOYW1lICYmIGNsYXNzTGlzdC5yZW1vdmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLCBodG1sT3BlbkNsYXNzTmFtZSk7XG5cbiAgICAgIC8vIFJlc2V0IGFyaWEtaGlkZGVuIGF0dHJpYnV0ZSBpZiBhbGwgbW9kYWxzIGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICBpZiAoYXJpYUhpZGVBcHAgJiYgYXJpYUhpZGRlbkluc3RhbmNlcyA+IDApIHtcbiAgICAgICAgYXJpYUhpZGRlbkluc3RhbmNlcyAtPSAxO1xuXG4gICAgICAgIGlmIChhcmlhSGlkZGVuSW5zdGFuY2VzID09PSAwKSB7XG4gICAgICAgICAgYXJpYUFwcEhpZGVyLnNob3coYXBwRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnNob3VsZEZvY3VzQWZ0ZXJSZW5kZXIpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLnNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZSkge1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5yZXR1cm5Gb2N1cyhfdGhpcy5wcm9wcy5wcmV2ZW50U2Nyb2xsKTtcbiAgICAgICAgICBmb2N1c01hbmFnZXIudGVhcmRvd25TY29wZWRGb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5wb3BXaXRob3V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25BZnRlckNsb3NlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQWZ0ZXJDbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICBfcG9ydGFsT3Blbkluc3RhbmNlczIuZGVmYXVsdC5kZXJlZ2lzdGVyKF90aGlzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmJlZm9yZU9wZW4oKTtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hZnRlck9wZW4gJiYgX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNsb3NlVGltZXIpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGJlZm9yZUNsb3NlOiBmYWxzZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5zaG91bGRGb2N1c0FmdGVyUmVuZGVyKSB7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLnNldHVwU2NvcGVkRm9jdXMoX3RoaXMubm9kZSk7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLm1hcmtGb3JGb2N1c0xhdGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBhZnRlck9wZW46IHRydWUgfSk7XG5cbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuaXNPcGVuICYmIF90aGlzLnByb3BzLm9uQWZ0ZXJPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkFmdGVyT3Blbih7XG4gICAgICAgICAgICAgIG92ZXJsYXlFbDogX3RoaXMub3ZlcmxheSxcbiAgICAgICAgICAgICAgY29udGVudEVsOiBfdGhpcy5jb250ZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUyA+IDApIHtcbiAgICAgICAgX3RoaXMuY2xvc2VXaXRoVGltZW91dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuY2xvc2VXaXRob3V0VGltZW91dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5mb2N1c0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuY29udGVudCAmJiAhX3RoaXMuY29udGVudEhhc0ZvY3VzKCkgJiYgX3RoaXMuY29udGVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsb3NlV2l0aFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2xvc2VzQXQgPSBEYXRlLm5vdygpICsgX3RoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVM7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGJlZm9yZUNsb3NlOiB0cnVlLCBjbG9zZXNBdDogY2xvc2VzQXQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gc2V0VGltZW91dChfdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0LCBfdGhpcy5zdGF0ZS5jbG9zZXNBdCAtIERhdGUubm93KCkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJlZm9yZUNsb3NlOiBmYWxzZSxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgYWZ0ZXJPcGVuOiBmYWxzZSxcbiAgICAgICAgY2xvc2VzQXQ6IG51bGxcbiAgICAgIH0sIF90aGlzLmFmdGVyQ2xvc2UpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gVEFCX0tFWSkge1xuICAgICAgICAoMCwgX3Njb3BlVGFiMi5kZWZhdWx0KShfdGhpcy5jb250ZW50LCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uRXNjICYmIGV2ZW50LmtleUNvZGUgPT09IEVTQ19LRVkpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIF90aGlzLnJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU92ZXJsYXlPbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMuc2hvdWxkQ2xvc2UgPT09IG51bGwpIHtcbiAgICAgICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuc2hvdWxkQ2xvc2UgJiYgX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaykge1xuICAgICAgICBpZiAoX3RoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSkge1xuICAgICAgICAgIF90aGlzLnJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuZm9jdXNDb250ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQ29udGVudE9uTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU92ZXJsYXlPbk1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrICYmIGV2ZW50LnRhcmdldCA9PSBfdGhpcy5vdmVybGF5KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQ29udGVudE9uTW91c2VEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVxdWVzdENsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSAmJiBfdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLm93bmVySGFuZGxlc0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlO1xuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGRCZUNsb3NlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhX3RoaXMuc3RhdGUuaXNPcGVuICYmICFfdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY29udGVudEhhc0ZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLmNvbnRlbnQgfHwgX3RoaXMuY29udGVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYnVpbGRDbGFzc05hbWUgPSBmdW5jdGlvbiAod2hpY2gsIGFkZGl0aW9uYWwpIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gKHR5cGVvZiBhZGRpdGlvbmFsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoYWRkaXRpb25hbCkpID09PSBcIm9iamVjdFwiID8gYWRkaXRpb25hbCA6IHtcbiAgICAgICAgYmFzZTogQ0xBU1NfTkFNRVNbd2hpY2hdLFxuICAgICAgICBhZnRlck9wZW46IENMQVNTX05BTUVTW3doaWNoXSArIFwiLS1hZnRlci1vcGVuXCIsXG4gICAgICAgIGJlZm9yZUNsb3NlOiBDTEFTU19OQU1FU1t3aGljaF0gKyBcIi0tYmVmb3JlLWNsb3NlXCJcbiAgICAgIH07XG4gICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcy5iYXNlO1xuICAgICAgaWYgKF90aGlzLnN0YXRlLmFmdGVyT3Blbikge1xuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZXMuYWZ0ZXJPcGVuO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnN0YXRlLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArIFwiIFwiICsgY2xhc3NOYW1lcy5iZWZvcmVDbG9zZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgYWRkaXRpb25hbCA9PT0gXCJzdHJpbmdcIiAmJiBhZGRpdGlvbmFsID8gY2xhc3NOYW1lICsgXCIgXCIgKyBhZGRpdGlvbmFsIDogY2xhc3NOYW1lO1xuICAgIH07XG5cbiAgICBfdGhpcy5hdHRyaWJ1dGVzRnJvbU9iamVjdCA9IGZ1bmN0aW9uIChwcmVmaXgsIGl0ZW1zKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoaXRlbXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgIGFjY1twcmVmaXggKyBcIi1cIiArIG5hbWVdID0gaXRlbXNbbmFtZV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWZ0ZXJPcGVuOiBmYWxzZSxcbiAgICAgIGJlZm9yZUNsb3NlOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGRDbG9zZSA9IG51bGw7XG4gICAgX3RoaXMubW92ZUZyb21Db250ZW50VG9PdmVybGF5ID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kYWxQb3J0YWwsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMuYm9keU9wZW5DbGFzc05hbWUgIT09IHRoaXMucHJvcHMuYm9keU9wZW5DbGFzc05hbWUpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybignUmVhY3QtTW9kYWw6IFwiYm9keU9wZW5DbGFzc05hbWVcIiBwcm9wIGhhcyBiZWVuIG1vZGlmaWVkLiAnICsgXCJUaGlzIG1heSBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yIHdoZW4gbXVsdGlwbGUgbW9kYWxzIGFyZSBvcGVuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldlByb3BzLmh0bWxPcGVuQ2xhc3NOYW1lICE9PSB0aGlzLnByb3BzLmh0bWxPcGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlYWN0LU1vZGFsOiBcImh0bWxPcGVuQ2xhc3NOYW1lXCIgcHJvcCBoYXMgYmVlbiBtb2RpZmllZC4gJyArIFwiVGhpcyBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvciB3aGVuIG11bHRpcGxlIG1vZGFscyBhcmUgb3Blbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmICFwcmV2UHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5pc09wZW4gJiYgcHJldlByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZvY3VzIG9ubHkgbmVlZHMgdG8gYmUgc2V0IG9uY2Ugd2hlbiB0aGUgbW9kYWwgaXMgYmVpbmcgb3BlbmVkXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG91bGRGb2N1c0FmdGVyUmVuZGVyICYmIHRoaXMuc3RhdGUuaXNPcGVuICYmICFwcmV2U3RhdGUuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuZm9jdXNDb250ZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJDbG9zZSgpO1xuICAgICAgfVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VUaW1lcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJlZm9yZU9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmVmb3JlT3BlbigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFwcEVsZW1lbnQgPSBfcHJvcHMuYXBwRWxlbWVudCxcbiAgICAgICAgICBhcmlhSGlkZUFwcCA9IF9wcm9wcy5hcmlhSGlkZUFwcCxcbiAgICAgICAgICBodG1sT3BlbkNsYXNzTmFtZSA9IF9wcm9wcy5odG1sT3BlbkNsYXNzTmFtZSxcbiAgICAgICAgICBib2R5T3BlbkNsYXNzTmFtZSA9IF9wcm9wcy5ib2R5T3BlbkNsYXNzTmFtZTtcblxuICAgICAgLy8gQWRkIGNsYXNzZXMuXG5cbiAgICAgIGJvZHlPcGVuQ2xhc3NOYW1lICYmIGNsYXNzTGlzdC5hZGQoZG9jdW1lbnQuYm9keSwgYm9keU9wZW5DbGFzc05hbWUpO1xuXG4gICAgICBodG1sT3BlbkNsYXNzTmFtZSAmJiBjbGFzc0xpc3QuYWRkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXSwgaHRtbE9wZW5DbGFzc05hbWUpO1xuXG4gICAgICBpZiAoYXJpYUhpZGVBcHApIHtcbiAgICAgICAgYXJpYUhpZGRlbkluc3RhbmNlcyArPSAxO1xuICAgICAgICBhcmlhQXBwSGlkZXIuaGlkZShhcHBFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgX3BvcnRhbE9wZW5JbnN0YW5jZXMyLmRlZmF1bHQucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gRG9uJ3Qgc3RlYWwgZm9jdXMgZnJvbSBpbm5lciBlbGVtZW50c1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpZCA9IF9wcm9wczIuaWQsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZSA9IF9wcm9wczIub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgICAgICBkZWZhdWx0U3R5bGVzID0gX3Byb3BzMi5kZWZhdWx0U3R5bGVzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMi5jaGlsZHJlbjtcblxuICAgICAgdmFyIGNvbnRlbnRTdHlsZXMgPSBjbGFzc05hbWUgPyB7fSA6IGRlZmF1bHRTdHlsZXMuY29udGVudDtcbiAgICAgIHZhciBvdmVybGF5U3R5bGVzID0gb3ZlcmxheUNsYXNzTmFtZSA/IHt9IDogZGVmYXVsdFN0eWxlcy5vdmVybGF5O1xuXG4gICAgICBpZiAodGhpcy5zaG91bGRCZUNsb3NlZCgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3ZlcmxheVByb3BzID0ge1xuICAgICAgICByZWY6IHRoaXMuc2V0T3ZlcmxheVJlZixcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmJ1aWxkQ2xhc3NOYW1lKFwib3ZlcmxheVwiLCBvdmVybGF5Q2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBvdmVybGF5U3R5bGVzLCB0aGlzLnByb3BzLnN0eWxlLm92ZXJsYXkpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZU92ZXJsYXlPbkNsaWNrLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVPdmVybGF5T25Nb3VzZURvd25cbiAgICAgIH07XG5cbiAgICAgIHZhciBjb250ZW50UHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcmVmOiB0aGlzLnNldENvbnRlbnRSZWYsXG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY29udGVudFN0eWxlcywgdGhpcy5wcm9wcy5zdHlsZS5jb250ZW50KSxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmJ1aWxkQ2xhc3NOYW1lKFwiY29udGVudFwiLCBjbGFzc05hbWUpLFxuICAgICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQ29udGVudE9uTW91c2VEb3duLFxuICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlQ29udGVudE9uTW91c2VVcCxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDb250ZW50T25DbGljayxcbiAgICAgICAgcm9sZTogdGhpcy5wcm9wcy5yb2xlLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5jb250ZW50TGFiZWxcbiAgICAgIH0sIHRoaXMuYXR0cmlidXRlc0Zyb21PYmplY3QoXCJhcmlhXCIsIF9leHRlbmRzKHsgbW9kYWw6IHRydWUgfSwgdGhpcy5wcm9wcy5hcmlhKSksIHRoaXMuYXR0cmlidXRlc0Zyb21PYmplY3QoXCJkYXRhXCIsIHRoaXMucHJvcHMuZGF0YSB8fCB7fSksIHtcbiAgICAgICAgXCJkYXRhLXRlc3RpZFwiOiB0aGlzLnByb3BzLnRlc3RJZFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBjb250ZW50RWxlbWVudCA9IHRoaXMucHJvcHMuY29udGVudEVsZW1lbnQoY29udGVudFByb3BzLCBjaGlsZHJlbik7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vdmVybGF5RWxlbWVudChvdmVybGF5UHJvcHMsIGNvbnRlbnRFbGVtZW50KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWxQb3J0YWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Nb2RhbFBvcnRhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7XG4gICAgb3ZlcmxheToge30sXG4gICAgY29udGVudDoge31cbiAgfSxcbiAgZGVmYXVsdFN0eWxlczoge31cbn07XG5Nb2RhbFBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIGlzT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIGRlZmF1bHRTdHlsZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgIG92ZXJsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH0pLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgY29udGVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgb3ZlcmxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfSksXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLFxuICBvdmVybGF5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSksXG4gIGJvZHlPcGVuQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaHRtbE9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhcmlhSGlkZUFwcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBhcHBFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lmluc3RhbmNlT2YoX3NhZmVIVE1MRWxlbWVudDIuZGVmYXVsdCksXG4gIG9uQWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQWZ0ZXJDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblJlcXVlc3RDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjbG9zZVRpbWVvdXRNUzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHNob3VsZEZvY3VzQWZ0ZXJSZW5kZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcHJldmVudFNjcm9sbDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICByb2xlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY29udGVudExhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYXJpYTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGRhdGE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBzaG91bGRDbG9zZU9uRXNjOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG92ZXJsYXlSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY29udGVudFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG92ZXJsYXlFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNvbnRlbnRFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHRlc3RJZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBNb2RhbFBvcnRhbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFzc2VydE5vZGVMaXN0ID0gYXNzZXJ0Tm9kZUxpc3Q7XG5leHBvcnRzLnNldEVsZW1lbnQgPSBzZXRFbGVtZW50O1xuZXhwb3J0cy52YWxpZGF0ZUVsZW1lbnQgPSB2YWxpZGF0ZUVsZW1lbnQ7XG5leHBvcnRzLmhpZGUgPSBoaWRlO1xuZXhwb3J0cy5zaG93ID0gc2hvdztcbmV4cG9ydHMuZG9jdW1lbnROb3RSZWFkeU9yU1NSVGVzdGluZyA9IGRvY3VtZW50Tm90UmVhZHlPclNTUlRlc3Rpbmc7XG5leHBvcnRzLnJlc2V0Rm9yVGVzdGluZyA9IHJlc2V0Rm9yVGVzdGluZztcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQgPSByZXF1aXJlKFwiLi9zYWZlSFRNTEVsZW1lbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnbG9iYWxFbGVtZW50ID0gbnVsbDtcblxuZnVuY3Rpb24gYXNzZXJ0Tm9kZUxpc3Qobm9kZUxpc3QsIHNlbGVjdG9yKSB7XG4gIGlmICghbm9kZUxpc3QgfHwgIW5vZGVMaXN0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInJlYWN0LW1vZGFsOiBObyBlbGVtZW50cyB3ZXJlIGZvdW5kIGZvciBzZWxlY3RvciBcIiArIHNlbGVjdG9yICsgXCIuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnQoZWxlbWVudCkge1xuICB2YXIgdXNlRWxlbWVudCA9IGVsZW1lbnQ7XG4gIGlmICh0eXBlb2YgdXNlRWxlbWVudCA9PT0gXCJzdHJpbmdcIiAmJiBfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodXNlRWxlbWVudCk7XG4gICAgYXNzZXJ0Tm9kZUxpc3QoZWwsIHVzZUVsZW1lbnQpO1xuICAgIHVzZUVsZW1lbnQgPSBcImxlbmd0aFwiIGluIGVsID8gZWxbMF0gOiBlbDtcbiAgfVxuICBnbG9iYWxFbGVtZW50ID0gdXNlRWxlbWVudCB8fCBnbG9iYWxFbGVtZW50O1xuICByZXR1cm4gZ2xvYmFsRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpIHtcbiAgaWYgKCFhcHBFbGVtZW50ICYmICFnbG9iYWxFbGVtZW50KSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgW1wicmVhY3QtbW9kYWw6IEFwcCBlbGVtZW50IGlzIG5vdCBkZWZpbmVkLlwiLCBcIlBsZWFzZSB1c2UgYE1vZGFsLnNldEFwcEVsZW1lbnQoZWwpYCBvciBzZXQgYGFwcEVsZW1lbnQ9e2VsfWAuXCIsIFwiVGhpcyBpcyBuZWVkZWQgc28gc2NyZWVuIHJlYWRlcnMgZG9uJ3Qgc2VlIG1haW4gY29udGVudFwiLCBcIndoZW4gbW9kYWwgaXMgb3BlbmVkLiBJdCBpcyBub3QgcmVjb21tZW5kZWQsIGJ1dCB5b3UgY2FuIG9wdC1vdXRcIiwgXCJieSBzZXR0aW5nIGBhcmlhSGlkZUFwcD17ZmFsc2V9YC5cIl0uam9pbihcIiBcIikpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGhpZGUoYXBwRWxlbWVudCkge1xuICBpZiAodmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpKSB7XG4gICAgKGFwcEVsZW1lbnQgfHwgZ2xvYmFsRWxlbWVudCkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3coYXBwRWxlbWVudCkge1xuICBpZiAodmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpKSB7XG4gICAgKGFwcEVsZW1lbnQgfHwgZ2xvYmFsRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9jdW1lbnROb3RSZWFkeU9yU1NSVGVzdGluZygpIHtcbiAgZ2xvYmFsRWxlbWVudCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9yVGVzdGluZygpIHtcbiAgZ2xvYmFsRWxlbWVudCA9IG51bGw7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcG9ydGFsT3Blbkluc3RhbmNlcyA9IHJlcXVpcmUoXCIuL3BvcnRhbE9wZW5JbnN0YW5jZXNcIik7XG5cbnZhciBfcG9ydGFsT3Blbkluc3RhbmNlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3J0YWxPcGVuSW5zdGFuY2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gQm9keSBmb2N1cyB0cmFwIHNlZSBJc3N1ZSAjNzQyXG5cbnZhciBiZWZvcmUgPSB2b2lkIDAsXG4gICAgYWZ0ZXIgPSB2b2lkIDAsXG4gICAgaW5zdGFuY2VzID0gW107XG5cbmZ1bmN0aW9uIGZvY3VzQ29udGVudCgpIHtcbiAgaWYgKGluc3RhbmNlcy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiUmVhY3QtTW9kYWw6IE9wZW4gaW5zdGFuY2VzID4gMCBleHBlY3RlZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGluc3RhbmNlc1tpbnN0YW5jZXMubGVuZ3RoIC0gMV0uZm9jdXNDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIGJvZHlUcmFwKGV2ZW50VHlwZSwgb3Blbkluc3RhbmNlcykge1xuICBpZiAoIWJlZm9yZSB8fCAhYWZ0ZXIpIHtcbiAgICBiZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJlZm9yZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlYWN0LW1vZGFsLWJvZHktdHJhcFwiLCBcIlwiKTtcbiAgICBiZWZvcmUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYmVmb3JlLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICBiZWZvcmUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgIGJlZm9yZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZm9jdXNDb250ZW50KTtcbiAgICBhZnRlciA9IGJlZm9yZS5jbG9uZU5vZGUoKTtcbiAgICBhZnRlci5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZm9jdXNDb250ZW50KTtcbiAgfVxuXG4gIGluc3RhbmNlcyA9IG9wZW5JbnN0YW5jZXM7XG5cbiAgaWYgKGluc3RhbmNlcy5sZW5ndGggPiAwKSB7XG4gICAgLy8gQWRkIGZvY3VzIHRyYXBcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkICE9PSBiZWZvcmUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJlZm9yZSwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmJvZHkubGFzdENoaWxkICE9PSBhZnRlcikge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZnRlcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFJlbW92ZSBmb2N1cyB0cmFwXG4gICAgaWYgKGJlZm9yZS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICBiZWZvcmUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChiZWZvcmUpO1xuICAgIH1cbiAgICBpZiAoYWZ0ZXIucGFyZW50RWxlbWVudCkge1xuICAgICAgYWZ0ZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChhZnRlcik7XG4gICAgfVxuICB9XG59XG5cbl9wb3J0YWxPcGVuSW5zdGFuY2VzMi5kZWZhdWx0LnN1YnNjcmliZShib2R5VHJhcCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmR1bXBDbGFzc0xpc3RzID0gZHVtcENsYXNzTGlzdHM7XG52YXIgaHRtbENsYXNzTGlzdCA9IHt9O1xudmFyIGRvY0JvZHlDbGFzc0xpc3QgPSB7fTtcblxuZnVuY3Rpb24gZHVtcENsYXNzTGlzdHMoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgY2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5jbGFzc05hbWU7XG4gICAgdmFyIGJ1ZmZlciA9IFwiU2hvdyB0cmFja2VkIGNsYXNzZXM6XFxuXFxuXCI7XG5cbiAgICBidWZmZXIgKz0gXCI8aHRtbCAvPiAoXCIgKyBjbGFzc2VzICsgXCIpOlxcblwiO1xuICAgIGZvciAodmFyIHggaW4gaHRtbENsYXNzTGlzdCkge1xuICAgICAgYnVmZmVyICs9IFwiICBcIiArIHggKyBcIiBcIiArIGh0bWxDbGFzc0xpc3RbeF0gKyBcIlxcblwiO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgYnVmZmVyICs9IFwiXFxuXFxuZG9jLmJvZHkgKFwiICsgY2xhc3NlcyArIFwiKTpcXG5cIjtcbiAgICBmb3IgKHZhciBfeCBpbiBkb2NCb2R5Q2xhc3NMaXN0KSB7XG4gICAgICBidWZmZXIgKz0gXCIgIFwiICsgX3ggKyBcIiBcIiArIGRvY0JvZHlDbGFzc0xpc3RbX3hdICsgXCJcXG5cIjtcbiAgICB9XG5cbiAgICBidWZmZXIgKz0gXCJcXG5cIjtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coYnVmZmVyKTtcbiAgfVxufVxuXG4vKipcbiAqIFRyYWNrIHRoZSBudW1iZXIgb2YgcmVmZXJlbmNlIG9mIGEgY2xhc3MuXG4gKiBAcGFyYW0ge29iamVjdH0gcG9sbCBUaGUgcG9sbCB0byByZWNlaXZlIHRoZSByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzcyBuYW1lLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgaW5jcmVtZW50UmVmZXJlbmNlID0gZnVuY3Rpb24gaW5jcmVtZW50UmVmZXJlbmNlKHBvbGwsIGNsYXNzTmFtZSkge1xuICBpZiAoIXBvbGxbY2xhc3NOYW1lXSkge1xuICAgIHBvbGxbY2xhc3NOYW1lXSA9IDA7XG4gIH1cbiAgcG9sbFtjbGFzc05hbWVdICs9IDE7XG4gIHJldHVybiBjbGFzc05hbWU7XG59O1xuXG4vKipcbiAqIERyb3AgdGhlIHJlZmVyZW5jZSBvZiBhIGNsYXNzLlxuICogQHBhcmFtIHtvYmplY3R9IHBvbGwgVGhlIHBvbGwgdG8gcmVjZWl2ZSB0aGUgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3MgbmFtZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGRlY3JlbWVudFJlZmVyZW5jZSA9IGZ1bmN0aW9uIGRlY3JlbWVudFJlZmVyZW5jZShwb2xsLCBjbGFzc05hbWUpIHtcbiAgaWYgKHBvbGxbY2xhc3NOYW1lXSkge1xuICAgIHBvbGxbY2xhc3NOYW1lXSAtPSAxO1xuICB9XG4gIHJldHVybiBjbGFzc05hbWU7XG59O1xuXG4vKipcbiAqIFRyYWNrIGEgY2xhc3MgYW5kIGFkZCB0byB0aGUgZ2l2ZW4gY2xhc3MgbGlzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjbGFzc0xpc3RSZWYgQSBjbGFzcyBsaXN0IG9mIGFuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gcG9sbCAgICAgICAgIFRoZSBwb2xsIHRvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge0FycmF5fSAgY2xhc3NlcyAgICAgIFRoZSBsaXN0IG9mIGNsYXNzZXMgdG8gYmUgdHJhY2tlZC5cbiAqL1xudmFyIHRyYWNrQ2xhc3MgPSBmdW5jdGlvbiB0cmFja0NsYXNzKGNsYXNzTGlzdFJlZiwgcG9sbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGluY3JlbWVudFJlZmVyZW5jZShwb2xsLCBjbGFzc05hbWUpO1xuICAgIGNsYXNzTGlzdFJlZi5hZGQoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFVudHJhY2sgYSBjbGFzcyBhbmQgcmVtb3ZlIGZyb20gdGhlIGdpdmVuIGNsYXNzIGxpc3QgaWYgdGhlIHJlZmVyZW5jZVxuICogcmVhY2hlcyAwLlxuICogQHBhcmFtIHtPYmplY3R9IGNsYXNzTGlzdFJlZiBBIGNsYXNzIGxpc3Qgb2YgYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwb2xsICAgICAgICAgVGhlIHBvbGwgdG8gYmUgdXNlZC5cbiAqIEBwYXJhbSB7QXJyYXl9ICBjbGFzc2VzICAgICAgVGhlIGxpc3Qgb2YgY2xhc3NlcyB0byBiZSB1bnRyYWNrZWQuXG4gKi9cbnZhciB1bnRyYWNrQ2xhc3MgPSBmdW5jdGlvbiB1bnRyYWNrQ2xhc3MoY2xhc3NMaXN0UmVmLCBwb2xsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgZGVjcmVtZW50UmVmZXJlbmNlKHBvbGwsIGNsYXNzTmFtZSk7XG4gICAgcG9sbFtjbGFzc05hbWVdID09PSAwICYmIGNsYXNzTGlzdFJlZi5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFB1YmxpYyBpbmZlcmZhY2UgdG8gYWRkIGNsYXNzZXMgdG8gdGhlIGRvY3VtZW50LmJvZHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gYm9keUNsYXNzIFRoZSBjbGFzcyBzdHJpbmcgdG8gYmUgYWRkZWQuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IG1heSBjb250YWluIG1vcmUgdGhlbiBvbmUgY2xhc3NcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCAnICcgYXMgc2VwYXJhdG9yLlxuICovXG52YXIgYWRkID0gZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiBhZGQoZWxlbWVudCwgY2xhc3NTdHJpbmcpIHtcbiAgcmV0dXJuIHRyYWNrQ2xhc3MoZWxlbWVudC5jbGFzc0xpc3QsIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSBcImh0bWxcIiA/IGh0bWxDbGFzc0xpc3QgOiBkb2NCb2R5Q2xhc3NMaXN0LCBjbGFzc1N0cmluZy5zcGxpdChcIiBcIikpO1xufTtcblxuLyoqXG4gKiBQdWJsaWMgaW5mZXJmYWNlIHRvIHJlbW92ZSBjbGFzc2VzIGZyb20gdGhlIGRvY3VtZW50LmJvZHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gYm9keUNsYXNzIFRoZSBjbGFzcyBzdHJpbmcgdG8gYmUgYWRkZWQuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IG1heSBjb250YWluIG1vcmUgdGhlbiBvbmUgY2xhc3NcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCAnICcgYXMgc2VwYXJhdG9yLlxuICovXG52YXIgcmVtb3ZlID0gZXhwb3J0cy5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCwgY2xhc3NTdHJpbmcpIHtcbiAgcmV0dXJuIHVudHJhY2tDbGFzcyhlbGVtZW50LmNsYXNzTGlzdCwgZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09IFwiaHRtbFwiID8gaHRtbENsYXNzTGlzdCA6IGRvY0JvZHlDbGFzc0xpc3QsIGNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5oYW5kbGVCbHVyID0gaGFuZGxlQmx1cjtcbmV4cG9ydHMuaGFuZGxlRm9jdXMgPSBoYW5kbGVGb2N1cztcbmV4cG9ydHMubWFya0ZvckZvY3VzTGF0ZXIgPSBtYXJrRm9yRm9jdXNMYXRlcjtcbmV4cG9ydHMucmV0dXJuRm9jdXMgPSByZXR1cm5Gb2N1cztcbmV4cG9ydHMucG9wV2l0aG91dEZvY3VzID0gcG9wV2l0aG91dEZvY3VzO1xuZXhwb3J0cy5zZXR1cFNjb3BlZEZvY3VzID0gc2V0dXBTY29wZWRGb2N1cztcbmV4cG9ydHMudGVhcmRvd25TY29wZWRGb2N1cyA9IHRlYXJkb3duU2NvcGVkRm9jdXM7XG5cbnZhciBfdGFiYmFibGUgPSByZXF1aXJlKFwiLi4vaGVscGVycy90YWJiYWJsZVwiKTtcblxudmFyIF90YWJiYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWJiYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBmb2N1c0xhdGVyRWxlbWVudHMgPSBbXTtcbnZhciBtb2RhbEVsZW1lbnQgPSBudWxsO1xudmFyIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XG4gIG5lZWRUb0ZvY3VzID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XG4gIGlmIChuZWVkVG9Gb2N1cykge1xuICAgIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG4gICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbmVlZCB0byBzZWUgaG93IGpRdWVyeSBzaGltcyBkb2N1bWVudC5vbignZm9jdXNpbicpIHNvIHdlIGRvbid0IG5lZWQgdGhlXG4gICAgLy8gc2V0VGltZW91dCwgZmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgZm9jdXNpbiwgaWYgaXQgZGlkLCB3ZSBjb3VsZCBmb2N1c1xuICAgIC8vIHRoZSBlbGVtZW50IG91dHNpZGUgb2YgYSBzZXRUaW1lb3V0LiBTaWRlLWVmZmVjdCBvZiB0aGlzIGltcGxlbWVudGF0aW9uXG4gICAgLy8gaXMgdGhhdCB0aGUgZG9jdW1lbnQuYm9keSBnZXRzIGZvY3VzLCBhbmQgdGhlbiB3ZSBmb2N1cyBvdXIgZWxlbWVudCByaWdodFxuICAgIC8vIGFmdGVyLCBzZWVtcyBmaW5lLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vZGFsRWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZWwgPSAoMCwgX3RhYmJhYmxlMi5kZWZhdWx0KShtb2RhbEVsZW1lbnQpWzBdIHx8IG1vZGFsRWxlbWVudDtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya0ZvckZvY3VzTGF0ZXIoKSB7XG4gIGZvY3VzTGF0ZXJFbGVtZW50cy5wdXNoKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5mdW5jdGlvbiByZXR1cm5Gb2N1cygpIHtcbiAgdmFyIHByZXZlbnRTY3JvbGwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gIHZhciB0b0ZvY3VzID0gbnVsbDtcbiAgdHJ5IHtcbiAgICBpZiAoZm9jdXNMYXRlckVsZW1lbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdG9Gb2N1cyA9IGZvY3VzTGF0ZXJFbGVtZW50cy5wb3AoKTtcbiAgICAgIHRvRm9jdXMuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiBwcmV2ZW50U2Nyb2xsIH0pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oW1wiWW91IHRyaWVkIHRvIHJldHVybiBmb2N1cyB0b1wiLCB0b0ZvY3VzLCBcImJ1dCBpdCBpcyBub3QgaW4gdGhlIERPTSBhbnltb3JlXCJdLmpvaW4oXCIgXCIpKTtcbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cbmZ1bmN0aW9uIHBvcFdpdGhvdXRGb2N1cygpIHtcbiAgZm9jdXNMYXRlckVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgZm9jdXNMYXRlckVsZW1lbnRzLnBvcCgpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFNjb3BlZEZvY3VzKGVsZW1lbnQpIHtcbiAgbW9kYWxFbGVtZW50ID0gZWxlbWVudDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgaGFuZGxlQmx1ciwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmF0dGFjaEV2ZW50KFwib25CbHVyXCIsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25Gb2N1c1wiLCBoYW5kbGVGb2N1cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVhcmRvd25TY29wZWRGb2N1cygpIHtcbiAgbW9kYWxFbGVtZW50ID0gbnVsbDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGhhbmRsZUZvY3VzKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuZGV0YWNoRXZlbnQoXCJvbkJsdXJcIiwgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbkZvY3VzXCIsIGhhbmRsZUZvY3VzKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBUcmFja3MgcG9ydGFscyB0aGF0IGFyZSBvcGVuIGFuZCBlbWl0cyBldmVudHMgdG8gc3Vic2NyaWJlcnNcblxudmFyIFBvcnRhbE9wZW5JbnN0YW5jZXMgPSBmdW5jdGlvbiBQb3J0YWxPcGVuSW5zdGFuY2VzKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3J0YWxPcGVuSW5zdGFuY2VzKTtcblxuICB0aGlzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKG9wZW5JbnN0YW5jZSkge1xuICAgIGlmIChfdGhpcy5vcGVuSW5zdGFuY2VzLmluZGV4T2Yob3Blbkluc3RhbmNlKSAhPT0gLTEpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKFwiUmVhY3QtTW9kYWw6IENhbm5vdCByZWdpc3RlciBtb2RhbCBpbnN0YW5jZSB0aGF0J3MgYWxyZWFkeSBvcGVuXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfdGhpcy5vcGVuSW5zdGFuY2VzLnB1c2gob3Blbkluc3RhbmNlKTtcbiAgICBfdGhpcy5lbWl0KFwicmVnaXN0ZXJcIik7XG4gIH07XG5cbiAgdGhpcy5kZXJlZ2lzdGVyID0gZnVuY3Rpb24gKG9wZW5JbnN0YW5jZSkge1xuICAgIHZhciBpbmRleCA9IF90aGlzLm9wZW5JbnN0YW5jZXMuaW5kZXhPZihvcGVuSW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKFwiUmVhY3QtTW9kYWw6IFVuYWJsZSB0byBkZXJlZ2lzdGVyIFwiICsgb3Blbkluc3RhbmNlICsgXCIgYXMgXCIgKyBcIml0IHdhcyBuZXZlciByZWdpc3RlcmVkXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfdGhpcy5vcGVuSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgX3RoaXMuZW1pdChcImRlcmVnaXN0ZXJcIik7XG4gIH07XG5cbiAgdGhpcy5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBfdGhpcy5zdWJzY3JpYmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgfTtcblxuICB0aGlzLmVtaXQgPSBmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XG4gICAgX3RoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgcmV0dXJuIHN1YnNjcmliZXIoZXZlbnRUeXBlLFxuICAgICAgLy8gc2hhbGxvdyBjb3B5IHRvIGF2b2lkIGFjY2lkZW50YWwgbXV0YXRpb25cbiAgICAgIF90aGlzLm9wZW5JbnN0YW5jZXMuc2xpY2UoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5vcGVuSW5zdGFuY2VzID0gW107XG4gIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbn07XG5cbnZhciBwb3J0YWxPcGVuSW5zdGFuY2VzID0gbmV3IFBvcnRhbE9wZW5JbnN0YW5jZXMoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcG9ydGFsT3Blbkluc3RhbmNlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhblVzZURPTSA9IHVuZGVmaW5lZDtcblxudmFyIF9leGVudiA9IHJlcXVpcmUoXCJleGVudlwiKTtcblxudmFyIF9leGVudjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGVudik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBFRSA9IF9leGVudjIuZGVmYXVsdDtcblxudmFyIFNhZmVIVE1MRWxlbWVudCA9IEVFLmNhblVzZURPTSA/IHdpbmRvdy5IVE1MRWxlbWVudCA6IHt9O1xuXG52YXIgY2FuVXNlRE9NID0gZXhwb3J0cy5jYW5Vc2VET00gPSBFRS5jYW5Vc2VET007XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNhZmVIVE1MRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNjb3BlVGFiO1xuXG52YXIgX3RhYmJhYmxlID0gcmVxdWlyZShcIi4vdGFiYmFibGVcIik7XG5cbnZhciBfdGFiYmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGFiYmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzY29wZVRhYihub2RlLCBldmVudCkge1xuICB2YXIgdGFiYmFibGUgPSAoMCwgX3RhYmJhYmxlMi5kZWZhdWx0KShub2RlKTtcblxuICBpZiAoIXRhYmJhYmxlLmxlbmd0aCkge1xuICAgIC8vIERvIG5vdGhpbmcsIHNpbmNlIHRoZXJlIGFyZSBubyBlbGVtZW50cyB0aGF0IGNhbiByZWNlaXZlIGZvY3VzLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRhcmdldCA9IHZvaWQgMDtcblxuICB2YXIgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgdmFyIGhlYWQgPSB0YWJiYWJsZVswXTtcbiAgdmFyIHRhaWwgPSB0YWJiYWJsZVt0YWJiYWJsZS5sZW5ndGggLSAxXTtcblxuICAvLyBwcm9jZWVkIHdpdGggZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9uIHRhYi5cbiAgLy8gRm9jdXMgb24gbGFzdCBlbGVtZW50IG9uIHNoaWZ0ICsgdGFiLlxuICBpZiAobm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgIGlmICghc2hpZnRLZXkpIHJldHVybjtcbiAgICB0YXJnZXQgPSB0YWlsO1xuICB9XG5cbiAgaWYgKHRhaWwgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgIXNoaWZ0S2V5KSB7XG4gICAgdGFyZ2V0ID0gaGVhZDtcbiAgfVxuXG4gIGlmIChoZWFkID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHNoaWZ0S2V5KSB7XG4gICAgdGFyZ2V0ID0gdGFpbDtcbiAgfVxuXG4gIGlmICh0YXJnZXQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhcmdldC5mb2N1cygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFNhZmFyaSByYWRpbyBpc3N1ZS5cbiAgLy9cbiAgLy8gU2FmYXJpIGRvZXMgbm90IG1vdmUgdGhlIGZvY3VzIHRvIHRoZSByYWRpbyBidXR0b24sXG4gIC8vIHNvIHdlIG5lZWQgdG8gZm9yY2UgaXQgdG8gcmVhbGx5IHdhbGsgdGhyb3VnaCBhbGwgZWxlbWVudHMuXG4gIC8vXG4gIC8vIFRoaXMgaXMgdmVyeSBlcnJvciBwcm9uZSwgc2luY2Ugd2UgYXJlIHRyeWluZyB0byBndWVzc1xuICAvLyBpZiBpdCBpcyBhIHNhZmFyaSBicm93c2VyIGZyb20gdGhlIGZpcnN0IG9jY3VyZW5jZSBiZXR3ZWVuXG4gIC8vIGNocm9tZSBvciBzYWZhcmkuXG4gIC8vXG4gIC8vIFRoZSBjaHJvbWUgdXNlciBhZ2VudCBjb250YWlucyB0aGUgZmlyc3Qgb2N1cnJlbmNlXG4gIC8vIGFzIHRoZSAnY2hyb21lL3ZlcnNpb24nIGFuZCBsYXRlciB0aGUgJ3NhZmFyaS92ZXJzaW9uJy5cbiAgdmFyIGNoZWNrU2FmYXJpID0gLyhcXGJDaHJvbWVcXGJ8XFxiU2FmYXJpXFxiKVxcLy8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgdmFyIGlzU2FmYXJpRGVza3RvcCA9IGNoZWNrU2FmYXJpICE9IG51bGwgJiYgY2hlY2tTYWZhcmlbMV0gIT0gXCJDaHJvbWVcIiAmJiAvXFxiaVBvZFxcYnxcXGJpUGFkXFxiL2cuZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSA9PSBudWxsO1xuXG4gIC8vIElmIHdlIGFyZSBub3QgaW4gc2FmYXJpIGRlc2t0b3AsIGxldCB0aGUgYnJvd3NlciBjb250cm9sXG4gIC8vIHRoZSBmb2N1c1xuICBpZiAoIWlzU2FmYXJpRGVza3RvcCkgcmV0dXJuO1xuXG4gIHZhciB4ID0gdGFiYmFibGUuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICBpZiAoeCA+IC0xKSB7XG4gICAgeCArPSBzaGlmdEtleSA/IC0xIDogMTtcbiAgfVxuXG4gIHRhcmdldCA9IHRhYmJhYmxlW3hdO1xuXG4gIC8vIElmIHRoZSB0YWJiYWJsZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0LFxuICAvLyBmb2N1cyBoZWFkL3RhaWwgYmFzZWQgb24gc2hpZnRLZXlcbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhcmdldCA9IHNoaWZ0S2V5ID8gdGFpbCA6IGhlYWQ7XG4gICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICB0YXJnZXQuZm9jdXMoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaW5kVGFiYmFibGVEZXNjZW5kYW50cztcbi8qIVxuICogQWRhcHRlZCBmcm9tIGpRdWVyeSBVSSBjb3JlXG4gKlxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9jYXRlZ29yeS91aS1jb3JlL1xuICovXG5cbnZhciB0YWJiYWJsZU5vZGUgPSAvaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QvO1xuXG5mdW5jdGlvbiBoaWRlc0NvbnRlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIHplcm9TaXplID0gZWxlbWVudC5vZmZzZXRXaWR0aCA8PSAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDw9IDA7XG5cbiAgLy8gSWYgdGhlIG5vZGUgaXMgZW1wdHksIHRoaXMgaXMgZ29vZCBlbm91Z2hcbiAgaWYgKHplcm9TaXplICYmICFlbGVtZW50LmlubmVySFRNTCkgcmV0dXJuIHRydWU7XG5cbiAgLy8gT3RoZXJ3aXNlIHdlIG5lZWQgdG8gY2hlY2sgc29tZSBzdHlsZXNcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHJldHVybiB6ZXJvU2l6ZSA/IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJvdmVyZmxvd1wiKSAhPT0gXCJ2aXNpYmxlXCIgfHxcbiAgLy8gaWYgJ292ZXJmbG93OiB2aXNpYmxlJyBzZXQsIGNoZWNrIGlmIHRoZXJlIGlzIGFjdHVhbGx5IGFueSBvdmVyZmxvd1xuICBlbGVtZW50LnNjcm9sbFdpZHRoIDw9IDAgJiYgZWxlbWVudC5zY3JvbGxIZWlnaHQgPD0gMCA6IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiB2aXNpYmxlKGVsZW1lbnQpIHtcbiAgdmFyIHBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSBicmVhaztcbiAgICBpZiAoaGlkZXNDb250ZW50cyhwYXJlbnRFbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZvY3VzYWJsZShlbGVtZW50LCBpc1RhYkluZGV4Tm90TmFOKSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgdmFyIHJlcyA9IHRhYmJhYmxlTm9kZS50ZXN0KG5vZGVOYW1lKSAmJiAhZWxlbWVudC5kaXNhYmxlZCB8fCAobm9kZU5hbWUgPT09IFwiYVwiID8gZWxlbWVudC5ocmVmIHx8IGlzVGFiSW5kZXhOb3ROYU4gOiBpc1RhYkluZGV4Tm90TmFOKTtcbiAgcmV0dXJuIHJlcyAmJiB2aXNpYmxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB0YWJiYWJsZShlbGVtZW50KSB7XG4gIHZhciB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIGlmICh0YWJJbmRleCA9PT0gbnVsbCkgdGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gIHZhciBpc1RhYkluZGV4TmFOID0gaXNOYU4odGFiSW5kZXgpO1xuICByZXR1cm4gKGlzVGFiSW5kZXhOYU4gfHwgdGFiSW5kZXggPj0gMCkgJiYgZm9jdXNhYmxlKGVsZW1lbnQsICFpc1RhYkluZGV4TmFOKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhYmJhYmxlRGVzY2VuZGFudHMoZWxlbWVudCkge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLCAwKS5maWx0ZXIodGFiYmFibGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Nb2RhbCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvTW9kYWxcIik7XG5cbnZhciBfTW9kYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfTW9kYWwyLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDEgPyBsZW4gLSAxIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMTsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAxXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cblxuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KG51bGwsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJY29uTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9JY29uTmF2QmFyJztcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VUaXRsZSdcclxuaW1wb3J0IE5ld1JvdXRpbmVMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3Um91dGluZUxpbmsnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXHJcblxyXG5cclxuaW1wb3J0IHsgQWlPdXRsaW5lUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuY29uc3QgUm91dGluZXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC8vIGJvcmRlcjogMXB4IGRhc2hlZCBibHVlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNi41cmVtO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG5gXHJcblxyXG5jb25zdCBSb3V0aW5lID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIC8vIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgLy8gcGFkZGluZzogMC44NXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAuODVyZW0gMDtcclxuICBtYXJnaW46IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdXRpbmVzKCkge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3JvdXRpbmUsIHNldFJvdXRpbmVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCgpIHtcclxuICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvcm91dGluZXMnO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JvdXRpbmVzJywgeyBcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzQwMyBlcnJvcicpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdib2R5IGlzIC4uLicsIGJvZHkpO1xyXG4gICAgICBzZXRSb3V0aW5lKGJvZHkucm91dGluZXNSZXN1bHRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0ZldGNoKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJvdXRpbmVzPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxOZXdSb3V0aW5lTGluayAvPlxyXG4gICAgICA8UGFnZVRpdGxlIG5hbWU9XCJSb3V0aW5lc1wiLz5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxSb3V0aW5lc0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtyb3V0aW5lLm1hcCgocm91dGluZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Um91dGluZSBrZXk9e2lkeH0+e3JvdXRpbmUucm91dGluZV9uYW1lfTwvUm91dGluZT5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L1JvdXRpbmVzQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8SWNvbk5hdkJhciAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgLy8gICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYTpob3ZlcixcclxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcclxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2RlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==