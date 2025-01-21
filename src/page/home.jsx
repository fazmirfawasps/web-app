import React from "react";
import {
  Typography,
  Box,
  Button,
  Grid,
  Card,
  useTheme,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import BusinessIcon from "@mui/icons-material/Business";
import ArticleIcon from "@mui/icons-material/Article";
import GavelIcon from "@mui/icons-material/Gavel";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Navbar from "../shared/navbar/navbar";
import Banner from "../shared/banner/banner";
import ScheduledConsultationCard from "../components/consoltion-card";
import Footer from "../shared/footer/footer";
import Newsletter from "../shared/newsletter/newsletter";
import ChooseSection from "../shared/choose-section/choose-section";
import LegalSection from "../shared/legal-section/legal-section";
import Faq from "../shared/faq/faq";
import LegalService from "../shared/legal-services/legal-service";
import LawyersSection from "../shared/lawyer-section/lawyers-section";


function Home() {

    const theme = useTheme()
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Banner />

      {/* Legal Services Section */}
      
      <LegalService />

      {/* Specialized Lawyers Section */}
     <LawyersSection />

      {/* Join as a Lawyer Section */}
      <Box
        sx={{
          padding: "3rem 1rem",
          backgroundColor: "#001f54",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <Box sx={{ flex: 1, minWidth: "300px" }}>
          {/* Placeholder Image */}
          <Box
            sx={{
              width: "100%",
              height: "300px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Add your actual image or replace this with an image tag */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "100px",
                background: "linear-gradient(to right, #1fa67a, #4caf50)",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ flex: 2, minWidth: "300px" }}>
          <Typography
            variant="h6"
            sx={{ color: "#bca864", marginBottom: "1rem" }}
          >
            Join As A Lawyer
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ marginBottom: "1rem", color: "white" }}
          >
            Join as a Lawyer
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "2rem", color: "rgba(255, 255, 255, 0.7)" }}
          >
            Are you a licensed lawyer looking to expand your legal services?
            Join Naseh, Qatar's first legal platform, and start providing legal
            consultations to clients across the country with ease and
            convenience.
          </Typography>
          <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
            {[
              "Expand Your Customer Network",
              "Flexible Consultation Options",
              "Control Your Schedule",
              "Secure and Fast Payments",
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <VerifiedIcon sx={{ color: "#1fa67a", fontSize: "24px" }} />
                  <Typography variant="body2" color="white">
                    {item.toUpperCase()}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#bca864",
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
              padding: "0.75rem 2rem",
            }}
          >
            Join Now
          </Button>
        </Box>
      </Box>

      {/* Legal Blog Section */}
    <LegalSection />

      {/* FAQ Section */}
      <Faq />
      

      {/* why Choose */}
      <ChooseSection />
      {/* // Newsletter Section */}
      <Newsletter />

      {/* Footer Section */}
      <Footer />
      
    </>
  );
}

export default Home;
