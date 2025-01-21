import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Faq = () => {
    return (
      <Box sx={{ padding: "3rem 1rem", backgroundColor: "#fff" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#bca864",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          FAQ
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "##001f54",
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* Section 1 */}
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              color: "#001f54",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            {/* General Questions */}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {[
              "What services does Naseh offer?",
              "How can I find a lawyer using Naseh?",
              "Is there a fee to use Naseh?",
              "How can I schedule a consultation with a lawyer?",
              "Can I track the progress of my legal case through Naseh?",
              "Is Naseh available 24/7?",
              "What types of legal issues can Naseh help with?",
              "How secure is my information on Naseh?",
              "Can I upload and manage legal documents on Naseh?",
              "How do I contact customer support if I have issues with the app?",
            ].map((question, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#f9f9f9",
                    padding: "1rem 1.5rem",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    sx={{ color: "##001f54", flex: 1 }}
                  >
                    {question}
                  </Typography>
                <KeyboardArrowDownIcon sx={{ color: "#bca864" }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
}

export default Faq;
