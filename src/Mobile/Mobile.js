import React from "react";
import "./Mobile.css";


function Mobile({ addToCart }) {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
    function openNav() {
        document.getElementById("mySidenav").style.width = 100;
    }


    function closeNav() {
        document.getElementById("mySidenav").style.width = 0;
    }
    return (
        <div className="container-fluid pt-5">
            <div className="row main-viewwidth">
                <div className="col-md-6">
                    <div className="main-slider">
                        <div id="slider">
                            <input type="radio" name="slider" id="slide1" checked />
                            <input type="radio" name="slider" id="slide2" />
                            <div id="slides">
                                <div id="overflow">
                                    <div class="inner">
                                        <div class="slide slide_1">
                                            <div class="slide-content">
                                                <img src="assets/img13.webp" />
                                            </div>
                                        </div>
                                        <div class="slide slide_2">
                                            <div class="slide-content">
                                                <img src="assets/img14.webp" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="controls">
                                <label for="slide1"></label>
                                <label for="slide2"></label>
                            </div>
                            <div id="bullets">
                                <label for="slide1"></label>
                                <label for="slide2"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="uppar-containt">
                        <b>SKU: 0001</b>
                        <div><b style={{ fontSize: "18PX", color: '#323232' }}>PJX Smartphone 10G, 128GB</b> <br></br>
                            <b><s></s> $675</b></div>
                        <div>
                            <div className="color-opt mb-2"><b>Color</b></div>
                            <div className="color-option">
                                <div className="option"></div> &nbsp;&nbsp; <div className="option option-a"></div>
                            </div>
                        </div>
                        <div className="Quantity">
                            <b>Quantity</b>
                            <div class="quantity">
                                <span class="quantity-add quantity-button"></span>
                                <input type="number" step="1" min="1" value="1" />
                                <span class="quantity-remove quantity-button"></span>
                            </div>
                        </div>
                        <button className="cart-btn" onClick={addToCart}>Add to Cart</button>

                        <div className="text-content"><b>I'm a product overview. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.</b></div>
                    </div>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header d-flex align-items-center" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <span>Product Info</span>
                                </button>
                                <img src="assets/down-arrow.png" alt="" />
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <p>I'm a product detail. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header d-flex align-items-center" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <span>Return & Refund Policy</span>
                                </button>
                                <img src="assets/down-arrow.png" alt="" />
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <p>I'm a product detail. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header d-flex align-items-center" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <span>Shipping Info</span>
                                </button>
                                <img src="assets/down-arrow.png" alt="" />
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <p>I'm a product detail. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="side-bar">
                    <span className="close-btn" id="mySidenav" onClick={closeNav}> &times; </span>
                </div>

            </div>
        </div>
    )

}

export default Mobile;