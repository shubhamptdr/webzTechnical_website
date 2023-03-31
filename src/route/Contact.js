import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      phone: "",
      email: "",
      msg: "",
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${this.state.fullname}. My contact number is ${this.state.phone}`
    );
  };

  inputEvent = (event) => {
    const { name, value } = event.target;
    this.setState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  render() {
    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={this.formSubmit}>
                <div class="mb-3 text-left">
                  <label for="exampleFormControlInput1" class="form-label">
                    FullName
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.inputEvent}
                    placeholder="Enter your name"
                  />
                </div>
                <div class="mb-3 text-left">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.inputEvent}
                    placeholder="mobile number"
                  />
                </div>
                <div class="mb-3 text-left">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={this.state.email}
                    onChange={this.inputEvent}
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3 text-left">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={this.state.msg}
                    onChange={this.inputEvent}
                  ></textarea>
                </div>
                <div class="col-12 text-left">
                  <button class="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
