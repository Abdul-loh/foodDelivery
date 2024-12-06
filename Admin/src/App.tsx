import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Sidebar from "./Component/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="sideContent">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/list" element={<List />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
