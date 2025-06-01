"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MouseScrollHint;
var react_1 = require("react");
require("./../styles/MouseScrollHint.css");
function MouseScrollHint() {
    return (<div className="mouse-scroll-hint">
      <div className="mouse-body">
        <div className="arrow left">←</div>
        <div className="arrow right">→</div>
      </div>
    </div>);
}
