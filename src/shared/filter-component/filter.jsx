import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import {
  AccessTime,
  CalendarMonth,
  BusinessCenterOutlined,
  TranslateOutlined,
} from "@mui/icons-material";
import CustomBadge from "../../components/custom-badge";
import {  MobileDatePicker, MobileTimePicker,  } from "@mui/x-date-pickers";

const ConsultationForm = () => {
  const theme = useTheme();
  const iconSize = 50;

  // State for form fields
  const [consultationDate, setConsultationDate] =useState(null)
  const [consultationTime, setConsultationTime] = useState(null);
  const [language, setLanguage] = useState("");
  const [experience, setExperience] = useState("");

  // Check if all fields are filled
  const isFormComplete =
    consultationDate !== null &&
    consultationTime !== null &&
    language !== "" &&
    experience !== "";

  return (
    <Box sx={{ textAlign: "center", py: 3 }}>
      <Grid container spacing={4} justifyContent="center" px={4} py={4}>
        {/* Consultation Date */}
        <Grid item xs={12} md={3}>
          <Box display="flex" gap={2}>
            <CustomBadge
              Icon={CalendarMonth}
              size={iconSize}
              iconColor={theme.palette.secondary.main}
              bgColor={theme.palette.secondary.light}
            />
            <Box width={"100%"}>
              <Typography fontWeight={500} color="primary" textAlign={"start"}>
                Consultation Date
              </Typography>
              <MobileDatePicker
                value={consultationDate}
                onChange={(newValue) => setConsultationDate(newValue)}
                slotProps={{
                  textField: { variant: "standard", fullWidth: true },
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Consultation Time */}
        <Grid item xs={12} md={3}>
          <Box display="flex" gap={2}>
            <CustomBadge
              Icon={AccessTime}
              size={iconSize}
              iconColor={theme.palette.secondary.main}
              bgColor={theme.palette.secondary.light}
            />
            <Box width={"100%"}>
              <Typography fontWeight={500} color="primary" textAlign={"start"}>
                Consultation Time
              </Typography>
              <MobileTimePicker
                value={consultationTime}
                onChange={(newValue) => setConsultationTime(newValue)}
                slotProps={{
                  textField: { variant: "standard", fullWidth: true },
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Consultation Language */}
        <Grid item xs={12} md={3}>
          <Box display="flex" gap={2}>
            <CustomBadge
              Icon={TranslateOutlined}
              size={iconSize}
              iconColor={theme.palette.secondary.main}
              bgColor={theme.palette.secondary.light}
            />
            <Box width={"100%"}>
              <Typography fontWeight={500} color="primary" textAlign={"start"}>
                Consultation Language
              </Typography>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                displayEmpty
                variant="standard"
                fullWidth
                sx={{ textAlign: "start" }}
              >
                <MenuItem value="" disabled>
                  Select Language
                </MenuItem>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="French">French</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
              </Select>
            </Box>
          </Box>
        </Grid>

        {/* Years of Experience */}
        <Grid item xs={12} md={3}>
          <Box display="flex" gap={2}>
            <CustomBadge
              Icon={BusinessCenterOutlined}
              size={iconSize}
              iconColor={theme.palette.secondary.main}
              bgColor={theme.palette.secondary.light}
            />
            <Box width={"100%"}>
              <Typography fontWeight={500} color="primary" textAlign={"start"}>
                Years of Experience
              </Typography>
              <Select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                displayEmpty
                variant="standard"
                fullWidth
                sx={{ textAlign: "start" }}
              >
                <MenuItem value="" disabled>
                  Select Experience
                </MenuItem>
                <MenuItem value="1-2 years">1-2 years</MenuItem>
                <MenuItem value="3-5 years">3-5 years</MenuItem>
                <MenuItem value="6+ years">6+ years</MenuItem>
              </Select>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Book Consultation Button */}
      <Box mt={3}>
        <Button
          variant="contained"
          disabled={!isFormComplete}
          sx={{
            bgcolor: isFormComplete ? "#B71C1C" : "#B0B9C3",
            color: "white",
            textTransform: "none",
            fontSize: "16px",
            px: 3,
            py: 1.5,
            borderRadius: 2,
            "&:hover": {
              bgcolor: isFormComplete ? "#9E1B1B" : "#9aa2ac",
            },
          }}
          startIcon={<CalendarMonth />}
        >
          Book a Consultation
        </Button>
      </Box>
    </Box>
  );
};

export default ConsultationForm;
