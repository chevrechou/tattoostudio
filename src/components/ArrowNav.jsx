import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./../styles/ArrowNav.css";

export default function ArrowNav({ nextId, prevId, variant = "dark" }) {
  const arrowClass = variant === "white" ? "arrow-nav arrow-white" : "arrow-nav";

  return (
    <div className="arrow-nav-wrapper">
      {prevId && (
        <button
          className={`${arrowClass} wiggle-left`}
          onClick={() => document.getElementById(prevId)?.scrollIntoView({ behavior: "smooth" })}
        >
          <FaArrowLeft />
        </button>
      )}
      {nextId && (
        <button
          className={`${arrowClass} wiggle-right`}
          onClick={() => document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth" })}
        >
          <FaArrowRight />
        </button>
      )}
    </div>
  );
}
