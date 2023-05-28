import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./nav.css";

import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Grid from "@mui/material/Grid";
import { Link, animateScroll as scroll } from "react-scroll";

function ElevationScroll(props) {
  const { children, window } = props;
  console.log("nav", children);
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "#FAFAFA" : "transparent",
      transition: "background-color 0.3s ease-out",
      alignItems: "center",
      justifyContent: "center",
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Nav = (props) => {
  const handleClickScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <nav class="navbar">
                <div class="navbar-container container">
                  <input type="checkbox" name="" id="" />
                  <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                  </div>
                  <ul class="menu-items">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li
                      onClick={() => {
                        handleClickScroll("AboutUs");
                      }}
                    >
                      <a>About</a>
                    </li>
                    <li
                      onClick={() => {
                        handleClickScroll("OurProjects");
                      }}
                    >
                      <a>Our Projects</a>
                    </li>

                    <li
                      onClick={() => {
                        handleClickScroll("Services");
                      }}
                    >
                      <a>Services</a>
                    </li>
                    <li
                      onClick={() => {
                        handleClickScroll("Members");
                      }}
                    >
                      <a>Members</a>
                    </li>

                    <li
                      onClick={() => {
                        handleClickScroll("Contact");
                      }}
                    >
                      <a>Contact</a>
                    </li>
                  </ul>
                  <h1 class="logo">Forbit</h1>
                </div>
              </nav>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Nav;
