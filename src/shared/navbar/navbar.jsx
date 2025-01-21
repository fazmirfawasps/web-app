import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { navItem } from "../../config/data";
import Logo from "../../components/logo";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Mobile check

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between",padding:1 }}>
        {/* Logo */}
       <Logo />

        {/* Navigation Links or Menu Icon */}
        {isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              sx={{ border: "1px solid #e0e0e0", borderRadius: "8px" }}
            >
              <AccountCircleIcon sx={{ color: "#001f54" }} />
            </IconButton>
            <Button
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                textTransform: "none",
                color: "#001f54",
                padding: "8px 16px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1200px-Flag_of_Qatar.svg.png"
                alt="Qatar"
                style={{ width: "20px", height: "20px", borderRadius: "50%" }}
              />
              AR
            </Button>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                textTransform: "none",
                color: "#001f54",
                padding: "8px 16px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <MenuIcon
                sx={{
                  borderRadius: "8px",
                }}
              />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navItem.map((item) => (
              <Button
                key={item}
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  color: "#001f54",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}

        {/* Action Buttons */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              sx={{ border: "1px solid #e0e0e0", borderRadius: "8px" }}
            >
              <AccountCircleIcon sx={{ color: "#001f54" }} />
            </IconButton>
            <Button
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                textTransform: "none",
                color: "#001f54",
                padding: "8px 16px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1200px-Flag_of_Qatar.svg.png"
                alt="Qatar"
                style={{ width: "20px", height: "20px", borderRadius: "50%" }}
              />
              AR
            </Button>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ alignSelf: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {navItem.map((item) => (
              <ListItem button key={item} onClick={toggleDrawer(false)}>
                <ListItemText
                  primary={item}
                  sx={{ textAlign: "start", fontWeight: "bold" }}
                />
              </ListItem>
            ))}
          </List>
          
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
