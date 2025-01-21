import React from 'react';
import { Box, Button, Grid, TextField, Typography, useTheme } from "@mui/material";

const Newsletter = () => {
    const theme = useTheme();
    return (
      <Box>
        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            padding: "3rem 1rem",
            paddingX: { sm: 0, md: 16 },
          }}
        >
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            {/* Left Column - Text Content */}
            <Grid item xs={12} md={6}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#001f54", marginBottom: "1rem" }}
                >
                  Newsletter
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#777", marginBottom: "1.5rem" }}
                >
                  Stay up to date with the latest legal developments and
                  practical advice from Qatar’s leading lawyers by subscribing
                  to the newsletter.
                </Typography>
              </Box>
            </Grid>

            {/* Right Column - Form Input & Button */}
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems="center"
                gap={2}
              >
                <TextField
                  variant="outlined"
                  placeholder="Enter your email"
                  fullWidth
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    flex: 1,
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
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "3rem",
            paddingX: { sm: 0, md: 16 },
            marginBottom: "3rem",
          }}
          justifyContent="start"
        >
          {["Get in touch", "Let’s Talk", "CR Number", "Location"].map(
            (title, index) => (
              <Grid item xs={12} sm={6} md={2} key={index}>
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
