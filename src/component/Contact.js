import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="py-5 text-center">About Us</h1>
        <hr />

        <div className="col-md-6">
          <img src="./assets/images/contact.png" alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <form action="">
          <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Full name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Mobile"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Address
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
