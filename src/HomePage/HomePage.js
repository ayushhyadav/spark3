import React, { useRef, useEffect } from "react";
import "./HomePage.css";
import Scroller from "./Scroller";
import { Link } from "react-router-dom";

function HomePage() {
  const categories = ["Cell Phones", "Speakers & Headphones", "Laptops & Tablets"];

  const headlines = [
    {
      title: 'Buy One and Get The Second 50% Off',
      description: 'On All Speakers and Headphones',
      link: '', // Replace with your desired link
      image: 'assets/Speakers_On_Table_New.webp',
      bottomText: 'Polar Turn5 Portable Speaker'
    },
    {
      title: '25% Off Top Rated Headphones',
      description: 'Explore Limited Time Offers',
      link: '', // Replace with your desired link
      image: 'assets/Yellow_Headphones.webp',
      bottomText: 'VOLVE Wireless Headphones'
    }
  ];

  const specialOffers = [
    {
      img: "assets/img8.webp",
      description: "PJX Gaming Laptop 15.6\", 512GB",
      oldPrice: "$1800.00",
      newPrice: "$1,350.00"

    },
    {
      img: "assets/img5.webp",
      description: "Ove Tablet FD plus 12.3\",64GB",
      oldPrice: "$900.00",
      newPrice: "$675.00"
    },
    {
      img: "assets/img6.webp",
      description: "VOLVO Smart Home Speaker",
      oldPrice: "$550.00",
      newPrice: "$412.50"
    },
    {
      img: "assets/img7.webp",
      description: "Polar Float Wireless Speaker",
      oldPrice: "$150.00",
      newPrice: "$112.50"
    }
  ];

  const brands = [
    {
      img: "assets/volve.png",
    },
    {
      img: "assets/hera.webp",
    },
    {
      img: "assets/sovix.webp",
    },
    {
      img: "assets/pjx.webp",
    },
    {
      img: "assets/polar.webp",
    }
  ];

  return (
    <div>
      <Scroller />
      <section className="bg-category">
        <div className="container">
          <h1>Shop by Category</h1>
          <div className="row">
            {categories.map((category, index) => (
              <div className="col-md-4">
                <div className="main2-sub" key={index}>
                  <img style={{ width: '100%' }} src={`assets/img${index + 1}.webp`} alt="" />
                  <p className="main3-p">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="offer-heading d-flex justify-content-between">
              <h1>Special Offers</h1>
              <a href="/AllProducts">View All</a>
            </div>
          </div>
          {specialOffers.map((item, index) => (
            <div className="col-md-3">
              <a href="/SpecialOffers" className="img-btn">SALE</a>
              <div className="prodect-items">
                <div className="main-sub5" key={index}>
                  <a href="/SpecialOffers">
                    <img style={{ width: '100%', marginBottom: '20px' }} src={item.img} alt="" />
                    {item.description}
                    <br />
                    <strike>{item.oldPrice}</strike>
                    {item.newPrice}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: '100%' }} className="">
        {headlines.map((headline, index) => (
          <section style={{ width: '100%', height: '100vh' }} key={index} className="stacking-slide">
            <h2>{headline.title}</h2>

            <p>{headline.description}</p>

            <Link to={headline.link}>Shop Now</Link>
            <lable>{headline.bottomText}</lable>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={headline.image} alt="" />
          </section>
        ))}
      </div>

      <div class="container ">
        <div className="brands-hesding">
          <p>Our Brands</p>
        </div>
        <div className="main-banrand d-flex justify-content-md-center">
          <div class="brand-img">
            <img src="assets/polar.webp" alt="" />
          </div>
          <div class="box-img d-flex">
            <div class="brand-img">
              <img src="assets/volve.png" alt="" />
            </div>
            <div class="brand-img">
              <img src="assets/hera.webp" alt="" />
            </div>
          </div>
          <div class="box-img d-flex">
            <div class="brand-img">
              <img src="assets/sovix.webp" alt="" />
            </div>
            <div class="brand-img">
              <img src="assets/pjx.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default HomePage;