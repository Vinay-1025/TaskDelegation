import  { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import logo from "../assets/accelyzei-logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  
const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
const navigate = useNavigate();


const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget); // This sets the anchor for the menu
};

const handleMenuClose = () => {
  setAnchorEl(null); // Close the menu
};

const handleLogout = () => {
  // Clear tokens or user data later here if needed
  handleMenuClose(); // close the menu
  navigate("/login"); // redirect to login page
};
  return (
    <div>
      <AppBar
      color="default" elevation={1}>
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", px: 3 }}
        >
          {/* Left: Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <img src={logo} alt="logo" style={{ height: 40 }} />
          </Box>

          {/* Center: Page Title */}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontFamily: "'Inter', sans-serif",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            TaskBoard
          </Typography>

          <Box>
            <IconButton
              onClick={handleMenuOpen}
              sx={{
                p: 0,
                "&:focus": {
                  outline: "none",
                },
                "&:focus-visible": {
                  outline: "none",
                },
                "& .MuiTouchRipple-root": {
                  display: "none",
                },
              }}
              disableRipple
            >
              <Avatar
                alt="Bhaskar"
                sx={{
                  bgcolor: "#1e88e5",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  width: 40,
                  height: 40,
                  boxShadow: 2,
                  border: "2px solid white",
                }}
              >
                B
              </Avatar>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <AccountCircleIcon sx={{ mr: 1 }} />
                Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <LogoutIcon sx={{ mr: 1 }} />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
