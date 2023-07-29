import React from "react";
import "./NavbarItem.css";

function NavbarItem({ name, onClick, isActive }) {
  return (
    <li onClick={onClick} className={isActive ? "active" : ""}>
      {name}
    </li>
  );
}

export default NavbarItem;
