import React, { useState } from "react";
import "./Add.css";
import uploadImage from "../../assets/upload_area.png";
import axios from "axios";
import { toast } from "react-toastify";

function Add() {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.success(response.data.message);
    }
  };

  return (
    <div className="Add">
      <div className="Add_itemsPage">
        <form onSubmit={onSubmitHandler} className="AboutAddFood">
          <div className="uploadImage Admin_Update">
            <p>Upload image</p>
            <label htmlFor="image" className="image">
              <img
                src={image ? URL.createObjectURL(image) : uploadImage}
                alt=""
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </div>

          <div className="pro-Name Admin_Update">
            <p>Product name</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Type here"
            />
          </div>

          <div className="pro_Descrip Admin_Update">
            <p>Product description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              placeholder="Write content here"
              rows={4}
              required
            ></textarea>
          </div>

          <div className="Categ_Price ">
            <div className="category Admin_Update">
              <p>Product category</p>
              <select onChange={onChangeHandler} name="category">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noddles">Noddles</option>
              </select>
            </div>

            <div className="price Admin_Update">
              <p>Product price</p>
              <input
                onChange={onChangeHandler}
                value={data.price}
                type="Number"
                name="price"
                placeholder="$20"
              />
            </div>
          </div>
          <button type="submit" className="addBtn Admin_Update">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
