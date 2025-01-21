import { Box, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import SwiperComponent from '../../components/swiper';

const LawyersSection = () => {
    return (
      <Box sx={{ padding: "3rem 1rem", backgroundColor: "#f9f9f9" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#bca864",
            textAlign: "center",
            marginLeft: "3rem",
            marginBottom: "0.5rem",
          }}
        >
          Lawfirm
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#001f54",
          }}
        >
          Specialized lawyers around the clock
        </Typography>
        <SwiperComponent />
      </Box>
    );
}

export default LawyersSection;
