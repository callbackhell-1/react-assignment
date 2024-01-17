import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
 */

const header = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "Heading 1"),
  React.createElement("h2", {}, "Heading 2"),
  React.createElement("h3", {}, "Heading 3"),
]);

/**
 * Create the same element using JSX
 */
const header1 = (
  <div className="title">
    {console.log("Hello world")},
    <h1 className="h-1">Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header1);
