import React from "react";
import "./solutions.css";

const Solutions = () => {
  return (
    <section class="cta-banner">
      <div
        class="container-fluid bg-cover section-bg"
        // style="background-image: url('assets/img/cta_bg1.png')"
      >
        <div class="cta-content">
          <div class="row align-items-center">
            <div class="col-xl-7 text-white col-12 text-center text-xl-left">
              <h1>
                Ready To Get Free Consulations For <br /> Any Kind Of It
                Solutions ?{" "}
              </h1>
            </div>
            <div class="col-xl-5 col-12 text-center text-xl-right">
              <a href="" class="theme-btn mt-4 mt-xl-0">
                Get a quote <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
