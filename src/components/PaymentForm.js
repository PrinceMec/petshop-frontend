import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const PaymentForm = () => {
    

    const handleSubmit = (e) => {
        
        window.location.href = '/';
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            <div style={{ backgroundColor: 'white', marginLeft: '50px' }}>
                <h2>Payment Information</h2>

                <TextField id="outlined-basic" label="Card number" variant="outlined" placeholder='xxxx xxxx xxxx xxxx' style={{width:'400px', marginTop:'10px'}}/><br></br>
                <TextField id="outlined-basic" label="Card holder name" variant="outlined" placeholder='Name' style={{width:'400px', marginTop:'10px'}}/><br></br>
                <TextField id="outlined-basic" label="Expiring date" variant="outlined" placeholder='dd/mm' style={{width:'400px', marginTop:'10px'}}/><br></br>
                <TextField id="outlined-basic" label="CVV" variant="outlined" placeholder='xxx' style={{width:'400px', marginTop:'10px'}}/><br></br>
                <Link to="/success"><button type="button" class="btn btn-success mt-2" >Place order</button></Link>
            </div>
        </div>

    );
};

export default PaymentForm;
