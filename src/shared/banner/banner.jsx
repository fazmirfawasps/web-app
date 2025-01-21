import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import Services from "../services/services";
import Bannertitle from "./bannertitle";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ConsultationForm from "../filter-component/filter";
import { LocalizationProvider } from "@mui/x-date-pickers";

const Banner = () => {
  const ref = useRef(null);
  const filterRef = useRef(null);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [filterHeight, setFilterHeight] = useState(0);

  useEffect(() => {
    const updateHeights = () => {
      if (ref.current) setBannerHeight(ref.current.offsetHeight);
      if (filterRef.current) setFilterHeight(filterRef.current.offsetHeight);
    };

    updateHeights(); // Initial height calculation

    // Listen for window resize to update heights dynamically
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      {/* First Section: Banner Title */}
      <Box
        pb={10}
        ref={ref}
        sx={{
          background: "linear-gradient(to right, #1a2d4d 0%, #0e2040 100%)",
          pointerEvents: "none",
        }}
      >
        <Bannertitle />
      </Box>

      {/* Middle Section: Filter */}
      <Box
        ref={filterRef}
        bgcolor={"white"}
        width="80%"
        sx={{
          position: "absolute",
          top: `calc(${bannerHeight}px - 125px)`, // Dynamically calculated position
          left: "50%",
          transform: "translateX(-50%)", // Centering it horizontally
          borderRadius: "16px",
          boxShadow: 2, // Adds a slight shadow for better visibility
          zIndex: 10, // Ensures it's above other elements
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ConsultationForm />
        </LocalizationProvider>
      </Box>

      {/* Third Section: Services */}
      <Box
        bgcolor={"#f9fafb"}
        pt={filterHeight ? `${filterHeight - 100}px` : "100px"} // Adjust padding dynamically
        pb={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Services />
      </Box>
    </Box>
  );
};

export default Banner;
