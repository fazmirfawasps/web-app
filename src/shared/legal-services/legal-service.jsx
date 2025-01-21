import React from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import GavelIcon from "@mui/icons-material/Gavel";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BusinessIcon from "@mui/icons-material/Business";
import ArticleIcon from "@mui/icons-material/Article";


const LegalService = () => {
    return (
      <Box sx={{ padding: "3rem 1rem", backgroundColor: "white" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#bca864",
            textAlign: "left",
            marginLeft: "3rem",
            marginBottom: "0.5rem",
          }}
        >
          Services
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
          A wide range of legal services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: (
                <CalendarTodayIcon sx={{ fontSize: 40, color: "#1fa67a" }} />
              ),
              title: "Scheduled Consultations",
              description:
                "Naseh Application Is An Integrated Solution For Providing Legal Services Remotely.",
              buttonText: "Book a consultation",
              buttonColor: "#001f54",
              buttonTextColor: "#fff",
            },
            {
              icon: <PhoneInTalkIcon sx={{ fontSize: 40, color: "#ff6d6d" }} />,
              title: "Urgent Consultation",
              description:
                "Naseh Application Is An Integrated Solution For Providing Legal Services Remotely.",
              buttonText: "Consult Now",
              buttonColor: "#001f54",
              buttonTextColor: "#fff",
            },
            {
              icon: <BusinessIcon sx={{ fontSize: 40, color: "#1fa67a" }} />,
              title: "Corporate Portal",
              description:
                "The Corporate Portal Service Or An Open Monthly Subscription Can Be Offered.",
              buttonText: "Soon",
              buttonColor: "#f5f5f5",
              buttonTextColor: "#a0a0a0",
            },
            {
              icon: <ArticleIcon sx={{ fontSize: 40, color: "#1fa67a" }} />,
              title: "Written Consultation",
              description:
                "Naseh Application Is An Integrated Solution For Providing Legal Services Remotely.",
              buttonText: "Soon",
              buttonColor: "#f5f5f5",
              buttonTextColor: "#a0a0a0",
            },
            {
              icon: <GavelIcon sx={{ fontSize: 40, color: "#1fa67a" }} />,
              title: "Contracts & Agreements",
              description:
                "Naseh Application Is An Integrated Solution For Providing Legal Services Remotely.",
              buttonText: "Soon",
              buttonColor: "#f5f5f5",
              buttonTextColor: "#a0a0a0",
            },
            {
              icon: <PersonAddIcon sx={{ fontSize: 40, color: "#1fa67a" }} />,
              title: "Hire A Lawyer",
              description:
                "Naseh Application Is An Integrated Solution For Providing Legal Services Remotely.",
              buttonText: "Soon",
              buttonColor: "#f5f5f5",
              buttonTextColor: "#a0a0a0",
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "none",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                }}
              >
                <Box sx={{ marginBottom: "1rem" }}>{service.icon}</Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ marginBottom: "1rem" }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginBottom: "1.5rem" }}
                >
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: service.buttonColor,
                    color: service.buttonTextColor,
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                  disabled={service.buttonText === "Soon"}
                >
                  {service.buttonText}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{ textAlign: "right", marginTop: "2rem", marginRight: "2rem" }}
        >
          <Button
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "16px",
              color: "#bca864",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            View All Services <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    );
}

export default LegalService;
