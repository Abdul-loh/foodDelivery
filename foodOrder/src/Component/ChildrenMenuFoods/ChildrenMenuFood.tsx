import { useContext } from "react";
import rateUs from "../../assets/rating_starts.png";
import "./ChildrenMenuFood.css";
import plus from "../../assets/add_icon_white.png";
import add from "../../assets/add_icon_green.png";
import sub from "../../assets/remove_icon_red.png";
import { StoreMenu } from "../../Context/StoreMenu";

function ChildrenMenuFood({ id, description, image, price, name }) {
  const { addMenu, subMenu, menuPicking, url } = useContext(StoreMenu);

  return (
    <div className="ChildrenMenuFood">
      <div className="Dishes">
        <img className="Dishes_images" src={url + "/images/" + image} alt="" />

        {!menuPicking[id] ? (
          <img
            className="plus-img"
            onClick={() => addMenu(id)}
            src={plus}
            alt=""
          />
        ) : (
          <div className="add_Sub">
            <img onClick={() => subMenu(id)} src={sub} alt="" />
            <p>{menuPicking[id]}</p>
            <img onClick={() => addMenu(id)} src={add} alt="" />
          </div>
        )}
      </div>

      <div className="About_dishes">
        <div className="Rating">
          <h2>{name}</h2>
          <img src={rateUs} alt="" />
        </div>
        <p className="Desription">{description}</p>
        <h3 className="pricing">${price}</h3>
      </div>
    </div>
  );
}

export default ChildrenMenuFood;
