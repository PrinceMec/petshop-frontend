import React from 'react';
import { Grid, Card, CardMedia, styled } from '@mui/material';
import americanJ from '../images/american-j.jpg'
import blue from '../images/blue.jpg'
import fancyFeast from '../images/fancy-feast.jpg'
import greenies from '../images/greenies.jpg'
import hills from '../images/hills.jpg'
import nexgard from '../images/nexgard.jpg'
import nutro from '../images/nutro.jpg'
import purina from '../images/purina.jpg'
import royalCanin from '../images/royal-canin.jpg'
import vibeful from '../images/vibeful.jpeg'

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  margin: theme.spacing(2),
  height: '250px', // Adjust the height as per your requirement
  width: '100%', // Adjust the width as per your requirement
}));

const StyledCardMedia = styled(CardMedia)({
  height: '100%', // Adjust the height as per your requirement
  objectFit: 'cover',
});

const Brand = () => {
  const images = [
    americanJ,
    blue,
    fancyFeast,
    greenies,
    hills,
    nexgard,
    nutro,
    purina,
    royalCanin,
    vibeful

  ];

  const firstRowImages = images.slice(0, 5);
  const secondRowImages = images.slice(5, 10);

  return (
    <div className="container" style={{paddingTop:'50px'}}>
      
      <h1>Top brands</h1>
      <Grid container spacing={1} justifyContent="center">
        {firstRowImages.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
            <StyledCard>
              <StyledCardMedia component="img" image={image} alt={`Image ${index + 1}`} />
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      
      <Grid container spacing={4} justifyContent="center">
        {secondRowImages.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
            <StyledCard>
              <StyledCardMedia component="img" image={image} alt={`Image ${index + 6}`} />
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Brand;
