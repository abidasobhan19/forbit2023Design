import React from "react";
import "./projects.css";
import Contruction from "../../Image/construction.png";
import Account from "../../Image/account.png";
const Projects = () => {
  return (
    <section className="Projects" id="OurProjects">
      <div className="Heading_upper">
        <h2 className="Heading"> Our Projects</h2>
      </div>
      <div className="container">
        <div className="item" id={1}>
          <img
            src="https://sultantracker.com/static/media/City_driver.fd3eed00.svg"
            alt=""
          />
          <div className="text">
            <h3>Sultan Tracker</h3>
            <p>
              Sultan Tracker is a topnotch and highly tailored vehicle tracking
              system that can help you locate and track your vehicles
            </p>
          </div>
          <div className="button">Learn More</div>
        </div>
        <div className="item" id={2}>
          <img src={Contruction} alt="" />
          <div className="text">
            <h3>Construction Manager</h3>
            <p>
              Construction Manager is useful Application User can easily manage
              different workflow like Activity/Task, Finance, Store and
              Employees in a Construction Project
            </p>
          </div>
          <div className="button">Learn More</div>
        </div>
        <div className="item" id={3}>
          <img src={Account} alt="" />
          <div className="text">
            <h3>Account Manager</h3>
            <p>
              Account Manager is the number one app for keeping business
              accounts. The app is simple and secure.
            </p>
          </div>
          <div className="button">Learn More</div>
        </div>
      </div>
      {/* Modal */}
      {/* <div id="preview" className="modal">
        <div className="modal-content">
          <span className="close">×</span>
          <img id="img" src="" />
          <div id="details">
            <h3 id="title" />
            <p id="info">Some text</p>
            <div className="button" id="live">
              View
            </div>
            <i className="fab fa-github-square" id="github" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
