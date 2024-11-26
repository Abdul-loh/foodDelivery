import "./Footer.css";
import tomatFooter from "../../assets/logo.png";
import facebook from "../../assets/facebook_icon.png";
import twitter from "../../assets/twitter_icon.png";
import inkdin from "../../assets/linkedin_icon.png";
import top from "../../assets/imageTop.png";
import { useEffect, useState } from "react";

export default function Footer() {
  const [fixedTop, SetfixedTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? SetfixedTop(true) : SetfixedTop(false);
    });
  }, []);

  return (
    <div className="FooterPages" id="Footer">
      <div className="Footer">
        <div className="tomatoFootersLeft">
          <img src={tomatFooter} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, aut
            ipsum itaque repellendus vitae quisquam accusantium dicta eum
            aperiam sit a. Aliquid adipisci mollitia neque suscipit dolores
            porro doloremque culpa? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div className="Tomato-icon">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={inkdin} alt="" />
          </div>
        </div>

        <div className="tomatoFootersRight">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li> <li>About us</li> <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="tomatoFootersMiddle">
          <h2>GET IN TOUCH</h2>
          <p>+234-7015538376</p>
          <p>contact@tomato.com</p>
        </div>
      </div>
      <hr className="H-r" />
      <p className="footerEnd">
        Copyright 2024 &copy; Tomato.com.All Right Reserved
      </p>
      <div className={`top ${fixedTop ? "topUp" : ""}`}>
        <a href="#Navbar">
          <img className="top" src={top} alt="" />
        </a>
      </div>
    </div>
  );
}
