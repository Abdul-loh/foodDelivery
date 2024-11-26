import React, { useContext } from "react";
import "./MenuFood.css";
import ChildrenMenuFood from "../ChildrenMenuFoods/ChildrenMenuFood";
import { StoreMenu } from "../../Context/StoreMenu";

function MenuFood({ category }) {
  const { food_list } = useContext(StoreMenu);
  return (
    <div className="MenuFood">
      <h2>Top dishes near you</h2>

      <div className="menu_display" id="menu_display">
        {food_list.map((item, index) => {
          {
            console.log(category, item.category);
          }

          if (category === "All" || category === item.category) {
            return (
              <ChildrenMenuFood
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default MenuFood;
