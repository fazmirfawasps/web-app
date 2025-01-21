import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiperstyle.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import GavelIcon from "@mui/icons-material/Gavel";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BusinessIcon from "@mui/icons-material/Business";
import ArticleIcon from "@mui/icons-material/Article";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        slidesPerView={"4"}
        spaceBetween={30}
        watchSlidesProgress={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ paddingBottom: 100 }}
      >
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
          <SwiperSlide>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
