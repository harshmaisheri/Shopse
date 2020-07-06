import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LandingScreen from "./components/LandingScreen/LandingScreen";
import FormScreen from "./components/FormScreen/FormScreen";
import OTPScreen from "./components/OTPScreen/OTPScreen";

const validateForm = (errors) => {
  console.log(errors);
  let valid = false;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = true));
  return valid;
};

function App() {
  const [BtnText, setBtnText] = useState("Add Personal Details");
  const [screen, setScreen] = useState(1);
  const [error, setError] = useState({
    amount: 0,
    phoneNumber: "",
    email: " ",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setError({ ...error, [name]: value });
  };

  const handleBtn = () => {
    if (screen === 1) {
      setScreen(2);
      setBtnText("Confirm Details");
    } else if (screen === 2) {
      if (validateForm(error)) {
        console.info("Valid Form");
        setScreen(3);
        setBtnText("Verify OTP");
      } else {
        console.error("Invalid Form");
      }
    } else if (screen === 3) {
      alert("Done");
      setScreen(1);
      setBtnText("Add Personal Details");
    }
  };

  return (
    <div className="App">
      <Header />
      {screen === 1 && <LandingScreen />}
      {screen === 2 && (
        <FormScreen
          handleChange={(event) => handleChange(event)}
          errors={error}
        />
      )}
      {screen === 3 && <OTPScreen />}

      <div id="footer" className="footer-bottom text-center">
        <div className="clearfix"></div>
        <div className="landing-footer">
          <div className="text-center">
            <button
              type="button"
              id="submission"
              className="btn btn-success mt btn-check"
              onClick={handleBtn}
            >
              {BtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
