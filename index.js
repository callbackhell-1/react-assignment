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
const ResCard = (props) => {
  console.log(props);
  const { resName, rating, cuisines, deliveryTime } = props;
  return (
    <div className="res-card">
    <img className="res-card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gt1qlbsgaklbzlg0olga" />
      <h4 className="res-card-inner-text">{resName}</h4>
      <h4 className="res-card-inner-text">{`${rating} *`}</h4>
      <h4 className="res-card-inner-text">{cuisines}</h4>
      <h4 className="res-card-inner-text">{`${deliveryTime} mins`}</h4>
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

      <div className="res-container">
        <ResCard
          resName="Domino's"
          rating="4.3"
          cuisines="Pizza"
          deliveryTime="30"
        />
        <ResCard
          resName="MCD"
          rating="3.8"
          cuisines="Burger"
          deliveryTime="15"
        />
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
