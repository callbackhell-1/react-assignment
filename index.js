import React from "react";
import ReactDOM from "react-dom";

/**
 * 1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
 */

const header = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "Heading 1"),
  React.createElement("h2", {}, "Heading 2"),
  React.createElement("h3", {}, "Heading 3"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
