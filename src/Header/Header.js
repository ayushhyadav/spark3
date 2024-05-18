import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faAngleDown, faAngleUp, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { ViewCart } from "../Mycart/ViewCart";

function Header({ cartCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCartClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowSidebar(!showSidebar);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`header-head ${isScrolled ? "scrolled" : ""}`} style={{ width: "100%", zIndex: 2 }}>
      <nav class="navbar">
        <div class="navbar-container container">
          <a class="navbar-brand d-flex align-items-center" href="/">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="26" width="26" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage"><defs><style>#comp-kbgakxea_r_comp-kd5pcdw0 svg [data-color="1"] </style></defs>
              <g>
                <path d="M124.615 20h-49.23C44.797 20 20 44.797 20 75.385v49.231C20 155.204 44.797 180 75.385 180h49.231C155.204 180 180 155.204 180 124.615v-49.23C180 44.797 155.204 20 124.615 20zm27.693 132.308H47.692V47.692h104.615v104.616z" fill="#323232" data-color="1"></path>
              </g>
            </svg>
            <span>Sparke</span> </a>
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="44 64 112 72" viewBox="44 64 112 72" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-label="Open Site Navigation">
              <g>
                <path d="M156 64v6H44v-6h112z"></path>
                <path d="M156 97v6H44v-6h112z"></path>
                <path d="M156 130v6H44v-6h112z"></path>
              </g>
            </svg>
          </div>
          <ul class="menu-items">
            <div className="mobile-icon">
              <svg preserveAspectRatio="none" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="28" width="28" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                <g>
                  <path d="M178.784 173.056L105.728 100l73.056-73.056c1.621-1.621 1.621-4.107 0-5.728s-4.107-1.621-5.728 0L100 94.272 26.944 21.216c-1.621-1.621-4.107-1.621-5.728 0-1.621 1.621-1.621 4.107 0 5.728L94.272 100l-73.056 73.056c-1.621 1.621-1.621 4.107 0 5.728 1.621 1.621 4.107 1.621 5.728 0L100 105.728l73.056 73.056c1.621 1.621 4.107 1.621 5.728 0 1.621-1.621 1.621-4.107 0-5.728z"></path>
                </g>
              </svg>
            </div>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop<img src="assets/down-arrow.png" alt="" />
              </a>
              <ul class="dropdown-menu open-auto">
                <li><a class="dropdown-item" href="/AllProducts">All Products</a></li>
                <li><a class="dropdown-item" href="/CellPhones">Cell Phones</a></li>
                <li><a class="dropdown-item" href="/Speakerhead">Speakers & Headphones</a></li>
                <li><a class="dropdown-item" href="/Laptoptabs">Laptops & Tablets</a></li>
                <li><a class="dropdown-item" href="/SpecialOffers">Special Offers</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/help">Help</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/help#contact">Contact</a>
            </li>
            <div class="main-header d-flex align-items-center">
              <div className="header-3">
                <a className="Header-a d-flex align-items-center">
                  <i class="fa-solid fa-circle-user"></i>
                  <span>Log In</span></a>
              </div>
              <div class="dropdown shopping">
                <button class=" dropdown-toggle d-flex" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                  <a class="d-flex shopping-list align-items-center" href="#"> <img src="assets/down-arrow.png" alt="" />
                  </a>
                </button>
                <ul class="dropdown-menu account" aria-labelledby="dropdownMenu2">
                  <li><a href="/MyOrders" class="dropdown-item" type="button">My Orders</a></li>
                  <li><a href="/MyAddresses" class="dropdown-item" type="button">My Addresses</a></li>
                  <li><a href="/MyAccount" class="dropdown-item" type="button">My Account</a></li>
                  <li><a href="/MyAccount" class="dropdown-item" type="button">Log Out</a></li>
                </ul>
              </div>
            </div>
            <div className="shopping-bag" style={{  position: 'relative' ,marginLeft:20}}>
              <div  style={{ display: 'flex', alignItems: 'center' }}>
                <div className="bag-icon"
                  style={{
                    position: 'relative',
                  }}
                  onClick={handleCartClick}
                >
                  <span
                    style={{
                      color: 'white',
                      fontSize: '12px',
                      position: 'relative',
                      top: -7,
                      left: '9px',
                    }}
                  >
                    {cartCount}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23px" height="23px" viewBox="5.7 0 105.5 126.1" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-1"><path d="M99.8 28.4c0-1.2-0.9-2-2.1-2h-15c0 3.2 0 7.6 0 8.2 0 1.5-1.2 2.6-2.6 2.9 -1.5 0.3-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.9 0-4.7 0-8.2H40.1c0 3.2 0 7.3 0 8.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.6 0-5 0-8.2h-15c-1.2 0-2 0.9-2 2L8.3 124c0 1.2 0.9 2.1 2.1 2.1h96.3c1.2 0 2.1-0.9 2.1-2.1L99.8 28.4z"></path><path d="M59.1 5.9c-2.9 0-2 0-2.9 0 -2 0-4.4 0.6-6.4 1.5 -3.2 1.5-5.9 4.1-7.6 7.3 -0.9 1.8-1.5 3.5-1.8 5.6 0 0.9-0.3 1.5-0.3 2.3 0 1.2 0 2.1 0 3.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-1.2 0-2.3 0-3.5 0-3.2 0.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5 0.3 55 0 56.7 0c1.5 0 2.9 0 4.4 0 2.9 0 5.6 0.6 7.9 1.8 2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1 0.3 1.5 0.6 3.2 0.6 4.7 0 1.2 0 2.3 0 3.2 0 1.5-1.2 2.6-2.6 2.9s-2.9-0.9-3.2-2.3c0-0.3 0-0.3 0-0.6 0-1.2 0-2.6 0-3.8 0-2.3-0.6-4.4-1.8-6.4 -1.5-3.2-4.1-5.9-7.3-7.3 -1.8-0.9-3.5-1.8-5.9-1.8C61.1 5.9 59.1 5.9 59.1 5.9L59.1 5.9z"></path><text x="58.5" y="77" dy=".35em" text-anchor="middle" class="uxskpx" data-hook="items-count">0</text></svg>
                  <FontAwesomeIcon
                    // icon={faShoppingBag}
                    style={{
                      width: '25px',
                      height: '23px',
                      position: 'absolute',
                      top: '21%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 0,
                    }}
                  />
                </div>
              </div>
              {showSidebar && (
                <div
                  className={`sidebar-animation ${showSidebar ? 'open' : ''}`}
                  style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '300px',
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    zIndex: 1000,
                  }}
                >
                  <ViewCart onClose={handleCloseSidebar} />
                </div>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
