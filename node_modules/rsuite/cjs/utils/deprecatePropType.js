"use strict";

exports.__esModule = true;
exports.default = deprecatePropType;
// Ref: https://github.com/thefrontside/deprecated-prop-type/blob/master/deprecated.js
var warned = {};

function deprecatePropType(propType, explanation) {
  return function validate(props, propName, componentName) {
    // Note ...rest here
    if (props[propName] != null) {
      var message = "\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation;

      if (!warned[message]) {
        console.warn(message);
        warned[message] = true;
      }
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest)); // and here
  };
}

function _resetWarned() {
  warned = {};
}

deprecatePropType._resetWarned = _resetWarned;