import React from "react";
import "./Main.css";
function Main() {
    
  return (
    <div>
      <div className="main2">
        <h1 className="main2-head">Shop by Category</h1>
        <div className="main3">
          <div className="main2-sub">
            <img src="assets/img1.webp" alt="" />
            <p className="main3-p">Cell Phones</p>
          </div>
          <div className="main2-sub">
            <img src="assets/img2.webp" alt="" />
            <p className="main3-p">Speakers & Headphones</p>
          </div>
          <div className="main2-sub">
            <img src="assets/img3.webp" alt="" />
            <p className="main3-p">Laptops & Tablets</p>
          </div>
        </div>
        
      </div>
      <div className="main4">
            <div className="main-sub4"><p className="main-sub4-p">Special Offers</p></div>
            <div className="main-sub4"><button className="main-sub4-btn">View All</button></div>
        </div>
        <div className="main5">
            <div className="main-sub5">
                <div className="mainsub5-div"><a href=""><button className="img-btn">SALE</button><img  src="assets/img8.webp" alt="" /></a></div>
                <a href="">PJX Gaming Laptop 15.6", 512GB <br /><strike>$1800.00</strike>$1,350.00</a>
            </div>
            <div className="main-sub5">
            <div className="mainsub5-div"><a href=""><button className="img-btn">SALE</button><img  src="assets/img5.webp" alt="" /></a></div>
            <a href="">Ove Tablet FD plus 12.3",64GB <br /><strike>$900.00</strike>$675.00</a>
             
            </div>
            <div className="main-sub5">
            <div className="mainsub5-div"><a href=""><button className="img-btn">SALE</button><img  src="assets/img6.webp" alt="" /></a></div>
            <a href="">VOLVO Smart Home Speaker <br /><strike>$550.00</strike>$412.50</a>
             
            </div>
            <div className="main-sub5">
            <div className="mainsub5-div"><a href=""><button className="img-btn">SALE</button><img  src="assets/img7.webp" alt="" /></a></div>
            <a href="">Polar Float Wireless Speaker<br /><strike>$150.00</strike>$112.50</a>
            
            </div>
        </div>
        <div className="main6">
            <div className="mainsub-6">
                <p className=" mainsub-6-para">Buy One and Get The Second 50% <br/> Off</p>
                <p className="mainsub-6-p">On All Speakers and Headphones </p>
                <button className="mainsub6-btn">Shop Now</button>
                <p className="mainsub-6-p1" >Polar Turn5 Portable Speaker</p>
            </div>
        </div>
        <div className="main7">
            <div className="mainsub-6">
                <p className=" mainsub-6-para">Buy One and Get The Second 50% <br/> Off</p>
                <p className="mainsub-6-p">On All Speakers and Headphones </p>
                <button className="mainsub6-btn">Shop Now</button>
                <p className="mainsub-6-p1" >Polar Turn5 Portable Speaker</p>
            </div>
        </div>
        <div className="main8">
          <div className="main8-sub">
            <p className="main8-para">Our Brands</p>
          </div>
          <div className="main8-sub1">
            <p className="main8sub-para1">VOLVE</p>
            <p className="main8sub-para2">HERA</p>
            <p className="main8sub-para3">SOVIX</p>
            <p className="main8sub-para4">PJX</p>
            <p className="main8sub-para5">POLAR</p>
          </div>
        </div>
    </div>
  );
}

export default Main;
