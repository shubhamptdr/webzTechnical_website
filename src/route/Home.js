import React, { Component } from "react";
import Common from "../components/Common";
import heroImg from "../assests/Home-hero.png";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Common
          title="Grow your business with"
          imgsrc={heroImg}
          visit="/services"
          btnName="Get Started"
        />
      </>
    );
  }
}

export default Home;
