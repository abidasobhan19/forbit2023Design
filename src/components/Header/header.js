import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className=" Header digiwave">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6 col-lg-6 digiheader__content">
            <h2 className="content-sh">Forbit Limited</h2>
            <h1 className="content-h">Onestop IT Services for Your Business</h1>
            <p className="content-d">
              Forbit Limited is a company that is dedicated to providing its
              customers with the best possible products and services. We believe
              that our customers deserve the highest quality, and we are
              committed to exceeding their expectations
            </p>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6 digiheader__thumb d-lg-none">
            <div className="img">
              <img
                // src="https://antechr.quomodothemes.website/static/media/3.441d898e7d9143460443.webp"
                src="https://forbit.tech/static/media/welcome-thumb.615c348f.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
