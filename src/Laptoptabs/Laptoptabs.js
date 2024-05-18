import React from 'react';
import "./Laptoptabs.css";
import { Link } from 'react-router-dom';

function Laptoptabs() {
  // Array of product data
  const products = [
    {
      id: 1,
      badge: "NEW",
      imgSrc: "assets/img17.webp",
      name: "Ove Laptop 16\", 512GB",
      price: "$2000.00"
    },
    {
      id: 2,
      imgSrc: "assets/img14.webp",
      name: "Ove Laptop 14\", 512GB",
      price: "$1600.00"
    },
    {
      id: 3,
      imgSrc: "assets/img17.webp",
      name: "PJX Gaming Laptop 15.6\", 512GB",
      oldPrice: "$1,800.00",
      newPrice: "$1,350.00"
    },
    {
      id: 4,
      badge: "NEW",
      imgSrc: "assets/img5.webp",
      name: "Ove Tablet FD Plus 12.3\", 64GB",
      oldPrice: "$900",
      newPrice: "$675.00"
    },
    {
      id: 5,
      imgSrc: "assets/img5.webp",
      name: "HERA 5G Tablet 10.1\", 64GB",
      price: "$600.00"
    },
    {
      id: 6,
      imgSrc: "assets/img5.webp",
      name: "HERA Tablet Pro 12.3\", 128GB",
      price: "$675.00"
    },
    // Add more product data objects as needed
  ];

  return (
    <div className='cell-phone'>
      <div className='container'>
        <h1 style={{paddingTop:'135px'}} className='prodect-heading'>Laptops & Tablets</h1>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'100%'}}>
        <div className='row'>
        {products.map(product => (
          <div className="col-md-4">
              <Link to='/Mobile' key={product.id}>
              <div className="items-prodects">
                {product.badge && <span className="badge bg-secondary position-absolute">{product.badge}</span>}
                <img src={product.imgSrc} width={"500px"} alt="" />
                <p>{product.name}</p>
                {product.oldPrice && <s>{product.oldPrice}</s>}
                <span>{product.newPrice || product.price}</span>
              </div>
          </Link>
            </div>
          
        ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptoptabs;



