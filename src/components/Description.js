import React from 'react';
import dogImg from '../images/dogs.png'
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import '../css/fonts.css'
import { Link } from 'react-router-dom';


const Description = () => {

  const navigate = useNavigate();
  
  const handleShopNowClick = () => {
    navigate('/store'); // Redirects to the '/store' page
  };

 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ flex: 1, padding: '10px', textAlign: 'left' }}>

          <h1 style={{ fontSize: '80px', margin: '0px' }}>ProPet</h1>
          <h3 style={{ fontSize: '20px', margin: '0px' }}>Your one-stop shop for all pet supplies</h3>
          <p>Find everything you need for your furry friend at ProPet - from food to toys to grooming supplies.</p>
          <Link to='/store'><Button variant="contained" color="primary" onClick={handleShopNowClick}><b>Shop now</b></Button></Link>
        </div>
        <div style={{ flex: 1, padding: '10px' }}>
          {/* Right side image */}
          <img src={dogImg} alt="Image" style={{ maxWidth: '100%', height: 'auto' }}  />
        </div>
      </div > 
    </div>
  );
};

export default Description;
