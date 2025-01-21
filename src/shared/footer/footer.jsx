import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Logo from '../../components/logo';

const Footer = () => {
    return (
      <div>
        <Box sx={{ backgroundColor: "#f9f9f9", padding: "3rem 1rem" }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              {/* Logo and Description */}
              <Logo />
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginTop: "1rem", maxWidth: "250px" }}
              >
                Stay Up To Date With The Latest Legal Developments And Practical
                Advice From Qatar’s Leading Lawyers By Subscribing To The
                Newsletter.
              </Typography>
              {/* Social Media Icons */}
              <Box sx={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                {[
                  "https://cdn-icons-png.flaticon.com/512/145/145812.png", // Twitter
                  "https://cdn-icons-png.flaticon.com/512/145/145807.png", // LinkedIn
                  "https://cdn-icons-png.flaticon.com/512/145/145805.png", // Instagram
                  "https://cdn-icons-png.flaticon.com/512/145/145802.png", // YouTube
                ].map((icon, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={icon}
                    alt="Social Media Icon"
                    sx={{
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                      filter: "grayscale(100%)",
                      "&:hover": { filter: "none" },
                    }}
                  />
                ))}
              </Box>
            </Grid>

            {/* About Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#001f54"
                sx={{ marginBottom: "1rem" }}
              >
                About
              </Typography>
              {["About Us", "Blog", "Lawyers", "Services", "Community"].map(
                (link, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      cursor: "pointer",
                      "&:hover": { color: "#001f54" },
                      marginBottom: "0.5rem",
                    }}
                  >
                    {link}
                  </Typography>
                )
              )}
            </Grid>

            {/* Support Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#001f54"
                sx={{ marginBottom: "1rem" }}
              >
                Support
              </Typography>
              {["Contact Us", "Online Chat", "Whatsapp"].map((link, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "#001f54" },
                    marginBottom: "0.5rem",
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Grid>

            {/* Legal Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#001f54"
                sx={{ marginBottom: "1rem" }}
              >
                Legal Links
              </Typography>
              {["Privacy Policy", "Terms and Conditions", "Cookie Policy"].map(
                (link, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      cursor: "pointer",
                      "&:hover": { color: "#001f54" },
                      marginBottom: "0.5rem",
                    }}
                  >
                    {link}
                  </Typography>
                )
              )}
            </Grid>
          </Grid>

          {/* Footer Bottom Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2rem",
              borderTop: "1px solid #e0e0e0",
              paddingTop: "1rem",
            }}
          >
            <Typography variant="body2" color="textSecondary">
              All Rights Reserved © XXXXXXXXX 2022
            </Typography>
            {/* Payment Methods */}
            <Box sx={{ display: "flex", gap: "1rem" }}>
              {[
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Google_Pay_Logo_%282020%29.svg/2560px-Google_Pay_Logo_%282020%29.svg.png", // GPay
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png", // Apple Pay
                "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png", // Visa
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/2560px-Mastercard_2019_logo.svg.png", // Mastercard
              ].map((logo, index) => (
                <Box
                  key={index}
                  component="img"
                  src={logo}
                  alt="Payment Icon"
                  sx={{ width: "40px", height: "24px", objectFit: "contain" }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </div>
    );
}

export default Footer;
