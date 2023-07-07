import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

import { Link} from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const userEmail = sessionStorage.getItem("userEmail")

    useEffect(() => {
        // Extract productId from the hash parameter in the URL
        const productId = window.location.hash.substr(1);

        // Fetch the product details using the productId
        fetchProductDetails(productId);
    }, []);

    const handleGoBack = () => {
        window.history.back();
      };

    const fetchProductDetails = async (productId) => {
        try {
            const response = await fetch(`https://petshop-backend-project-707290ac3af0.herokuapp.com/product/${productId}`);
            if (response.ok) {
                const productData = await response.json();
                setProduct(productData);
            } else {
                console.error('Error fetching product details:', response.status);
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    if (!product) {
        return <div>No product details available.</div>;
    }

    const handleAddToCart = (productId) => {

    
        if (!userEmail) {
          // Navigate to the login page or any other page you desire
          //history.push('/login');
          //window.location.href = '/login';
            alert("Login required");
        } else {
    
          
        
          // Make API call to add the product to the cart
          fetch('https://petshop-backend-project-707290ac3af0.herokuapp.com/cart/add-to-cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userEmail, productId }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Failed to add product to cart.');
              }
              // Handle successful response (e.g., show a success message)
              console.log('Product added to cart successfully!');
            })
            .catch((error) => {
              // Handle error (e.g., show an error message)
              console.error('Error adding product to cart:', error.message);
            });
        }
      };

    return (
        <div style={{ margin: '20px' }}>
            <Link onClick={handleGoBack}><p style={{padding:'4px', color:'black'}}><span style={{paddingRight:'5px'}}><FontAwesomeIcon icon={faArrowLeft} /></span>
                back to store</p></Link>
            <div class="container" style={{ backgroundColor: 'white' }}>
                <div class="row">
                    <div class="col">
                        <img src={require(`../images/product-images/${product.imageName}.jpg`)} alt={product.productTitle} style={{ height: '500px', width: '500px' }} />
                    </div>
                    <div class="col">
                        <h2 style={{ marginTop: '20px' }}>{product.productTitle}</h2>
                        <p style={{ color: 'grey', marginTop: '30px' }}>{product.description}</p>
                        <hr></hr>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <h4>${product.price}</h4>
                                </div>
                                <div class="col-md-6">
                                <button className="btn-secondary" style={{ borderRadius: '10px', height: '45px', width:'250px' }} onClick={() => handleAddToCart(product.productId)}>Add to cart</button>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                </div>
            </div>

            <br>
            </br>
            <br></br>

        </div>
    );
};

export default ProductDetails;
