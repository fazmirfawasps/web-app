import React from 'react';
import { Box, Button, Grid, TextField, Typography, useTheme } from "@mui/material";

const Newsletter = () => {
    const theme = useTheme();
    return (
      <Box sx={{ backgroundColor: "#f9f9f9", padding: "2rem 1rem" }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ textAlign: "center", marginBottom: "1rem", color: "#001f54" }}
        >
          Newsletter
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginBottom: "2rem", color: "#777" }}
        >
          Stay up to date with the latest legal developments and practical
          advice from Qatar’s leading lawyers by subscribing to the newsletter.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            sx={{
              width: "300px",
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#001f54",
              color: "#fff",
              textTransform: "none",
              padding: "0.75rem 2rem",
              fontWeight: "bold",
              borderRadius: "4px",
            }}
          >
            Submit
          </Button>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{ marginTop: "3rem" }}
          justifyContent="center"
        >
          {["Get in touch", "Let’s Talk", "CR Number", "Location"].map(
            (title, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: theme.palette.secondary.light,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Icons can be replaced with specific icons */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: "bold",
                      }}
                    >
                      {title[0]}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", color: "#001f54" }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", color: "#001f54" }}
                    >
                      XXXXXXXX
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    );
}

export default Newsletter;
