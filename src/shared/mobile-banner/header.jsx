import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GooglePlayIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

const AppUI = () => {
  return (
    <Box
      sx={{
        color: "#FFFFFF",
        textAlign: "center",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Why choose ?
        </Typography>

        {/* Subheading */}
        <Typography variant="body1" sx={{ maxWidth: "600px", marginBottom: 4 }}>
          Naseh application is the ideal solution for your legal consultations
          in Qatar, as we provide innovative legal services to meet your needs
          in a flexible and reliable manner.
        </Typography>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: 2 }}>
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
          p={10}
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
      </Box>
    </Box>
  );
};

export default AppUI;
