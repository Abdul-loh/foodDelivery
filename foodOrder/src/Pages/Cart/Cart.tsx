import React, { useContext } from "react";
import "./Cart.css";
import { StoreMenu } from "../../Context/StoreMenu";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { food_list, subMenu, menuPicking, getTotalAmout, url } =
    useContext(StoreMenu);
  const navigate = useNavigate();

  return (
    <div className=" cartContainer">
      <div className=" cartItem-tittle Cart">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />

      {food_list.map((item, index) => {
        if (menuPicking[item._id] > 0) {
          return (
            <>
              <div className="cartItem-tittle cartAbout">
                <img src={url + "/images/" + item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{menuPicking[item._id]}</p>
                <p>${item.price * menuPicking[item._id]}</p>
                <p className="removeItem" onClick={() => subMenu([item._id])}>
                  X
                </p>
              </div>
              <hr className="cartHr" />
            </>
          );
        }
      })}

      <div className="cartsTotal">
        <div className="left-cartTotal">
          <h3>Cart Totals</h3>
          <div className="Total">
            <p>Subtotal</p>
            <span>{getTotalAmout()}</span>
          </div>
          <hr className="cartsHr" />

          <div className="Total">
            <p>Delivery fee</p>
            <span>{getTotalAmout() === 0 ? 0 : 2}</span>
          </div>
          <hr className="cartsHr" />

          <div className="Total">
            <p>
              <b>Total</b>
            </p>
            <span>
              <b>{getTotalAmout() === 0 ? 0 : getTotalAmout() + 2}</b>
            </span>
          </div>
          <button className="CartsTotal_Btn" onClick={() => navigate("/Order")}>
            proceed to checkout
          </button>
        </div>

        <div className="rightPromo-cartTotal">
          <h3>if you have a promo code. Enter it here</h3>
          <div className="rightpromoInput">
            <input type="text" placeholder="promocode" />
            <button className="cartsBtn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
