/*
Using React :
1. Create nested React Elements
example :
<div id="parent">
    <div id="child1">
        <h2>1st child from child1</h2>
        <h2>2nd child from child1</h2>
    </div>
    <div id="child2">
        <h2>1st child from child2</h2>
        <h2>2nd child from child2</h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h2", {}, "1st child from child1"),
    React.createElement("h2", {}, "2nd child from child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "1st child from child2"),
    React.createElement("h2", {}, "1st child from child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
