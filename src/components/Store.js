import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import { Link } from 'react-router-dom';


const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://petshop-backend-project-707290ac3af0.herokuapp.com/product/get-all-products');
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (

    <div className="container-fluid my-5" >
      <div className="row">
        <div className="col-md-3">
          <div style={{ height: '500px' }}>
            <div className="card" style={{ width: "18rem" }}>
            
              <div className="card-header">
                Category
              </div>
              <ul className="list-group list-group-flush" >
                <li className="list-group-item">
                  <Link to="/products?category=Dog" style={{color:'black'}}>Dog</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products?category=Cat" style={{color:'black'}}>Cat</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products?category=Fish" style={{color:'black'}}>Fish</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products?category=Hamster" style={{color:'black'}}>Hamster</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products?category=Bird" style={{color:'black'}}>Bird</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div style={{ height: 'auto' }}>


            <div>

              <CardList cards={products} />
              <br></br>
              <br></br>

            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Store;
