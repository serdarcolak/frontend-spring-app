import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@mui/material/styles/styled";

const StyledLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
  marginRight: "16px",
  fontWeight : "bold",
  fontSize: "20px"
  
});

const Grow = styled("div")({
  flexGrow: 1,
  textAlign: "left",
});

function Navbar() {
  let userId = 5;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Grow}>
            <StyledLink to="/">Home</StyledLink>
          </Typography>
          <StyledLink to={{ pathname: "/users/" + userId }}>User</StyledLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;