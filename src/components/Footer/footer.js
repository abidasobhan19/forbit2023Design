import React from "react";

import "./footer.css";

const Footer = () => {
  const handleClickScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="Contact" className="Footer">
      <footer>
        <div class="container ">
          <div class="row">
            <div class="col-lg-5 col-md-12 col-sm-12">
              {/* <img
                src="https://i.ibb.co/MDsgvZ6/Fly-Air-bg.png"
                class="logo img-fluid"
                alt=""
                style={{ width: 110, height: 100 }}
              /> */}
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
              <h5>Helpful Links</h5>
              <ul class="footer-nav">
                <li
                  onClick={() => {
                    handleClickScroll("AboutUs");
                  }}
                >
                  <a>
                    <i class="fa fa-angle-right"></i>
                    <span>About Us</span>
                  </a>
                </li>
                <li
                  onClick={() => {
                    handleClickScroll("Services");
                  }}
                >
                  <a>
                    <i class="fa fa-angle-right"></i>
                    <span>Services</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-6 col-6">
              <h5>Support</h5>
              <ul class="footer-nav">
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-angle-right"></i>
                    <span>Terms of Use</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-12">
              <h5>Contact Us</h5>
              <div class="address">
                <p>
                  House No: #09, Shah Ali Bagh
                  <br />
                  Dhaka , Bangladesh
                </p>
                <p>Phone: +8801313-343311</p>
                <p>
                  <span>E-Mail:</span>
                  <a href="#">fobitbd@gmail.com</a>
                </p>
                <ul class="social">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-github-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <p class="copyright">
                © 2023 Fobit Limited. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
