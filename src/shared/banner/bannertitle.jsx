import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import BannerHeader from "./bannerHeader";
import { use } from "react";

const Bannertitle = () => {
const theme = useTheme();

    return (
    <div>
      <Box
        sx={{
          color: "white",
          textAlign: "center",
        }}
      >
        <BannerHeader />
      </Box>
      <Box
        sx={{
          color: "white",
          padding: "7rem 1rem",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Choose & filter & schedule
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "600px", margin: "0 auto" , color: theme.palette.grey[400]} }
          gutterBottom
        >
          Easy access to your legal advice. Choose, sort, and clearly define the
          font that best fits your schedule.
        </Typography>
      </Box>
    </div>
  );
};

export default Bannertitle;
