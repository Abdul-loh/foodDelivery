import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Component/Footers/Footer";
import LoginPop from "./Component/LoginPop/LoginPop";

function App() {
  const [logpopUp, SetlogpopUp] = useState(false);
  return (
    <>
      {logpopUp ? <LoginPop SetlogpopUp={SetlogpopUp} /> : <></>}
      <div className="App">
        <Navbar SetlogpopUp={SetlogpopUp} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Order" element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
