import React from "react";
import ReactDOM from "react-dom/client";

// Left
const Logo = () => {
  return (
    <img
      style={{ width: "50px" }}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUlGcxUmqLQ08e_4msz7RwXoNtq6yR_f_PA&usqp=CAU"
    />
  );
};

// Middle
const SearchBar = () => {
  return (
    <input
      style={{ height: "50px", width: "150px" }}
      placeholder="Search your Items"
      type="text"
    ></input>
  );
};
// Right
const UserIcon = () => (
  <img
    style={{ width: "50px" }}
    src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
  />
);

// Main
const Main = () => {
  return (
    <div className="main-div">
      <Logo />,
      <SearchBar />,
      <UserIcon />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
