import { Box, Typography } from '@mui/material';
import React from 'react';

const Logo = () => {
    return (
      <div>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "#001f54",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "8px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              C
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ color: "#bca864", fontWeight: "bold", fontSize: "20px" }}
          >
            coca
          </Typography>
        </Box>
      </div>
    );
}

export default Logo;
