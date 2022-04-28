import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useEffect } from 'react';
/**
 * HOC for display a deprecation message from a deprecated component
 * fixme: Only display deprecation message in non-production environment
 */

export default function deprecateComponent(Component, message) {
  var _Component$displayNam;

  var componentDisplayName = (_Component$displayNam = Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : Component.name;
  var Deprecated = /*#__PURE__*/React.forwardRef(function (props, ref) {
    useEffect(function () {
      console.warn(message);
    }, []);
    return /*#__PURE__*/React.createElement(Component, _extends({
      ref: ref
    }, props));
  });
  Deprecated.displayName = "deprecated(" + componentDisplayName + ")";
  return Deprecated;
}