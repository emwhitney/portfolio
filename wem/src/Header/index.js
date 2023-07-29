import React from "react";
import Navbar from "../Navbar";
import "./Header.css";
import "../App.css";

function Header({items, activeItem, setActiveItem}) {
  console.log('items in header', items)


  return (
    <div className="headerContainer outerContainer">
      <div className="headerTitle">
        <h1>Em Whitney</h1>
      </div>
      <Navbar
        items={items}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </div>
  );
}

export default Header;
