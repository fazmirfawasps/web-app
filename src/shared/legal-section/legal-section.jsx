import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LegalSection = () => {
    return (
      <Box sx={{ padding: "3rem 1rem", backgroundColor: "#f9f9f9" ,paddingX:{sm:0,md:16}}}>
        <Typography
          variant="h6"
          sx={{
            color: "#bca864",
            textAlign: "left",
            marginLeft: "3rem",
            marginBottom: "0.5rem",
          }}
        >
          Community
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            textAlign: "left",
            marginBottom: "2rem",
            color: "#001f54",
          }}
        >
          Naseh Legal Blog
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/027/662/789/small/law-and-authority-lawyer-concept-judgment-gavel-hammer-in-court-courtroom-for-crime-judgement-legislation-and-judicial-decision-free-photo.jpg", // Replace with actual image URLs
              date: "June 23, 2024",
              category: "Legal Consultations",
              title: "Avoiding Trouble: Common Legal Mistakes to Keep Away",
              description:
                "In Qatar, As In Any Country, It Is Important For Its Citizens And Expatriates To Follow The Local Laws And Regulations To Avoid Legal Problems.",
            },
            {
              image:
                "https://pacificcoastadvocates.com/wp-content/uploads/2018/06/Special-education-advocate-vs.-attorney-300x200.jpg", // Replace with actual image URLs
              date: "June 23, 2024",
              category: "Legal Consultations",
              title: "Avoiding Trouble: Common Legal Mistakes to Keep Away",
              description:
                "In Qatar, As In Any Country, It Is Important For Its Citizens And Expatriates To Follow The Local Laws And Regulations To Avoid Legal Problems.",
            },
            {
              image:
                "https://keystoneacademic-res.cloudinary.com/image/upload/v1672746369/iStock-475737407_wmvexu.jpg", // Replace with actual image URLs
              date: "June 23, 2024",
              category: "Legal Consultations",
              title: "Avoiding Trouble: Common Legal Mistakes to Keep Away",
              description:
                "In Qatar, As In Any Country, It Is Important For Its Citizens And Expatriates To Follow The Local Laws And Regulations To Avoid Legal Problems.",
            },
          ].map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: "none",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    height: "200px",
                    borderRadius: "8px 8px 0 0",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CardContent sx={{ textAlign: "left", padding: "1.5rem" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#bca864", marginBottom: "0.5rem" }}
                  >
                    {blog.date} | {blog.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      marginBottom: "1rem",
                      color: "#001f54",
                      textTransform: "capitalize",
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginBottom: "1rem" }}
                  >
                    {blog.description}
                  </Typography>
                </CardContent>
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
            View All Blogs <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    );
}

export default LegalSection;
