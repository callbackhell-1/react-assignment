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

//KFC data
const resObj = {
  type: "restaurant",
  data: {
    type: "F",
    id: "334475",
    name: "KFC",
    uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
    city: "1",
    area: "BTM Layout",
    totalRatingsString: "500+ ratings",
    cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    tags: [],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 36,
    minDeliveryTime: 36,
    maxDeliveryTime: 36,
    slaString: "36 MINS",
    lastMileTravel: 3.5,
    slugs: {
      restaurant: "kfc-btm-layout-btm",
      city: "bangalore",
    },
    cityState: "1",
    address: "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
    locality: "2nd Stage",
    parentId: 547,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "FREE DELIVERY",
      shortDescriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "",
      shortDescriptionList: [
        {
          meta: "Free Delivery",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    ribbon: [
      {
        type: "PROMOTED",
      },
    ],
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "3.5 kms",
    hasSurge: false,
    sla: {
      restaurantId: "334475",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      lastMileTravel: 3.5,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: true,
    avgRating: "3.8",
    totalRatings: 500,
    new: false,
  },
  subtype: "basic",
};

// resCard
const ResCard = (props) => {
  console.log(props); //resObj
  const { resData } = props;
  console.log(resData); //resObj

  return (
    <div className="res-card">
      <img
        className="res-card-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bdcd233971b7c81bf77e1fa4471280eb"
      />
      <h4 className="res-card-inner-text">{resData.data.name}</h4>
      <h4 className="res-card-inner-text">{`${resData.data.avgRating} *`}</h4>
      <h4 className="res-card-inner-text">{resData.data.costForTwoString}</h4>
      <h4 className="res-card-inner-text">{`${resData.data.deliveryTime} mins`}</h4>
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
        <ResCard resData={resObj} />
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
