// src/components/SolarEnergyInfo.js
import React from 'react';
import '../App.css';
import { Container, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import solarImage1 from '../assets/Solar-energy1.jpg'; // Replace with actual image paths
import solarImage2 from '../assets/Solar-energy2.jpg';
import solarImage3 from '../assets/Solar-energy3.jpg';

const SolarEnergyInfo = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Container maxWidth="lg" style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
                Solar Energy Insights
            </Typography>
            <Typography variant="h6" paragraph>
                Discover the impact of solar energy on our planet and explore data on renewable energy production.
            </Typography>

            <Slider {...settings}>
                <div>
                    <img 
                        src={solarImage1} 
                        alt="Solar Energy 1" 
                        style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} 
                    />
                    <Button variant="contained" color="primary" href="/dashboard" style={{ marginTop: '10px' }}>
                        Learn More
                    </Button>
                </div>
                <div>
                    <img 
                        src={solarImage2} 
                        alt="Solar Energy 2" 
                        style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} 
                    />
                    <Button variant="contained" color="primary" href="/data-table" style={{ marginTop: '10px' }}>
                        View Data
                    </Button>
                </div>
                <div>
                    <img 
                        src={solarImage3} 
                        alt="Solar Energy 3" 
                        style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }} 
                    />
                    <Button variant="contained" color="primary" href="/energy-form" style={{ marginTop: '10px' }}>
                        Take Action
                    </Button>
                </div>
            </Slider>
        </Container>
    );
};

export default SolarEnergyInfo;
