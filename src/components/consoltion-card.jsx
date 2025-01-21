import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomButtom from "./custom-buttom";

const ScheduledConsultationCard = ({title,description,Icon}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: 3,
          borderRadius: 2,
          p: 2,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#E8F5E9",
              borderRadius: "50%",
              p: 1.5,
            }}
          >
            {Icon}
          </Box>
        </Box>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <CustomButtom />
      </Card>
    </motion.div>
  );
};

export default ScheduledConsultationCard;
