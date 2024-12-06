import "./Navbar.css";
import { foodOrderIcon } from "../../assets/foodassets";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreMenu } from "../../Context/StoreMenu";
import profile from "../../assets/profile_icon.png";
import bag from "../../assets/bag_icon.png";
import logout from "../../assets/logout_icon.png";

function Navbar({ SetlogpopUp }) {
  const { getTotalAmout, token, setToken } = useContext(StoreMenu);
  const [active, setActive] = useState("Home");

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

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
        {!token ? (
          <button onClick={() => SetlogpopUp(true)} className="homeBtn">
            sign in
          </button>
        ) : (
          <div className="profile-AfterSignin">
            <img className="Profiles" src={profile} alt="" />

            <ul className="profileDropdown">
              <div className="profileList">
                <li>
                  <img src={bag} alt="" /> <p>Orders</p>
                </li>
                <hr />
                <li onClick={logOut}>
                  <img src={logout} alt="" /> <p>Logout</p>
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
