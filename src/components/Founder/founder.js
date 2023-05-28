import React from "react";
import "./founder.css";

const FounderSection = () => {
  return (
    <section id="Members" class="our-team-wrapper section-padding pb-0">
      <div class="container">
        <div class="row align-items-center mb-40 ">
          <div class="col-12 col-md-6">
            <div class="section-title">
              <p>Board Of Directors</p>
              <h1>Meet Our Board Of Directors</h1>
            </div>
          </div>
        </div>

        <div class="team-members-list row d-flex  mb-40">
          <div class="col-12 col-md-6 col-xl-3">
            <div class="single-team-member">
              <div
                class="member-img bg-cover bg-center"
                // style="background-image: url('assets/img/team/team1.jpg')"
              ></div>
              <div class="member-bio">
                <h4>Mohammad Shuman</h4>
                <p>Business Manager</p>
              </div>
              <div class="social-profile">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-behance"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="single-team-member active">
              <div
                class="member-img bg-cover bg-center"
                // style="background-image: url('assets/img/team/team2.jpg')"
              ></div>
              <div class="member-bio">
                <h4>Sohel Ahmed</h4>
                <p>Dictector</p>
              </div>
              <div class="social-profile">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-behance"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="single-team-member">
              <div
                class="member-img bg-cover bg-center"
                // style="background-image: url('assets/img/team/team3.jpg')"
              ></div>
              <div class="member-bio">
                <h4>Mohammad Shumon</h4>
                <p>Business Manager</p>
              </div>
              <div class="social-profile">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-behance"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div class="col-12 col-md-6 col-xl-3">
            <div class="single-team-member">
              <div
                class="member-img bg-cover bg-center"
                style="background-image: url('assets/img/team/team4.jpg')"
              ></div>
              <div class="member-bio">
                <h4>Michael L. Branch</h4>
                <p>Product Manager</p>
              </div>
              <div class="social-profile">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-behance"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
