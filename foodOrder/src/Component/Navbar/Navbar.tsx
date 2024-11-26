import "./Navbar.css";
import { foodOrderIcon } from "../../assets/foodassets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreMenu } from "../../Context/StoreMenu";

function Navbar({ SetlogpopUp }) {
  const { getTotalAmout, menuPicking } = useContext(StoreMenu);
  const [active, setActive] = useState("Home");
  return (
    <div className="foodNav" id="Navbar">
      <Link to="/">
        <img className="navHomelogo" src={foodOrderIcon.logo} alt="" />
      </Link>

      <div className="navHome">
        <ul>
          <Link to="/">
            <li
              onClick={() => {
                setActive("Home");
              }}
              className={active === "Home" ? "activate" : ""}
            >
              Home
            </li>
          </Link>

          <a href="#ExploreMenu">
            <li
              onClick={() => {
                setActive("Menu");
              }}
              className={active === "Menu" ? "activate" : ""}
            >
              Menu
            </li>
          </a>

          <a href="#DownloadApp">
            <li
              onClick={() => {
                setActive("Mobile app");
              }}
              className={active === "Mobile app" ? "activate" : ""}
            >
              Mobile app
            </li>
          </a>

          <a href="#Footer">
            <li
              onClick={() => {
                setActive("Contact us");
              }}
              className={active === "Contact us" ? "activate" : ""}
            >
              Contact us
            </li>
          </a>
        </ul>
      </div>

      <div className="navIcon">
        <img src={foodOrderIcon.search_icon} alt="" />

        <div className="navBasket">
          <Link to="/Cart">
            <img src={foodOrderIcon.basket_icon} alt="" />{" "}
          </Link>
          <div className={` ${getTotalAmout() === 0 ? "" : "dot"}`}></div>
        </div>

        <button onClick={() => SetlogpopUp(true)} className="homeBtn">
          sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
