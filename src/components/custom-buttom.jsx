import React from 'react';
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Button, useTheme } from '@mui/material';


const CustomButtom = ({borderRadius=2,width='100%',sx,btnTittle='book a consulation' ,Icon= CalendarTodayIcon}) => {
    const theme = useTheme()
    return (
      <Button
        variant="contained"
        color="primary"
        sx={{
          width,  
          mt: 2,
          backgroundColor: "#0D47A1",
          textTransform: "none",
          borderRadius: borderRadius,
          fontWeight: "bold",
          padding:1,
          ...sx
        }}
        startIcon={<Icon />}
      >
        {btnTittle}
      </Button>
    );
}

export default CustomButtom;
