import React, { useState } from "react";
import "./LoginPop.css";
import dismiss from "../../assets/cross_icon.png";
function LoginPop({ SetlogpopUp }) {
  const [foodLogin, SetfoodLogin] = useState("Login");

  return (
    <div className="LoginPop">
      <div className="foodOrder_Form">
        <form className="theForm">
          <div className="logIn-tittle">
            <h1>{foodLogin}</h1>
            <img onClick={() => SetlogpopUp(false)} src={dismiss} alt="" />
          </div>

          <div className="formInputs">
            {foodLogin === "Login" ? (
              <>
                <input type="text" placeholder="Your email" required />
                <input type="text" placeholder="Password" required />
              </>
            ) : (
              <>
                <input type="text" placeholder="Your name" required />
                <input type="text" placeholder="Your email" required />
                <input type="text" placeholder="Password" required />
              </>
            )}
          </div>

          <div>
            <button className="logbtn" type="Submit">
              {foodLogin === "Login" ? "Login" : "Create account"}
            </button>
          </div>

          <div className="check-box">
            <input type="checkbox" />
            <p>By continuing. i a gree to the forms of use & privacy policy</p>
          </div>
        </form>
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
      </div>
    </div>
  );
}

export default LoginPop;
