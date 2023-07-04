import React, { useState } from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import dogImage from '../images/dog.jpeg';
import catImage from '../images/cat.jpeg';
import fishImage from '../images/fish.jpeg';
import hamsterImage from '../images/hamster.jpeg';
import parrotImage from '../images/parrot.jpeg';

const ShopByPet = () => {
  const images = [
    dogImage,
    catImage,
    fishImage,
    hamsterImage,
    parrotImage,
  ];

  const captions = [
    'Dog',
    'Cat',
    'Fish',
    'Hamster',
    'Bird',
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px', paddingBottom:'50px', backgroundColor:'white' }}>
      <div style={{ padding: '40px', fontSize: '25px' }}>
        <h3 style={{ textAlign: 'left' }}>Shop by pet</h3>
      </div>

      <div>
        <Grid container spacing={2} columns={5}>
          {images.map((image, index) => (
            <Grid item key={index}>
              <Link to={`/products?category=${captions[index]}`} style={{ textDecoration: 'none', display: 'inline-block' }}>
                <Card
                  style={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '200px',
                    height: '200px',
                    border: index === hoveredIndex ? '2px solid #000' : 'none',
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`Image ${index + 1}`}
                    height="200"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '100%',
                      padding: '8px',
                      boxSizing: 'border-box',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      opacity: index === hoveredIndex ? '1' : '0',
                      transition: 'opacity 0.3s ease',
                      textAlign: 'center',
                    }}
                  >
                    <span style={{ color: '#fff', fontSize: '14px' }}>{captions[index]}</span>
                  </div>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ShopByPet;
