import React, { useState } from "react";
import { Box, TextField, Button, Typography, Card, CardContent } from "@mui/material";
import "./GithubFinder.css";


const sampleUsers = [
  { login: "octocat", name: "The Octocat", repos: 8, followers: 5000, avatar: "https://banner2.cleanpng.com/20180425/jxe/kisspng-computer-icons-desktop-wallpaper-vector-icon-5ae119aedffdd3.5363031215247016149175.jpg" },
  { login: "john-doe", name: "John Doe", repos: 12, followers: 120, avatar: "https://banner2.cleanpng.com/20180425/jxe/kisspng-computer-icons-desktop-wallpaper-vector-icon-5ae119aedffdd3.5363031215247016149175.jpg" },
  { login: "test", name: "Test", repos: 12, followers: 120, avatar: "https://banner2.cleanpng.com/20180425/jxe/kisspng-computer-icons-desktop-wallpaper-vector-icon-5ae119aedffdd3.5363031215247016149175.jpg" },
  { login: "dummy", name: "Dummy", repos: 12, followers: 120, avatar: "https://banner2.cleanpng.com/20180425/jxe/kisspng-computer-icons-desktop-wallpaper-vector-icon-5ae119aedffdd3.5363031215247016149175.jpg" },
];

const GithubFinder = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [msg, setMsg] = useState("");

  const handleSearch = () => {
    setMsg("");
    setResult(null);
    if (!query) { setMsg("Please enter username"); return; }


    const found = sampleUsers.find(u => u.login.toLowerCase() === query.toLowerCase());
    if (found) setResult(found);
    else setMsg("User not found in dummy data. (This is mock.)");
  };

  return (
    <Box className="github-container">
      <Typography variant="h4" className="github-title">GitHub User Finder</Typography>
      <Box display="flex" gap={2} mt={2} mb={2}>
        <TextField label="GitHub username" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button variant="contained" onClick={handleSearch}>Search</Button>
      </Box>

      {msg && <Typography color="error">{msg}</Typography>}

      {result && (
        <Card style={{ maxWidth: 720, marginTop: 16 }}>
          <CardContent style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <img src={result.avatar} alt={result.login} style={{ width: 120, height: 120, borderRadius: 8, objectFit: "cover" }} />
            <div>
              <Typography variant="h6">{result.name} ({result.login})</Typography>
              <Typography>Repos: {result.repos} • Followers: {result.followers}</Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default GithubFinder;
