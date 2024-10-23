"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _arrayIncludes = _interopRequireDefault(require("array-includes"));
var _arrayPrototype = _interopRequireDefault(require("array.prototype.flatmap"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var roles = _toConsumableArray(_ariaQuery.roles.keys());
var interactiveRoles = roles.filter(function (name) {
  return !_ariaQuery.roles.get(name)["abstract"] && _ariaQuery.roles.get(name).superClass.some(function (klasses) {
    return (0, _arrayIncludes["default"])(klasses, 'widget');
  });
});

// 'toolbar' does not descend from widget, but it does support
// aria-activedescendant, thus in practice we treat it as a widget.
interactiveRoles.push('toolbar');
/**
 * Returns boolean indicating whether the given element has a role
 * that is associated with an interactive component. Used when an element
 * has a dynamic handler on it and we need to discern whether or not
 * its intention is to be interacted with in the DOM.
 *
 * isInteractiveRole is a Logical Disjunction:
 * https://en.wikipedia.org/wiki/Logical_disjunction
 * The JSX element does not have a tagName or it has a tagName and a role
 * attribute with a value in the set of non-interactive roles.
 */
var isInteractiveRole = function isInteractiveRole(tagName, attributes) {
  var value = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(attributes, 'role'));

  // If value is undefined, then the role attribute will be dropped in the DOM.
  // If value is null, then getLiteralAttributeValue is telling us that the
  // value isn't in the form of a literal
  if (value === undefined || value === null) {
    return false;
  }
  var isInteractive = false;
  var normalizedValues = String(value).toLowerCase().split(' ');
  var validRoles = (0, _arrayPrototype["default"])(normalizedValues, function (name) {
    return (0, _arrayIncludes["default"])(roles, name) ? [name] : [];
  });
  if (validRoles.length > 0) {
    // The first role value is a series takes precedence.
    isInteractive = (0, _arrayIncludes["default"])(interactiveRoles, validRoles[0]);
  }
  return isInteractive;
};
var _default = exports["default"] = isInteractiveRole;
module.exports = exports.default;