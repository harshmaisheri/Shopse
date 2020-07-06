import React from "react";

function OTPScreen() {
  return (
    <div>
      <div
        id="otpscreen"
        className="panel-group custom-panel-group c-otpscreen d-none"
      >
        <div className="otp-box">
          <h5>Please fill the one time password sent to your mobile number.</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="otp"
              name="otp"
              placeholder="6 digit OTP"
              autocomplete="off"
            />
            <span id="email_error" style={{ color: "red" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPScreen;
