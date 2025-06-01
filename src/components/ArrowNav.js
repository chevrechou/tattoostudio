"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ArrowNav;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
require("./../styles/ArrowNav.css");
function ArrowNav(_a) {
    var nextId = _a.nextId, prevId = _a.prevId, _b = _a.variant, variant = _b === void 0 ? "dark" : _b;
    var arrowClass = variant === "white" ? "arrow-nav arrow-white" : "arrow-nav";
    return (<div className="arrow-nav-wrapper">
      {prevId && (<button className={"".concat(arrowClass, " wiggle-left")} onClick={function () { var _a; return (_a = document.getElementById(prevId)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" }); }}>
          <fa_1.FaArrowLeft />
        </button>)}
      {nextId && (<button className={"".concat(arrowClass, " wiggle-right")} onClick={function () { var _a; return (_a = document.getElementById(nextId)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" }); }}>
          <fa_1.FaArrowRight />
        </button>)}
    </div>);
}
