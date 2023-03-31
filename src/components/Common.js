import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Common extends Component {
  render() {
    return (
      <>
        <section className="d-flex align-items-center" id="header">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-start  justify-content-center flex-column">
                    <h1 className="text-left">
                      {this.props.title}
                      <strong className="brand-name"> WebzTechnical</strong>
                    </h1>
                    <h2 className="my-3 text-left">
                      We are team of talented developer making websites
                    </h2>
                    <div className="mt-3 ">
                      <NavLink
                        to={this.props.visit}
                        className="btn-get-started"
                      >
                        {this.props.btnName}
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={this.props.imgsrc}
                      alt="home-img"
                      className="img-fuild animated in-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Common;
