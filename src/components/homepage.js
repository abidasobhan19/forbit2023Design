import React from "react";
import { Box, Typography } from "@mui/material";
import Nav from "./nav";

import Solutions from "./Solutions/solutions";

import Footer from "./Footer/footer";
import FounderSection from "./Founder/founder";
import Header from "./Header/header";
import AboutUs from "./AboutUs/aboutus";
import Services from "./Services/services";
import Projects from "./Projects/projects";

const Homepage = () => {
  return (
    <Box style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Nav />

      <Box style={{ background: "#ECF5FF" }}>
        <Header />
        <Box
          style={{ position: "relative", marginTop: -119, overflow: "hidden" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,32L48,48C96,64,192,96,288,106.7C384,117,480,107,576,101.3C672,96,768,96,864,106.7C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Box>
      </Box>

      <Box style={{ marginTop: -10 }}>
        <AboutUs />
      </Box>
      <Box style={{ marginTop: -10 }}>
        <Projects />
      </Box>
      <Box style={{ marginTop: 100 }}>
        <Services />
      </Box>
      <Box display="flex" flexDirection="column">
        <FounderSection />
        <Solutions />
      </Box>

      <Footer />
    </Box>
  );
};

export default Homepage;
