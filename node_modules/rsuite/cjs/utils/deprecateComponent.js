"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = deprecateComponent;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

/**
 * HOC for display a deprecation message from a deprecated component
 * fixme: Only display deprecation message in non-production environment
 */
function deprecateComponent(Component, message) {
  var _Component$displayNam;

  var componentDisplayName = (_Component$displayNam = Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : Component.name;

  var Deprecated = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
    (0, _react.useEffect)(function () {
      console.warn(message);
    }, []);
    return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
      ref: ref
    }, props));
  });

  Deprecated.displayName = "deprecated(" + componentDisplayName + ")";
  return Deprecated;
}