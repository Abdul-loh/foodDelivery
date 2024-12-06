import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
function List() {
  const url = "https://fooddeliverybackend-zgnf.onrender.com";
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchData();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  return (
    <div className="List">
      <div className="listing_foods">
        <p>All Foods List</p>
        <div className="Tittle-added listProduct">
          <p>Images</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Remove</p>
        </div>

        {list.map((item, index) => {
          return (
            <div key={index} className="ProductItems listProduct">
              <img src={`${url}/images/` + item.image} alt="" />
              <p className="nameEdit">{item.name}</p>
              <p>{item.category}</p>

              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
