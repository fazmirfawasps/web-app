import { red ,grey} from "@mui/material/colors";
import {  createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik, sans-serif",
  },
  palette: {
    primary: {
      main: grey[900],
    },
    green: {
      main: "#00C853",
      light: "rgba(0, 200, 83, 0.1)",
    },
    red: {
     100:red[100],
     200:red[200],
     300:red[300],
     400:red[400],
     500:red[500],
     600:red[600],
     700:red[700],
     800:red[800],
     900:red[900],
    },
    secondary: {
      main: "#E3D7B6",
      light: "#fcfbf8",
    },
    error: {
      main: red.A400,
    },
    grey: {
      200: grey[200],
      300: grey[300],
      400: grey[400],
      500: grey[500],
      600: grey[600],
      700: grey[700],
      800: grey[800],
      900: grey[900],
    },
  },
});

export default theme;