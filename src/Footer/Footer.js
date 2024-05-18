import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer1 col-span-12">
          <div className="footer2 col-span-4">
            <div className="footer2-sub">
              <div className="footer2-sub2">
                <p className="footer2-p footer-p1">
                  Subscribe to Our Newsletter
                </p>
                <p className="footer2-p footer-p2">
                  Sigh up to receive updates on new products and special offers
                </p>
              </div>
            </div>
          </div>
          <div className="footer3 col-span-8">
            <div className="footer3-sub">
              <p className="footer3-label" htmlFor="">
                Email Address*
              </p>
              <div class="search-container">
                <input type="text" class="search-input" />
                <button class="search-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer4  grid-cols-5">
          <div className="footer4-sub spark">
            <div className="footer4-sub2 ">
              <div className="footer-4-div ">
                <a class="navbar-brand d-flex align-items-center" href="/">
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="26" width="26" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage">
                    <defs>
                      <style>#comp-kbgakxea_r_comp-kd5pcdw0 svg [data-color="1"] </style>
                    </defs>
                    <g>
                      <path d="M124.615 20h-49.23C44.797 20 20 44.797 20 75.385v49.231C20 155.204 44.797 180 75.385 180h49.231C155.204 180 180 155.204 180 124.615v-49.23C180 44.797 155.204 20 124.615 20zm27.693 132.308H47.692V47.692h104.615v104.616" fill="#f0f0f0" data-color="1"></path>
                    </g>
                  </svg>

                  <span>Sparke</span> </a>
              </div>
              <p className="footer-4-p footer-4-p1">
                Have a question about a product or order?
              </p>
              <a className="footer-4-p footer-4-a">Help Center</a>
            </div>
          </div>
          <div className="footer4-sub ">
            <div className="footer4-sub2 ">
              <div className="footer-4-div ">
                <p className="footer-4-p " id="shop">Shop</p>
                <br />
              </div>
              <a className="anker footer-4-p  footer-4-a" href="/AllProducts">All Products</a>
              <br />
              <a className="footer-4-p footer-4-a " href="/CellPhones">Cell Phones</a>
              <br />
              <a className="footer-4-p footer-4-a" href="/Speakerhead">Speakers & Headphones</a>
              <br />
              <a className="footer-4-p footer-4-a" href="/Laptoptabs">Laptops & Tablets</a>
              <br />
              <a className="footer-4-p footer-4-a" href="/SpecialOffers">Special Offers</a>
            </div>
          </div>
          <div className="footer4-sub spark">
            <div className="footer4-sub2">
              <div className="footer-4-div">
                <p className="footer-4-p ">Policy</p>
                <br />
              </div>
              <a className="anker footer-4-p  footer-4-a" href="/TermsConditions">Terms & Condition</a>
              <br />
              <a className="footer-4-p footer-4-a" href="/PrivacyPolicy">Privacy Policy</a>
              <br />
              <a className="footer-4-p footer-4-a" href="/ShippingPolicy">Shipping Policy</a>
              <br />
              <a className="footer-4-p footer-4-a" href="/RefundPolicy">Refund Policy</a>
              <br />
              <a className="footer-4-p footer-4-a" href="/CookiePolicy">Cookies Policy</a>
            </div>
          </div>
          <div className="footer4-sub">
            <div className="footer4-sub2">
              <div className="footer-4-div">
                <p className="footer-4-p ">Follow Us</p>
                <br />
              </div>
              <a className="anker footer-4-p  footer-4-a">Facebook</a>
              <br />
              <a className="footer-4-p footer-4-a">Instagran</a>
              <br />
            </div>
          </div>
          <div className="footer4-sub sub-contact">
            <div className="footer4-sub2">
              <div className="footer-4-div">
                <p className="footer-4-p ">Contact</p>
                <br />
              </div>
              <p className=" footer-4-p  footer-4-a">info@mysite.com</p>

              <p className="footer-4-p footer-4-a footer4-para">123-456-7890</p>

              <p className="footer-4-p footer-4-a footer4-para">
                500 Terry Francois Streets SF,CA 94158
              </p>

              <p className="footer-ed-p">© 2023 by Sparke.<br /> Proudly created with <a className="footer-end-a">Editor X</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
