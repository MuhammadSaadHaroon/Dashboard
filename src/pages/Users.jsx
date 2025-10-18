import React from "react";
import { List, ListItem, ListItemButton, ListItemText, Typography, Box, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Users.css";
import { users } from "../data/mockData";

const Users = () => {
  const navigate = useNavigate();

  return (
    <Box className="users-container">
      <Typography variant="h4" className="users-title">Users</Typography>
      <List>
        {users.map((u) => (
          <React.Fragment key={u.id}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate(`/users/${u.id}`)}>
                <ListItemText primary={u.name} secondary={u.email} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Users;
