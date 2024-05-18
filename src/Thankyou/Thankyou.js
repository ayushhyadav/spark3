import React from "react";
import "./Thankyou.css";

function Thankyou() {
  return (
    <div className="container main-width">
      <div className="row">
        <div className="col-md-12">
          <div className="thankyou-heading text-center">
            <h1>Thank You,Customer Name</h1>
            <p>You'll receive a confirmation email soon</p>
            <span>order number:10000</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex">
          <div className="product-img">
            <img src="assets/gift.png" alt="" />
          </div>
          <div className="product-option">
            <b>Product Name</b>
            <p>$0.00</p>
            <p>Product option 1</p>
            <p>Product option 2</p>
            <p>Product option 3</p>
          </div>
        </div>
        <div className="col-md-6">
          <b className="thankyou-p-4">Qty: 1</b>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="row">
        <div className="col-md-6">
          <div className="total">
            <h3>Note</h3>
            <p>Your Customer's note will show here.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="total-table">
            <table class="table">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <td>Delivery</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>@Sales Tax</td>
                  <td>$10.00</td>
                </tr>
              </tbody>
            </table>
            <table class="tables">
              <tbody>
                <tr>
                  <td>Total</td>
                  <td>$10.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="Delivery">
            <h4>Delivery address</h4>
            <ul>
              <li>Customer Name</li>
              <li>Street, City, State Zip Code</li>
              <li>Country</li>
              <li>Phone Number</li>
              <li>3-5 Business Days</li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="Billing">
            <h4>Billing address</h4>
            <ul>
              <li>Customer Name</li>
              <li>Street, City, State Zip Code</li>
              <li>Country</li>
              <li>Phone Number</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Browsing text-center">
        <a href="">Continue Browsing</a>
      </div>
    </div>

  );
}

export default Thankyou;
