import React, { useContext, useState } from "react";
import "./LoginPop.css";
import dismiss from "../../assets/cross_icon.png";
import { StoreMenu } from "../../Context/StoreMenu";
import axios from "axios";

function LoginPop({ SetlogpopUp }) {
  const { url, setToken } = useContext(StoreMenu);
  const [foodLogin, SetfoodLogin] = useState("Login");

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if (foodLogin === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);

      SetlogpopUp(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="LoginPop">
      <div className="foodOrder_Form">
        <form onSubmit={onSubmitHandler} className="theForm">
          <div className="logIn-tittle">
            <h1>{foodLogin}</h1>
            <img src={dismiss} alt="" />
            {/* onClick={() => SetlogpopUp(false)} */}
          </div>

          <div className="formInputs">
            {foodLogin === "Login" ? (
              <></>
            ) : (
              <>
                <input
                  onChange={onChangeHandler}
                  type="text"
                  name="name"
                  value={data.name}
                  placeholder="Your name"
                  required
                />
              </>
            )}
            <div>
              <input
                onChange={onChangeHandler}
                type="text"
                name="email"
                value={data.email}
                placeholder="Your email"
                required
              />

              <input
                onChange={onChangeHandler}
                type="text"
                name="password"
                value={data.password}
                placeholder="Password"
                required
              />
            </div>
          </div>

          <button className="logbtn" type="submit">
            {foodLogin === "Sign up" ? "Create account" : "Login"}
          </button>

          <div className="check-box">
            <input type="checkbox" required />
            <p>By continuing. i a gree to the forms of use & privacy policy</p>
          </div>

          <div className="ClickHere">
            {foodLogin === "Login" ? (
              <>
                Create a new account?{" "}
                <span onClick={() => SetfoodLogin("Sign up")}>Click here</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    SetfoodLogin("Login");
                  }}
                >
                  Login here
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPop;
