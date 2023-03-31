import React, { Component } from "react";
import Card from "../components/Card";
import CardData from "../components/CardData";
class Services extends Component {
  render() {
    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-9 mx-auto">
              <div className="row gy-4">
                {CardData.map((value, index) => {
                  return (
                    <Card
                      key={index}
                      imgsrc={value.imgsrc}
                      title={value.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
