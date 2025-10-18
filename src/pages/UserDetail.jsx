import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import "./UserDetail.css";
import { users } from "../data/mockData";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => String(u.id) === String(id));

  if (!user) return <Typography variant="h6">User not found.</Typography>;

  return (
    <Box className="user-detail-container">
      <Card className="user-detail-card">
        <CardContent>
          <Typography variant="h5" className="user-name">{user.name}</Typography>
          <Typography><strong>Username:</strong> {user.username}</Typography>
          <Typography><strong>Email:</strong> {user.email}</Typography>
          <Typography><strong>Phone:</strong> {user.phone}</Typography>
          <Typography><strong>Website:</strong> {user.website}</Typography>

          <Box mt={2}>
            <Typography variant="subtitle1">Address</Typography>
            <Typography>{user.address.street}, {user.address.city}, {user.address.zipcode}</Typography>
          </Box>

          <Box mt={2}>
            <Typography variant="subtitle1">Company</Typography>
            <Typography>{user.company.name} — {user.company.catchPhrase}</Typography>
          </Box>

          <Box mt={3}>
            <Button variant="outlined" onClick={() => navigate("/users")}>Back to Users</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserDetail;
