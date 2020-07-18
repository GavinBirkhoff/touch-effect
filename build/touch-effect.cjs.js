'use strict';

var React = require('react');
var PropTypes = require('prop-types');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var TouchEffect =
/** @class */
function (_super) {
  __extends(TouchEffect, _super);

  function TouchEffect() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      active: false
    };

    _this.onTouchStart = function (e) {
      _this.triggerEvent("TouchStart", true, e);
    };

    _this.onTouchMove = function (e) {
      _this.triggerEvent("TouchMove", false, e);
    };

    _this.onTouchEnd = function (e) {
      _this.triggerEvent("TouchEnd", false, e);
    };

    _this.onTouchCancel = function (e) {
      _this.triggerEvent("TouchCancel", false, e);
    };

    _this.onMouseDown = function (e) {
      // pc simulate mobile
      _this.triggerEvent("MouseDown", true, e);
    };

    _this.onMouseUp = function (e) {
      _this.triggerEvent("MouseUp", false, e);
    };

    _this.onMouseLeave = function (e) {
      _this.triggerEvent("MouseLeave", false, e);
    };

    return _this;
  }

  TouchEffect.prototype.componentDidUpdate = function () {
    if (this.props.disabled && this.state.active) {
      this.setState({
        active: false
      });
    }
  };

  TouchEffect.prototype.triggerEvent = function (type, isActive, ev) {
    var eventType = "on" + type;
    var children = this.props.children;

    if (children.props[eventType]) {
      children.props[eventType](ev);
    }

    if (isActive !== this.state.active) {
      this.setState({
        active: isActive
      });
    }
  };

  TouchEffect.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        disabled = _a.disabled,
        activeClassName = _a.activeClassName,
        activeStyle = _a.activeStyle;
    var events = disabled ? undefined : {
      onTouchStart: this.onTouchStart,
      onTouchMove: this.onTouchMove,
      onTouchEnd: this.onTouchEnd,
      onTouchCancel: this.onTouchCancel,
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      onMouseLeave: this.onMouseLeave
    };
    var child = React.Children.only(children);

    if (!disabled && this.state.active) {
      var _b = child.props,
          style = _b.style,
          className = _b.className;

      if (activeStyle !== false) {
        if (typeof activeStyle === "object") {
          style = __assign(__assign({}, style), activeStyle);
        }

        className = classnames(className, activeClassName);
      }

      return React.cloneElement(child, __assign({
        className: className,
        style: style
      }, events));
    }

    return React.cloneElement(child, events);
  };

  TouchEffect.defaultProps = {
    disabled: false
  };
  TouchEffect.propTypes = {
    disabled: PropTypes.bool,
    activeClassName: PropTypes.string,
    activeStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    children: PropTypes.element
  };
  return TouchEffect;
}(React.Component);

module.exports = TouchEffect;
