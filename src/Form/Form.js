import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="container">
      <div className="container">
        <h2 class="mb-4"> IPO Details</h2>
        <form>
          <div className="row">
            <div className="col-md-12">
              <h3>OverView</h3>
              <div>
                <textarea
                  id="message"
                  className="w-100"
                  name="message"
                  rows="4"
                  cols="100"
                ></textarea>
                <br />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <h3>IPO Details</h3>
              <div>
                <label htmlFor="">IPO Date</label>
                <input type="text" className="form-control" placeholder="" />
                <br />
                <label htmlFor="">Listing Date</label>

                <input type="text" className="form-control" placeholder="" />
                <br />
                <label htmlFor="">Face Value</label>

                <input type="text" className="form-control" placeholder="" />
                <br />
                <label htmlFor="">Price Band</label>

                <input type="text" className="form-control" placeholder="" />
                <br />
                <label htmlFor="">Total Issue Size</label>

                <input type="text" className="form-control" placeholder="" />
                <br />
                <label htmlFor="">Offer for Sale</label>

                <input type="text" className="form-control" placeholder="" />
                <br />
                <label htmlFor="">Employee Discount</label>

                <input type="text" className="form-control" placeholder="" />
                <br />
                <label htmlFor="">Issue Type</label>

                <input type="text" className="form-control" placeholder="" />
                <br />
                <label htmlFor="">Listing At</label>

                <input type="text" className="form-control" placeholder="" />
                <br />
                <label htmlFor="">Share holding pre issue</label>

                <input type="text" className="form-control" placeholder="" />
                <br />
                <label htmlFor="">Share holding post issue</label>

                <input type="text" className="form-control" placeholder="" />
                <br />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 mt-5">
                <h3>IPO Timeline (Tentative Schedule)</h3>
                <div>
                  <label htmlFor="">IPO Open Date</label>

                  <input type="text" className="form-control" placeholder="" />
                  <br />
                  <label htmlFor="">IPO Close Date</label>

                  <input type="text" className="form-control" placeholder="" />
                  <br />
                  <label htmlFor="">Basis of Allotment</label>

                  <input type="text" className="form-control" placeholder="" />
                  <br />
                  <label htmlFor="">Initiation of Refunds</label>

                  <input type="text" className="form-control" placeholder="" />
                  <br />
                  <label htmlFor="">Credit of Shares to Demat</label>

                  <input type="text" className="form-control" placeholder="" />
                  <br />
                  <label htmlFor="">Listing Date</label>

                  <input type="text" className="form-control" placeholder="" />
                  <br />
                  <label htmlFor="">
                    Cut-off time for UPI mandate confirmation
                  </label>

                  <input type="text" className="form-control" placeholder="" />
                  <br />
                </div>
              </div>
              <div className="col-md-12">
                <h3>IPO Reservation</h3>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                  <br />
                </div>
              </div>
            </div>
          </div>
          {/* new area */}
          <div className="row">
            <div className="col-md-6 mt-3">
              <h3>Investor Category</h3>

              <div className="row">
                <label htmlFor="">Anchor Investor Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>
              <div className="row">
                <label htmlFor="">QIB Shares Offered</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees"
                />
              </div>

              <div className="row">
                <label htmlFor="">NII (HNI) Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>

              <div className="row">
                <label htmlFor="">  bNII {">"} ₹10L</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>

              <div className="row">
                <label htmlFor="">  sNII {"<"} ₹10L</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>
              <div className="row">
                <label htmlFor="">Retail Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>
              <div className="row">
                <label htmlFor="">Employee Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>
              <div className="row">
                <label htmlFor="">Total Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 mt-5">
                <h3>Gopal Namkeen IPO Lot Size</h3>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <h3>Application</h3>
                <div>
                  <div className="row">
                    <label htmlFor="">Retail (Min)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lots

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shares
 

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount 

                  "
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">Retail (Min)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lots

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shares
 

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount 

                  "
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">Retail (Max)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lots

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shares
 

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount 

                  "
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">S-HNI (Min)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lots

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shares
 

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount 

                  "
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">S-HNI (Max)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lots

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shares
 

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount 

                  "
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">B-HNI (Min)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lots

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shares
 

                  "
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount 

                  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3">
              <h3>Investor Category</h3>

              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="">Anchor Investor Shares Offered</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Shares Offered
                  "
                  />
                  </div>
                  <div className="col-md-6">
                  <label htmlFor="">Anchor Investor Shares Offered</label>
                    <input
                      type="text"
                      className="form-control disabled"
                      placeholder="Maximum Allottees 

                  "
                    />
                  </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                <label htmlFor="">QIB Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered"
                />
                </div>
                <div className="col-md-6">
                <label htmlFor="">QIB Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees"
                />
                </div>
              </div>

              <div className="row">
                <label htmlFor="">NII (HNI) Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>

              <div className="row">
                <label htmlFor="">  bNII {">"} ₹10L</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>

              <div className="row">
                <label htmlFor="">  sNII {"<"} ₹10L</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>
              <div className="row">
                <label htmlFor="">Retail Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>
              <div className="row">
                <label htmlFor="">Employee Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>
              <div className="row">
                <label htmlFor="">Total Shares Offered</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shares Offered
                  "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Maximum Allottees 

                  "
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 mt-5">
                <h3>Gopal Namkeen IPO Anchor Investors Details</h3>
              </div>
              <div className="col-md-12 mt-5">
                <h3>Bid Date</h3>
                <div>
                  <div className="row">
                    <label htmlFor="">Shares Offered</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="March 5, 2024"
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">Anchor Portion Size (In Cr.)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="March 5, 2024"
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">
                      Anchor lock-in period end date for 50% shares (30 Days)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="March 5, 2024"
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">
                      Anchor lock-in period end date for remaining shares (90
                      Days)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="March 5, 2024"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3">
              <h3>Gopal Namkeen IPO Promoter Holding</h3>
              <div className="col-md-12">
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <label htmlFor="">Share Holding Pre Issue</label>

                <input type="text" className="form-control" placeholder="" />
              </div>

              <div className="row">
                <label htmlFor="">Share Holding Pre Issue</label>

                <input type="text" className="form-control" placeholder="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 mt-3">
                <h3>About Gopal Snacks Limited</h3>
              </div>
              <div className="col-md-12">
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3">
              <h3>Gopal Snacks Limited Financial Information (Restated)</h3>

              <div className="col-md-12">
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
              <h3>Period Ended</h3>
              <div className="row">
                <label htmlFor="">Assets</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="30-Sep-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-22 "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-21"
                />
              </div>

              <div className="row">
                <label htmlFor="">Assets</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="30-Sep-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-22 "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-21"
                />
              </div>
              <div className="row">
                <label htmlFor="">Revenue</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="30-Sep-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-22 "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-21"
                />
              </div>
              <div className="row">
                <label htmlFor="">Profit After Tax</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="30-Sep-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-22 "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-21"
                />
              </div>
              <div className="row">
                <label htmlFor="">Net Worth</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="30-Sep-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-22 "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-21"
                />
              </div>
              <div className="row">
                <label htmlFor="">Reserves and Surplus</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="30-Sep-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-22 "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-21"
                />
              </div>
              <div className="row">
                <label htmlFor="">Total Borrowing</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="30-Sep-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-23"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-22 "
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="31-Mar-21"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 mt-3">
                <h3>About Gopal Snacks Limited</h3>
              </div>
              <div className="col-md-12">
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3">
              <h3>Key Performance Indicators</h3>
              <div className="col-md-12">
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
              <h3>KPI</h3>
              <div className="row">
                <label htmlFor="">ROE</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="values"
                />
              </div>
              <div className="row">
                <label htmlFor="">ROCE</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="values"
                />
              </div>
              <div className="row">
                <label htmlFor="">Debt/Equity</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="values"
                />
              </div>
              <div className="row">
                <label htmlFor="">RoNW</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="values"
                />
              </div>
              <div className="row">
                <label htmlFor="">P/BV</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="values"
                />
              </div>
              <div className="row">
                <label htmlFor="">PAT Margin (%)</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="values"
                />
              </div>
              <div className="row">
                <label htmlFor="">EPS (Rs) </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pre IPO"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Post IPO
                  "
                />
              </div>
              <div className="row">
                <label htmlFor="">P/E (x) </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Pre IPO"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Post IPO"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 mt-3">
                <h3>Objects of the Issue (Gopal Namkeen IPO Objectives)</h3>
              </div>
              <div className="col-md-12">
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3">
              <h3>Gopal Snacks Limited Contact Details</h3>
              <div className="col-md-12">
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 mt-3">
                <h3>Gopal Namkeen IPO Registrar</h3>
              </div>
              <div className="col-md-12">
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3">
              <h3>Gopal Namkeen IPO Lead Manager(s)</h3>
              <div className="col-md-12">
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
