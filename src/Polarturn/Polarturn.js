import React from "react";
import "./Polarturn.css";


function Polarturn() {
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
        <div className="main-container">
            <div>
                <img src="assets/img15.webp" width={"750px"}></img>
                <div><span></span><span></span></div>
            </div>
            <div className="main-containt">
                <div className="uppar-containt">
                    <div><b>SKU: 0014</b></div>
                    <div><b style={{ fontSize: "1.3rem" }}>Polar Turn5 Portable Speaker</b> <br></br>
                        <b><s> </s> $250.00</b></div>
                    <div>
                        <div><b>Color</b></div>
                        <div style={{visibility:"hidden"}}>vdfv</div>
                        <div className="color-option">
                            <div className="option"></div> &nbsp;&nbsp; <div className="option option-a"></div>
                        </div>
                    </div>
                    <div><b>Quantity</b></div>
                    <div className="cart-quantity"></div>
                    <button className="cart-btn" onClick={()=>console.log('ok')}>Add to Cart</button>
                    <div><b>I'm a product overview. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.</b></div>
                </div>
                <button type="button" class="collapsible">Product Info</button>
                <div class="content">
                    <p>I'm a product detail. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
                </div>
                <hr></hr>
                <button type="button" class="collapsible">Return and Refund Policy</button>
                <div class="content">
                    <p>I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence</p>
                </div>
                <hr></hr>
                <button type="button" class="collapsible">Shipping Info</button>
                <div class="content">
                    <p>I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence</p>
                </div>
            </div>
            <div className="side-bar">
                <span className="close-btn" id="mySidenav" onClick={closeNav}> &times; </span>
            </div>
        </div>
    )

}

export default Polarturn;