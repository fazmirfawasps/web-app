import React, { useState, useRef, useEffect } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import Bannertitle from "./tittle";

const MobileBanner = () => {
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
        ref={ref}
        sx={{
          background: "linear-gradient(to right, #1a2d4d 0%, #0e2040 100%)",
          pointerEvents: "none",
          paddingX: { sm: 0, md: 16 },
          paddingY: 10,
          paddingBottom: 20,
        }}
      >
        <Bannertitle />
      </Box>

      {/* Middle Section: Filter */}
      <Box
        ref={filterRef}
        width="80%"
        sx={{
          position: "absolute",
          top: `calc(${bannerHeight}px - 200px)`, // Dynamically calculated position
          left: "50%",
          transform: "translateX(-50%)", // Centering it horizontally
          borderRadius: "16px",
          zIndex: 10, // Ensures it's above other elements
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Pioneering Legal Solutions",
              description:
                "Naseh provides the first online legal consultation platform in Qatar, connecting you with verified lawyers.",
              image: "/mobile1.jpg", // Replace with your feature image URLs
              upside: false,
            },
            {
              title: "Largest Network of Lawyers",
              description:
                "Choose the best legal consultation method to your needs, including video, chat, voice, or written formats.",
              image: "/mobile1.jpg", // Replace with your feature image URLs
              upside: true,
            },
            {
              title: "Tailored to Your Needs",
              description:
                "Our services cater suring reliable and flexible consultations at your convenience.",
              image: "/mobile1.jpg", // Replace with your feature image URLs
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "none",
                  backgroundColor: "white",
                  borderRadius: "16px",
                }}
              >
                {feature?.upside ? (
                  <>
                    <Box display={"flex"} flexDirection={"column"} gap={10}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "250px",
                          backgroundImage: `url(${feature.image})`,
                          backgroundSize: "contain",
                          borderRadius: "8px 8px 0 0",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                      <Box sx={{ flexGrow: 1 }}>
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
                      </Box>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box display={"flex"} flexDirection={"column"} gap={10}>
                      <Box sx={{ flexGrow: 1 }}>
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
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: "250px",
                          backgroundImage: `url(${feature.image})`,
                          backgroundSize: "contain",
                          borderRadius: "8px 8px 0 0",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    </Box>
                  </>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Third Section: Services */}
      <Box
        pt={filterHeight ? `${filterHeight - 100}px` : "100px"} // Adjust padding dynamically
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgcolor="#f9f9f9"
      ></Box>
    </Box>
  );
};

export default MobileBanner;
