import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  const Logout = () => {
    console.log("Logout called")
    sessionStorage.setItem('isLoggedIn', 'false');
    
    sessionStorage.removeItem("userEmail");
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{ background: 'green' }}>
      <FontAwesomeIcon icon={faPaw} className="dog-paw" style={{ color: 'white', fontSize: '45px' }} />
      <Link className="navbar-brand" to="/" style={{ color: 'white', fontSize: '40px', marginLeft: '5px' }}> ProPet</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={{ color: 'white', fontSize: '20px' }}>Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/store" style={{ color: 'white', fontSize: '20px' }}>Store</Link>
          </li>
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" style={{ color: 'white', fontSize: '20px' }}>
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  style={{ color: 'white', fontSize: '20px' }} onClick={Logout}>
                  Logout
                </Link>
              </li>
            </>
          )}

          {!isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ color: 'white', fontSize: '20px' }} >
                Login
              </Link>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
