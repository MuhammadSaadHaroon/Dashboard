// optional header (small component) - not heavily used but provided
import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ title }) => {
  return (
    <Box mb={2}>
      <Typography variant="h5" style={{ color: "#1976d2", fontWeight: 700 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
