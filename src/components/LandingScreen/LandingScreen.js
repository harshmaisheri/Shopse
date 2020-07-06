import React from "react";

function LandingScreen() {
  return (
    <div>
      <div id="landingscreen" className="landing-div">
        <div className="text-center landing-header">
          <em>No cost EMI Available</em>
        </div>
        <div className="feature-box">
          <div className="col-xs-4 col-sm-4">
            <div className="col-sm-4 feature-img">
              <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
            </div>
            <div className="col-sm-8">
              <p className="feature-text">No Cost EMI</p>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4">
            <div className="col-sm-4 feature-img">
              <i className="fa fa-handshake-o" aria-hidden="true"></i>
            </div>
            <div className="col-sm-8">
              <p className="feature-text">Instant approval</p>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4">
            <div className="col-sm-4 feature-img">
              <i className="fa fa-shield" aria-hidden="true"></i>
            </div>
            <div className="col-sm-8">
              <p className="feature-text">Secure payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
