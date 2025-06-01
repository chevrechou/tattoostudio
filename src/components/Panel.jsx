import React from "react";
import "./../styles/Panel.css";

const Panel = ({ children, bgColor = "#fff", id }) => (
  <section className="panel" style={{ backgroundColor: bgColor }} id={id}>
    {children}
  </section>
);

export default Panel;
