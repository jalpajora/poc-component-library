"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppLayout;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AppLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, children);
}