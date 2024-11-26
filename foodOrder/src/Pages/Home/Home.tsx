import React, { useState } from "react";
import "./Home.css";
import Header from "../../Component/Header/Header";
import ExploreMenu from "../../Component/ExploreMenu/ExploreMenu";
import MenuFood from "../../Component/MenuFoods/MenuFood";
import DownloadApp from "../../Component/DownloadApp/DownloadApp";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <>
      <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <MenuFood category={category} />
        <DownloadApp />
      </div>
    </>
  );
}

export default Home;
