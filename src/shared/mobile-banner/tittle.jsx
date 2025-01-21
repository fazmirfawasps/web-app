import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { use } from "react";
import BannerHeader from "./header";

const Bannertitle = () => {
  const theme = useTheme();

  return (
    <div>
      <Box
        sx={{
          color: "white",
          textAlign: "center",
          paddingBottom:10
        }}
      >
        <BannerHeader />
      </Box>
     
    </div>
  );
};

export default Bannertitle;
