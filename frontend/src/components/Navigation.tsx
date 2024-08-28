import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  AccountCircleOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box position="sticky" top={0}>
      <AppBar elevation={0} color="primary">
        <Toolbar>
          <Stack
            direction="row"
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              ClothingStore
            </Typography>
            <Stack direction="row" gap={4}>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/shop")}
              >
                Shop
              </Typography>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() =>
                  navigate("/contact")
                }
              >
                Contact
              </Typography>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/about")}
              >
                About
              </Typography>
            </Stack>
            <Stack direction="row" gap={2}>
              <IconButton
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/profile")}
              >
                <AccountCircleOutlined />
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
