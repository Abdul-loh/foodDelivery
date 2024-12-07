import "./Header.css";
function Header() {
  return (
    <div className="Heading" id="Header">
      <div className="Heading_Ground">
        <div className="Heading_Tittle">
          <h2>Order your Favorite food here </h2>
          <p>
            choose from a diverse menu featuring a deletable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your craving and elevate your dining
            experience, one delicious meal at a time.
          </p>

          <a href="#ExploreMenu">
            <button className="btnMenu">View menu</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
