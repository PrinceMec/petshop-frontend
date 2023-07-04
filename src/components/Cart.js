import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    const userEmail = sessionStorage.getItem("userEmail")

    useEffect(() => {
        // Fetch the cart items from the API using "fetch" with the userEmail in the request body
        fetch('https://petshop-backend-project-707290ac3af0.herokuapp.com/cart/fetch-cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userEmail: userEmail }),
        })
            .then(response => response.json())
            .then(data => setCartItems(data))
            .catch(error => console.error('Error fetching cart items:', error));
    }, [userEmail]);


    const handleRemoveItem = (cartId) => {
        // Send the cartId to the server using "fetch" with the DELETE method to delete the cart item
        fetch(`https://petshop-backend-project-707290ac3af0.herokuapp.com/cart/delete-cart-item`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cartId: cartId }), // Pass the cartId in the request body
        })
            .then((response) => {
                if (response.ok) {
                    // If the deletion was successful, update the cartItems state by removing the item with the specified cartId
                    setCartItems((prevCartItems) =>
                        prevCartItems.filter((item) => item.cartId !== cartId)
                    );
                } else {
                    // Handle errors if needed
                    console.error("Error deleting cart item:", response.status);
                }
            })
            .catch((error) => console.error("Error deleting cart item:", error));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.product.price, 0);

    return (
        <div style={{ backgroundColor: 'white' }}>



            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ marginLeft: '50px' }}>Shopping Cart</h3>
                <h3 style={{ marginRight: '50px' }}>{cartItems.length} items</h3>
            </div>

            <div style={{ margin: '50px' }}>

                <hr></hr>

                {cartItems.length === 0 ? (
                    <p>No items in the cart.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th style={{ paddingRight: '500px' }}><p style={{ color: 'grey' }}>PRODUCT DETAILS</p></th>
                                <th style={{ paddingRight: '500px' }}><p style={{ color: 'grey' }}>QUANTITY</p></th>
                                <th ><p style={{ color: 'grey' }}>TOTAL</p></th>

                            </tr>

                        </thead>

                        <tbody>

                            {cartItems.map(item => (
                                <tr key={item.cartId}>
                                    <td><div style={{ display: 'flex', alignItems: 'center' }}>

                                        <img
                                            src={require(`../images/product-images/${item.product.imageName}.jpg`)}
                                            alt={item.product.productTitle}
                                            style={{ width: '100px', height: '100px', marginRight: '10px' }}
                                        />
                                        <span><b>{item.product.productTitle}</b></span>
                                    </div></td>
                                    <td> <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveItem(item.cartId)} // Call the removal function on button click
                                    >Remove</button></td>
                                    <td><b>${item.product.price}</b></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {cartItems.length > 0 && (
                    <div style={{marginBottom: "30px", marginTop:'40px' }}>
                        
                        <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
                        <Link to="/payment"><button className="btn btn-success">Place the order</button></Link>
                    </div>
                )}

                <br></br>
                <br></br>
            </div>

        </div>
    );
};

export default Cart;
