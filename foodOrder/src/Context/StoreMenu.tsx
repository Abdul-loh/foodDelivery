import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreMenu = createContext(null);

const StoreMenuProvider = (props) => {
  const [menuPicking, setMenuPicking] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");

  const [food_list, setFoodList] = useState([]);

  const foodListFetching = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCart = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setMenuPicking(response.data.data);
  };

  const addMenu = async (itemId) => {
    if (!menuPicking[itemId]) {
      setMenuPicking((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setMenuPicking((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };
  const subMenu = async (itemId) => {
    setMenuPicking((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // if (token) {
    //   await axios.post(
    //     url + "/api/cart/remove",
    //     { itemId },
    //     { headers: { token } }
    //   );
    // }
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

  useEffect(() => {
    async function loadData() {
      await foodListFetching();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        // await loadCart(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    addMenu,
    subMenu,
    menuPicking,
    setMenuPicking,
    getTotalAmout,
    url,
    token,
    setToken,
  };
  return (
    <StoreMenu.Provider value={contextValue}>
      {props.children}
    </StoreMenu.Provider>
  );
};

export default StoreMenuProvider;
