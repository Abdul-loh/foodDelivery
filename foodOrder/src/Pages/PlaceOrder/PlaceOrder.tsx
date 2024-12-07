import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreMenu } from "../../Context/StoreMenu";
function placeOrder() {
  const { getTotalAmout } = useContext(StoreMenu);

  return (
    <div className="deliveryInfo">
      <h3>Delivery information</h3>
      <div className="delivery_Information">
        <form className="deliveryLeft">
          <div className="infoMultiple">
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
          </div>
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Street" />

          <div className="infoMultiple">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>

          <div className="infoMultiple">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </form>

        <div className="rightDeliv_info">
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
            <button className="CartsTotal_Btn">proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default placeOrder;
