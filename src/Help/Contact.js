import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import "./Help.css";
function Contact() {
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className='help-center'>
      <div className="container spaceing-box">
        <div className="row box-content">
          <div className="col-md-12">
            <div className="help">
              <h1>Sparke Help Center</h1>
              <div className="help2">
                <p>FAQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-center" />
      <div className="container spaceing-box">
        <div className="row">
          <div className="col-md-6">
            <div className="help3-sub">
              <h4>Do you provide international delivery?</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="help-per">
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s
                easy. Just click “Edit Text” or double click me to add your own
                content and make changes to the font. I’m a great place for you to
                tell a story and let your users know a little more about you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-center" />
      <div className="container spaceing-box">
        <div className="row">
          <div className="col-md-6">
            <div className="help3-sub">
              <h4>How do I track my order?</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="help-per">
              <p>
                How do I track my order? I'm a paragraph. Click here to add your
                own text and edit me. I’m a great place for you to tell a story
                and let your users know a little more about you..
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-center" />
      <div className="container spaceing-box ">
        <div className="row">
          <div className="col-md-6">
            <div className="help3-sub">
              <h4>How do I return an item?</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="help-per">
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s
                easy. Just click “Edit Text” or double click me to add your own
                content and make changes to the font. I’m a great place for you to
                tell a story and let your users know a little more about you.
              </p>
              <br />
              <p>
                This is a great space to write a long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what services
                you provide. Tell your visitors the story of how you came up with
                the idea for your business and what makes you different from your
                competitors. Make your company stand out and show your visitors
                who you are.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-center" />
      <div className="container spaceing-box">
        <div className="row">
          <div className="col-md-6">
            <div className="help3-sub">
              <h4>How can I contact your couriers?</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="help-per">
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s
                easy. Just click “Edit Text” or double click me to add your own
                content and make changes to the font. I’m a great place for you to
                tell a story and let your users know a little more about you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-center" />
      <div className="container spaceing-box">
        <div className="row">
          <div className="col-md-6">
            <div className="help3-sub">
              <h4>What is your return policy?</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="help-per">
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s
                easy. Just click “Edit Text” or double click me to add your own
                content and make changes to the font. I’m a great place for you to
                tell a story and let your users know a little more about you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-center" />
      <div className="container spaceing-box">
        <div className="row">
          <div className="col-md-6">
            <div className="help3-sub">
              <h4>What are your delivery options?</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="help-per">
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s
                easy. Just click “Edit Text” or double click me to add your own
                content and make changes to the font. I’m a great place for you to
                tell a story and let your users know a little more about you.
              </p>
              <br />
              <p>
                This is a great space to write a long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what services
                you provide. Tell your visitors the story of how you came up with
                the idea for your business and what makes you different from your
                competitors. Make your company stand out and show your visitors
                who you are.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={contactRef} className="form-contact">
        <div className="contact-1 container spaceing-box">
          <h1 className="contact-head" style={{ paddingTop: "80px" }}>
            Have a question? We are happy to help.
          </h1>
          <p
            style={{
              fontWeight: "bolder",
              marginTop: "20px",
            }}
          >
            Contact Us
          </p>
        </div>
        <div className="contact-1 container spaceing-box">
          <form className="contact-form">
            <div className="form-row spaces">
              <div className="col-sm-4">
                <label htmlFor="" className="contact-label">
                  First Name*
                </label>
                <input
                  type="text"
                  className="form-control contact-input sml"
                  placeholder=""
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="" className="contact-label">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="form-control contact-input sml"
                  placeholder=""
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="" className="contact-label">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control contact-input sml"
                  placeholder=""
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-sm-4">
                <label htmlFor="" className="contact-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control contact-input sml"
                  placeholder=""
                />
              </div>
              <div className="col-sm-8">
                <label htmlFor="" className="contact-label ">
                  Message
                </label>
                <input
                  type="text"
                  className="form-control contact-input max"
                  placeholder=""
                />
              </div>
            </div>
            <div className="form-row ">
              <div className="col-sm-4">
                <button className="form-btn bg-gray">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
