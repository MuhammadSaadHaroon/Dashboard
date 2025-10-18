import React from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box className="dashboard-container">
      <Typography variant="h4" className="dashboard-title">Welcome to the Dashboard</Typography>
        <br></br>
      <Typography variant="body1" className="dashboard-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non aperiam ut eius commodi autem quos corrupti quae a ducimus cupiditate provident illo sed totam aliquam accusamus architecto, eum rerum.
        <br></br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, officiis! Obcaecati eum pariatur odit. Facere pariatur totam quis doloremque mollitia dignissimos, nam consequuntur itaque neque eius provident, voluptas enim necessitatibus.
        <br></br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, officiis! Obcaecati eum pariatur odit. Facere pariatur totam quis doloremque mollitia dignissimos, nam consequuntur itaque neque eius provident, voluptas enim necessitatibus.
        <br></br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, officiis! Obcaecati eum pariatur odit. Facere pariatur totam quis doloremque mollitia dignissimos, nam consequuntur itaque neque eius provident, voluptas enim necessitatibus.
      </Typography>
    </Box>
  );
};

export default Dashboard;
