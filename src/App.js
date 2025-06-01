"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var HorizontalScroll_1 = require("./components/HorizontalScroll");
var aos_1 = require("aos");
require("aos/dist/aos.css");
function App() {
    (0, react_1.useEffect)(function () {
        aos_1.default.init({ duration: 800, once: true });
    }, []);
    return <HorizontalScroll_1.default />;
}
exports.default = App;
