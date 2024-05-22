import React from 'react';
import './CellPhones.css';


export const CellPhones = () => {

  // Define an array of product objects
  const products = [
    { id: 1, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/PJX 10G.webp', isNew: false, },
    { id: 2, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/PJXR30.webp', isNew: true },
    { id: 3, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/Sovixwatch2.webp', isNew: false },
    { id: 4, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/c837a6_98c43751ef8d4b42b95676b5f949b0e7~mv2.webp', isNew: false },
    { id: 4, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/c837a6_0668014d3f3a4331bf93d74578294d31~mv2.webp', isNew: false },
    { id: 4, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/c837a6_fa6693c8376640c480ac169f9f56f55b~mv2.webp', isNew: false },
    { id: 4, name: 'PJX Smartphone 10G, 128GB', price: '$675.00', image: 'assets/img5.webp', isNew: false },




    // Add more product objects here...s
  ];

  return (
    <div className='container top-page'>
      <h1 className='prodect-heading'>Cell Phones</h1>
      {/* Iterate over the products array */}

      <div className="row" >
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="items-prodects">
              {/* Render a new badge if the product is new */}
              {product.isNew && <a href="/SpecialOffers" className="img-btn">NEW</a>}
              {product.isSale && <a href="/SpecialOffers" className="img-btn">SALE</a>}
              <div className='img-item'>
                <a href='/Mobile'>
                  <img src={product.image} alt="" />
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