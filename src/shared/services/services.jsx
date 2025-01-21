import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import CustomBadge from "../../components/custom-badge";

const Services = () => {
    const theme = useTheme();
    
  return (
    <div>
      <Box sx={{ padding: "3rem 2rem", textAlign: "center" , paddingX:{sm:0,md:16}}} >
        <Grid container spacing={4}>
          {[
            {
              title: "Reliable Legal Services",
              description:
                "Naseh platform provides legal advice approved by lawyers registered with the Qatari ministry of justice.",
            },
            {
              title: "Diversity of Services",
              description:
                "Naseh offers a wide range of legal services that meet the needs of individuals and companies.",
            },
            {
              title: "Security & Confidentiality",
              description:
                "Naseh ensures the protection of users' data and legal information through advanced security systems.",
            },
            {
              title: "Easy Electronic Payment",
              description:
                "Safe and convenient payment options, ensuring transactions are completed easily and comfortably.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  justifyItems: "center",
                }}
              >
                <CustomBadge
                  Icon={VerifiedIcon}
                  sx={{ marginBottom: "1rem" }}
                  size={40}
                  bgColor={theme.palette.green.light}
                  iconColor={theme.palette.green.main}
                />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Services;
