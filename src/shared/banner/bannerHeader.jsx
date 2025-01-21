import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const BannerHeader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ xs: "column", sm: "row" }} // Column on mobile, row on larger screens
      gap={{ xs: 2, sm: 4 }}
      p={6}
      mx={{ xs: 0, sm: 0, md: 10, lg: 20 }} //
      borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      textAlign={{ xs: "center", sm: "left" }} // Center text in mobile view
    >
      {/* Left Section: Icon + Text */}
      <Box display="flex" alignItems="center">
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
          }}
        >
          <PhoneIcon sx={{ color: "white" }} />
        </Box>

        <Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="white"
            sx={{ lineHeight: 1, mb: 1, textAlign: "start" }}
          >
            Urgent consultation now !
          </Typography>
          <Typography
            variant="body2"
            color="rgba(255, 255, 255, 0.8)"
            sx={{ fontSize: "14px", textAlign: "start" }}
          >
            Book it in 5 minutes, a lawyer will respond to you in a few minutes.
          </Typography>
        </Box>
      </Box>

      {/* Right Section: Button (Stacks below text in mobile view) */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#b71c1c",
          color: "white",
          fontWeight: "bold",
          px: 3,
          py: 1.2,
          borderRadius: "8px",
          "&:hover": { bgcolor: "red" },
          width: { xs: "100%", sm: "auto" }, // Full width on mobile, auto on larger screens
        }}
        startIcon={<PhoneIcon />}
      >
        CONSULT NOW
      </Button>
    </Box>
  );
};

export default BannerHeader;
