import React from "react";
import add from "../../assets/add_icon.png";
import list from "../../assets/parcel_icon.png";
import order from "../../assets/order_icon.png";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="aboutAdmin">
        <NavLink to="/add" className="add">
          <img src={add} alt="" />
          <p>Add items</p>
        </NavLink>

        <NavLink to="/list" className="list">
          <img src={list} alt="" />
          <p>List items</p>
        </NavLink>

        <NavLink to="/order" className="order">
          <img src={order} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
