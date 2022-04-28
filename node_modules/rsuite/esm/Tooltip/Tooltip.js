import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { useClassNames } from '../utils';
var Tooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? 'div' : _props$as,
      className = props.className,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'tooltip' : _props$classPrefix,
      children = props.children,
      style = props.style,
      visible = props.visible,
      rest = _objectWithoutPropertiesLoose(props, ["as", "className", "classPrefix", "children", "style", "visible"]);

  var _useClassNames = useClassNames(classPrefix),
      merge = _useClassNames.merge,
      withClassPrefix = _useClassNames.withClassPrefix;

  var classes = merge(className, withClassPrefix());

  var styles = _extends({
    opacity: visible ? 1 : undefined
  }, style);

  return /*#__PURE__*/React.createElement(Component, _extends({
    role: "tooltip"
  }, rest, {
    ref: ref,
    className: classes,
    style: styles
  }), children);
});
Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  visible: PropTypes.bool,
  classPrefix: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
export default Tooltip;