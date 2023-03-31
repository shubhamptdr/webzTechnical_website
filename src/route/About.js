import React, { Component } from "react";
import Common from "../components/Common";
import heroImg from "../assests/About-hero.jpg";

class About extends Component {
  render() {
    return (
      <>
        <Common
          title="Welcome to About page"
          imgsrc={heroImg}
          btnName="Contact Now"
        />
      </>
    );
  }
}

export default About;
