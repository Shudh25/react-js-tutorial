import React from "react";
import GetData from "./components/GetData";
import PPostData from "./components/PPostData";
import "./App.css";

export default function App() {
  const [method, setMethod] = React.useState("GET");

  function handleClick() {
    setMethod(method === "GET" ? "POST" : "GET");
  }

  return (
    <div>
      <button onClick={handleClick} className="change">
        Change to {method} Api
      </button>
      {method === "GET" ? <PPostData /> : <GetData />}
    </div>
  );
}
