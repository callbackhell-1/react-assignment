import React from "react";
import ReactDOM from "react-dom/client";

// Header
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
      <UserIcon />
    </div>
  );
};

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

// resCard
const ResCard = () => {
  return (
    <div>
      <h2>KFC</h2>
      <h2>4.4*</h2>
      <h2>Burger</h2>
      <h2>25 Min</h2>
    </div>
  );
};

// resContainer
const ResContainer = () => {
  return (
    <div>
      <div>
        <label for="search-txt">Search your Food here :</label>
        <input type="text" id="search-txt" name="search"></input>
      </div>

      <div>
        <ResCard />
      </div>
    </div>
  );
};

// Main
const Main = () => {
  return (
    <div className="main-div">
      <Header />
      <ResContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
