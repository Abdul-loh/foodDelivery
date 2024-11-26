import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/foodassets";
export const StoreMenu = createContext(null);

const StoreMenuProvider = (props) => {
  const [menuPicking, SetmenuPicking] = useState({});

  const addMenu = (itemId) => {
    if (!menuPicking[itemId]) {
      SetmenuPicking((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      SetmenuPicking((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const subMenu = (itemId) => {
    SetmenuPicking((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmout = () => {
    let totalAmout = 0;
    for (const item in menuPicking) {
      if (menuPicking[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmout += itemInfo.price * menuPicking[item];
      }
    }
    return totalAmout;
  };

  const contextValue = {
    food_list,
    addMenu,
    subMenu,
    menuPicking,
    SetmenuPicking,
    getTotalAmout,
  };
  return (
    <StoreMenu.Provider value={contextValue}>
      {props.children}
    </StoreMenu.Provider>
  );
};

export default StoreMenuProvider;
