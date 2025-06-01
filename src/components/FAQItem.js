"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FAQItem;
var react_1 = require("react");
require("./../styles/FAQItem.css");
function FAQItem(_a) {
    var question = _a.question, answer = _a.answer;
    return (<div className="faq-item">
      <h4>{question}</h4>
      <p>{answer}</p>
    </div>);
}
