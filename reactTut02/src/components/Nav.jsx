import React from "react";

import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <nav>
      <img src={logo} style={{ width: 80, height: 50 }} />
      <h2>React Facts</h2>
      <h3>React Cource - Project 1</h3>
    </nav>
  );
}
