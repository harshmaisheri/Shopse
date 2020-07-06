import React from "react";

function Header() {
  return (
    <React.Fragment>
      {/* Header Bar Section */}
      <div className="section-1">
        <div className="left">
          <span className="btn-close-section1 color-blue" id="btn-close">
            &times;
          </span>
        </div>
        <div>
          <img
            src={require("../../assets/images/shopse-logo-blue.png")}
            width="100"
            alt="Logo"
          />
        </div>
        <div className="right telephone-container">
          <span id="contactus">
            <img
              src={require("../../assets/images/telephone.png")}
              alt="tel-icon"
            />
          </span>
        </div>
      </div>

      {/* Header Banner Section */}
      <div className="header">
        <div
          className="section-2"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={require("../../assets/images/byju.png")}
            className="merchant-logo"
            id="merchantlogo"
            alt="merchantlogo"
          />
        </div>
        <div className="section-3">
          <div
            className="bottom-section"
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div id="headershopname" className="text-center landing-header">
              ShopSe
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
