import React from "react";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";

function Navbar({items, activeItem, setActiveItem}) {

  function handleItemClick(itemId) {
    setActiveItem(itemId);
  }

  return (
    <ul className="navbarList">
      {items.map((item) => (
          <NavbarItem key={item.id} name={item.name} isActive={activeItem === item.id} onClick={() => handleItemClick(item.id)} />
      ))}
    </ul>
  );
}

export default Navbar;
