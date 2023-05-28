import React from "react";

import "./serrvices.css";

const Services = () => {
  return (
    <section
      id="Services"
      class=" Services service-area bg-relative pd-top-100"
    >
      <img
        class="position-bottom-left top_image_bounce"
        src="https://wowtheme7.com/tf/agiletech/assets/img/icon/4.png"
        alt="img"
      />
      <div class="container">
        <div class="section-title text-center">
          <h6 class="sub-title">CREATIVE SERVICES</h6>
          <h2 class="title">
            Your Partner In <span>Digital</span> Success
          </h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-service-inner text-center">
              <div class="thumb">
                <img
                  src="https://wowtheme7.com/tf/agiletech/assets/img/service-icon/1.png"
                  alt="img"
                />
              </div>
              <div class="details">
                <h5>
                  <a href="service-details.html">IOT</a>
                </h5>
                <p>
                  We provide IoT services that help businesses improve their
                  efficiency, productivity, safety, and customer service. Our
                  services include advisory consulting for IoT planning, secure
                  device connectivity, management, storage, and analytics.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service-inner text-center">
              <div class="thumb">
                <img
                  src="https://wowtheme7.com/tf/agiletech/assets/img/service-icon/2.png"
                  alt="img"
                />
              </div>
              <div class="details">
                <h5>
                  <a href="service-details.html">Digital Marketing</a>
                </h5>
                <p>
                  We provide digital marketing services that help businesses
                  reach their target audience and achieve their marketing goals.
                  Our services include search engine optimization (SEO),
                  pay-per-click (PPC) advertising, social media marketing, and
                  content marketing
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service-inner text-center">
              <div class="thumb">
                <img
                  src="https://wowtheme7.com/tf/agiletech/assets/img/service-icon/3.png"
                  alt="img"
                />
              </div>
              <div class="details">
                <h5>
                  <a href="service-details.html">Cyber Security</a>
                </h5>
                <p>
                  We provide cyber security services that help businesses
                  protect their data, systems, and networks from cyber threats.
                  Our services include threat intelligence, vulnerability
                  assessment, penetration testing, incident response, and
                  training
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service-inner text-center">
              <div class="thumb">
                <img
                  src="https://wowtheme7.com/tf/agiletech/assets/img/service-icon/3.png"
                  alt="img"
                />
              </div>
              <div class="details">
                <h5>
                  <a href="service-details.html">WEB DESIGN</a>
                </h5>
                <p>
                  We provide web design services that help businesses create a
                  professional and engaging online presence. Our services
                  include website design, development, and hosting. We have a
                  team of experienced web designers and developers who can help
                  you create a website that meets your specific needs and budget
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service-inner text-center">
              <div class="thumb">
                <img
                  src="https://wowtheme7.com/tf/agiletech/assets/img/service-icon/3.png"
                  alt="img"
                />
              </div>
              <div class="details">
                <h5>
                  <a href="service-details.html">APP DEVELOPMENT</a>
                </h5>
                <p>
                  We provide app development services that help businesses
                  create mobile apps that meet their specific needs and goals.
                  Our services include app design, development, and testing. We
                  have a team of experienced app developers who can help you
                  create an app that is user-friendly, engaging, and effective
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-service-inner text-center">
              <div class="thumb">
                <img
                  src="https://wowtheme7.com/tf/agiletech/assets/img/service-icon/3.png"
                  alt="img"
                />
              </div>
              <div class="details">
                <h5>
                  <a href="service-details.html">GRAPHICS DESIGN</a>
                </h5>
                <p>
                  We provide graphics design services that help businesses
                  create visually <br />
                  appealing and effective marketing materials.
                  <br />
                  Our services include logo design, branding, web design, print
                  design, and more
                </p>
                {/* <a class="btn btn-border-base" href="service-details.html">
                  Touch More{" "}
                  <svg
                    class="svg-inline--fa fa-plus fa-w-14"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fa"
                    data-icon="plus"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                    ></path>
                  </svg>
               
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
