import React from "react";
import "./ExporeMenu.css";
import { menu_list } from "../../assets/foodassets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="ExploreMenu" id="ExploreMenu">
      <h2>Explore Our Menu</h2>
      <p>
        choose from a divorce menu featuring a delectable array of duties. Our
        mission is to satisfy your craving and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="ourMenu">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
              key={index}
              className="menuWeHave"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="h_r" />
    </div>
  );
}

export default ExploreMenu;
