import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const StoreByCategory = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://petshop-backend-project-707290ac3af0.herokuapp.com/product/get-products-by-category?category=${category}`);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-3">
          <div style={{ height: '500px' }}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-header">
                Category
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                
                  <Link to="/products?category=Dog" style={{ color: 'black' }}>{category}</Link>
                </li>
                
                <Link to="/store"><p style={{padding:'4px', color:'black'}}><span style={{paddingRight:'5px'}}><FontAwesomeIcon icon={faArrowLeft} /></span>
                back to store</p></Link>
                
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

export default StoreByCategory;
