import React, { useState } from "react";
import "./FormScreen.css";

const validEmailRegex = RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function FormScreen({ handleChange, errors }) {
  const [AgreeWANotification, setAgreeWANotification] = useState(false);
  const [AgreeTnC, setAgreeTnC] = useState(false);

  return (
    <React.Fragment>
      <div className="form-container">
        {/* Form Header */}
        <div className="form-header">
          <span>Please fill the details to continue</span>
        </div>

        {/* Form Section */}
        <div className="form">
          <div className="amount">
            <label htmlFor="amount">Payment Amout for Byju's</label>
            <input
              type="number"
              name="amount"
              onChange={handleChange}
              noValidate
              placeholder="Ex. 13000"
              autoComplete="off"
            />
            <span className="description">
              Add the amount you need to pay the vendor for your purchase
            </span>
            {errors.amount < 9 && errors.amount.length <= 1 && (
              <span className="error">Amount must be more than 10</span>
            )}
          </div>
          <div className="phoneNumber">
            <label htmlFor="phoneNumber">Mobile Number</label>
            <input
              type="number"
              name="phoneNumber"
              onChange={handleChange}
              noValidate
              placeholder="Ex. 1234567890"
              autoComplete="off"
            />
            <span className="description">
              Mobile Number is needed for authentication of your accounts
            </span>
            {errors.phoneNumber.length > 1 && errors.phoneNumber.length < 9 && (
              <span className="error">Please Enter Valid Phone Number</span>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Ex. abc@xyz.com"
              autoComplete="off"
            />
            <span className="description">
              Add your email id to receive invoice, notification and offers
            </span>
            {!validEmailRegex.test(errors.email) && errors.email.length > 1 && (
              <span className="error">Please Enter Valid email</span>
            )}
          </div>
        </div>
      </div>

      {/* Form T & C */}
      <div className="tnc-card">
        <div className="tnc" onClick={() => setAgreeTnC(!AgreeTnC)}>
          <i
            className={`fa fa-check icons ${AgreeTnC && "selectedTnC"}`}
            aria-hidden="true"
          ></i>
          <span>Agree to Terms and Conditions and Privacy policy</span>
        </div>
        <div
          className="tnc"
          onClick={() => setAgreeWANotification(!AgreeWANotification)}
        >
          <i
            className={`fa fa-check icons ${
              AgreeWANotification && "selectedWA"
            }`}
            aria-hidden="true"
          ></i>
          <span>Agree to receive Whatsapp notifications</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FormScreen;
