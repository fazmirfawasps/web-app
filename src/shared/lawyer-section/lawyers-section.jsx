import { Box, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';

const LawyersSection = () => {
    return (
      <Box sx={{ padding: "3rem 1rem", backgroundColor: "#f9f9f9" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#bca864",
            textAlign: "center",
            marginLeft: "3rem",
            marginBottom: "0.5rem",
          }}
        >
          Lawfirm
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#001f54",
          }}
        >
          Specialized lawyers around the clock
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              image:
                "https://s3-media0.fl.yelpcdn.com/bphoto/w9cAlhQ8qAth9DFuU3neTA/348s.jpg", // Replace with actual image URLs
              name: "Dawi Law Firm",
              description:
                "I Provide Specialized Legal Consultations In The Field Of Companies..",
              language: "English",
              experience: "10-15",
            },
            {
              image:
                "https://s3-media0.fl.yelpcdn.com/bphoto/ee-DWk24ph-7cAamxHK9Mg/348s.jpg", // Replace with actual image URLs
              name: "Saleh For Law",
              description:
                "I Provide Specialized Legal Consultations In The Field Of Companies..",
              language: "Arabic & English",
              experience: "10-15",
            },
            {
              image:
                "https://www.alansarilaw.com/wp-content/themes/al-ansari/images/logo.svg", // Replace with actual image URLs
              name: "Al Ansari Law Firm",
              description:
                "I Provide Specialized Legal Consultations In The Field Of Companies..",
              language: "Arabic & English",
              experience: "10-15",
            },
            {
              image:
                "https://cdn.dribbble.com/users/2904604/screenshots/9805710/media/08174379c2fcc382e407e031a7952ba8.jpg?resize=400x300&vertical=center", // Replace with actual image URLs
              name: "Dunne Law Pllc",
              description:
                "I Provide Specialized Legal Consultations In The Field Of Companies..",
              language: "English",
              experience: "10-15",
            },
          ].map((lawyer, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "none",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  backgroundColor: "white",
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ marginBottom: "1rem" }}
                >
                  {lawyer.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginBottom: "1.5rem", minHeight: "60px" }}
                >
                  {lawyer.description}
                </Typography>
                <Grid container spacing={1} sx={{ marginBottom: "1rem" }}>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ color: "#001f54" }}
                    >
                      Spoken Language
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {lawyer.language}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ color: "#001f54" }}
                    >
                      Years Of Experience
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {lawyer.experience}
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#001f54",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: "bold",
                    width: "100%",
                  }}
                >
                  View Profile
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
}

export default LawyersSection;
