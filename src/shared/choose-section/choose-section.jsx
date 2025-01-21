import { Box, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';

const ChooseSection = () => {
    return (
      <Box
        sx={{
          backgroundColor: "#001f54",
          color: "white",
          padding: "3rem 1rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#bca864",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Why Choose "Naseh"?
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Naseh Application is the ideal solution for your legal consultations
          in Qatar
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: "3rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          We provide innovative legal services to meet your needs in a flexible
          and reliable manner.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Pioneering Legal Solutions",
              description:
                "Naseh provides the first online legal consultation platform in Qatar, connecting you with verified lawyers.",
              image: "https://via.placeholder.com/150", // Replace with your feature image URLs
            },
            {
              title: "Largest Network of Verified Lawyers",
              description:
                "Choose the best legal consultation method tailored to your needs, including video, chat, voice, or written formats.",
              image: "https://via.placeholder.com/150", // Replace with your feature image URLs
            },
            {
              title: "Tailored to Your Needs",
              description:
                "Our services cater to individuals and companies, ensuring reliable and flexible consultations at your convenience.",
              image: "https://via.placeholder.com/150", // Replace with your feature image URLs
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "none",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "150px",
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: "cover",
                    borderRadius: "8px 8px 0 0",
                    marginBottom: "1.5rem",
                  }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ marginBottom: "1rem", color: "#001f54" }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", marginTop: "3rem" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#bca864",
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
              padding: "0.75rem 2rem",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    );
}

export default ChooseSection;
