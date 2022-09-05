import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <>
      <div style={{ height: "60px" }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                IHUAJO S.R.L
              </Link>
            </Typography>
            <IconButton
              color="secondary"
              aria-label="favorites"
              component="label"
            ></IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
