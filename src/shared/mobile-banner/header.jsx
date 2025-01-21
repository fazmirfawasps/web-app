import React from "react";
import {  Typography, Button, Grid } from "@mui/material";
import GooglePlayIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

const BannerHeader = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{
        color: "#FFFFFF",
        textAlign: "center",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Header Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2,textAlign:'start' }}>
          Why Choose ?
        </Typography>

        {/* Subheading */}
        <Typography variant="body1" sx={{ maxWidth: "600px", marginBottom: 4,textAlign:"start" }}>
          Naseh application is the ideal solution for your legal consultations
          in Qatar, as we provide innovative legal services to meet your needs
          in a flexible and reliable manner.
        </Typography>
      </Grid>

      {/* Buttons Section */}
      <Grid
        item
        xs={12}
        md={6}
        px={2}
        sx={{
          display: "flex",
          justifyContent: { sm: "space-between", md: "flex-end" },
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<GooglePlayIcon />}
          sx={{
            backgroundColor: "#000000",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: "15px",
          }}
          href="#"
        >
          Google Play
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AppleIcon />}
          sx={{
            backgroundColor: "#000000",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: "15px",
          }}
          href="#"
        >
          App Store
        </Button>
      </Grid>
    </Grid>
  );
};

export default BannerHeader;
