"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./../styles/Panel.css");
var Panel = function (_a) {
    var children = _a.children, _b = _a.bgColor, bgColor = _b === void 0 ? "#fff" : _b, id = _a.id;
    return (<section className="panel" style={{ backgroundColor: bgColor }} id={id}>
    {children}
  </section>);
};
exports.default = Panel;
