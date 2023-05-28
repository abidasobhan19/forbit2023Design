import React from "react";

import "./aboutus.css";

const AboutUs = () => {
  return (
    <section id="AboutUs">
      <div class="AboutUS about-style-four-area default-padding">
        <div class="container">
          <div class="row align-center">
            <div class="about-style-four col-lg-5">
              <div class="thumb">
                <img
                  src="https://validthemes.live/themeforest/crysa/assets/img/about/7.jpg"
                  alt="Thumb"
                />
                <div class="shape-move"></div>
                <div class="shape-move"></div>
              </div>
            </div>
            <div class="about-style-four col-lg-6 offset-lg-1">
              <h4 class="sub-heading mb-20">Who we are</h4>
              <h2 class="heading">
                Preparing for your success <br /> trusted source in IT services
              </h2>
              <p class="mb-0">
                Forbit Limited is a software farm and custom IoT device
                manufacturer headquartered in Dhaka, Bangladesh The company was
                founded in 2018 by Four engineers with a passion for building
                innovative software and hardware solutions.
              </p>
              <ul>
                <li>
                  Forbit has a team of experienced software developers and
                  engineers who are experts in a variety of technologies,
                  including Java, Python , Nodejs , React and embedded systems.
                </li>
                <li>
                  We have a proven track record of delivering high-quality
                  software and hardware solutions to its clients.
                </li>
                <li>
                  We are committed to providing its clients with the best
                  possible service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
