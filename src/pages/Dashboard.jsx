import React from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box className="dashboard-container">
      <Typography variant="h4" className="dashboard-title">Welcome to the Dashboard</Typography>
      <Typography variant="body1" className="dashboard-text">
        Yeh sample dashboard hai — niche diye buttons se different pages khol sakte ho.
      </Typography>

      <Stack direction="row" spacing={2} className="dashboard-buttons">
        <Button variant="contained" onClick={() => navigate("/products")} className="dashboard-btn">Products</Button>
        <Button variant="contained" onClick={() => navigate("/users")} className="dashboard-btn">Users</Button>
        <Button variant="contained" onClick={() => navigate("/github")} className="dashboard-btn">GitHub Finder</Button>
      </Stack>

      <Box mt={4}>
        <Typography variant="body2" color="textSecondary">
          Note: Ye sab dummy data par chal raha hai. Repo mein push karne ke baad real API bhi laga sakte ho.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
