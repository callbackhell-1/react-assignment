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
    {console.log("Hello world")},<h1 className="h-1">Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

/**
 * Create a functional component of the same with JSX
 */

const Header2 = () => {
  return (
    <div className="title">
      <h1 className="head-1">Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="title"
      style={{ backgroundColor: "pink", border: "5px solid black" }}
    >
      <h1 className="head-1">Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
    </div>
  );
};

const Main = () => (
  <div>
    <Header2 />,
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
