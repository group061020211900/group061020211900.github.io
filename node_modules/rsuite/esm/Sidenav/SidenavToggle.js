import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { useClassNames } from '../utils';
import AngleLeft from '@rsuite/icons/legacy/AngleLeft';
import AngleRight from '@rsuite/icons/legacy/AngleRight';
var SidenavToggle = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? 'div' : _props$as,
      expanded = props.expanded,
      className = props.className,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'sidenav-toggle' : _props$classPrefix,
      onToggle = props.onToggle,
      rest = _objectWithoutPropertiesLoose(props, ["as", "expanded", "className", "classPrefix", "onToggle"]);

  var _useClassNames = useClassNames(classPrefix),
      merge = _useClassNames.merge,
      withClassPrefix = _useClassNames.withClassPrefix;

  var classes = merge(className, withClassPrefix({
    collapsed: !expanded
  }));
  var Icon = expanded ? AngleRight : AngleLeft;

  var handleToggle = function handleToggle(event) {
    onToggle === null || onToggle === void 0 ? void 0 : onToggle(!expanded, event);
  };

  return /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
    ref: ref,
    className: classes
  }), /*#__PURE__*/React.createElement(IconButton, {
    appearance: "default",
    icon: /*#__PURE__*/React.createElement(Icon, null),
    onClick: handleToggle
  }));
});
SidenavToggle.displayName = 'SidenavToggle';
SidenavToggle.propTypes = {
  classPrefix: PropTypes.string,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func
};
export default SidenavToggle;