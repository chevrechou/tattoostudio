import React from "react";
import "./../styles/MouseScrollHint.css";

export default function MouseScrollHint() {
  return (
    <div className="mouse-scroll-hint">
      <div className="mouse-body">
        <div className="arrow left">←</div>
        <div className="arrow right">→</div>
      </div>
    </div>
  );
}
