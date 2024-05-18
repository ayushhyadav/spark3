import React from 'react';
import "./Speakerhead.css";


const Speakerhead = () => {

  // Define an array of product objects
  const products = [
    {
      id: 1,
      badge: "NEW",
      imgSrc: "assets/img6.webp",
      name: "VOLVO Smart Home Speaker",
      oldPrice: "$550.00",
      newPrice: "$412.00"
    },
    {
      id: 2,
      imgSrc: "assets/img15.webp",
      name: "Polar Turn5 portable Speaker",
      price: "$250.00"
    },
    {
      id: 3,
      imgSrc: "assets/img7.webp",
      name: "Polar 360 Mini Portable Speaker",
      price: "$120.00"
    },
    {
      id: 4,
      badge: "NEW",
      imgSrc: "assets/img16.webp",
      name: "Polar Float Wireless Speaker",
      oldPrice: "$150",
      newPrice: "$112.00"
    },
    {
      id: 5,
      imgSrc: "assets/imghead.webp",
      name: "VOLVO Wireless Headphones",
      oldPrice: "$400",
      newPrice: "$300.00"
    },
    {
      id: 6,
      imgSrc: "assets/imgbuds.webp",
      name: "VOLVO Space Wireless Earbuds",
      oldPrice: "$250",
      newPrice: "$187.50"
    },
    // Add more product data objects as needed
  ];

  return (
    <div className='container top-page'>
        <h1 className='prodect-heading'>Speakers & Headphones</h1>
      {/* Iterate over the products array */}

      <div className="row" >
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="items-prodects">
              {/* Render a new badge if the product is new */}
              {product.isNew && <a href="/SpecialOffers" className="img-btn">SALE</a>}
              <div className='img-item'>
              {product.badge && <span className="badge bg-secondary position-absolute">{product.badge}</span>}
                <a href='/Mobile'>
                  <img src={product.imgSrc} alt="" />
                </a>
              </div>
              <p>{product.name}</p>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Speakerhead;