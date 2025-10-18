import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import { products } from "../data/mockData";

const Products = () => {
  const navigate = useNavigate();

  return (
    <Box className="products-container">
      <Typography variant="h4" className="products-title">Products</Typography>

      <Grid container spacing={3}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card className="product-card">
              <CardMedia component="img" image={p.image} alt={p.title} className="product-image" />
              <CardContent>
                <Typography variant="h6" className="product-title">{p.title}</Typography>
                <Typography variant="body2" className="product-price">Price: ${p.price}</Typography>
                <Button variant="contained" fullWidth onClick={() => navigate(`/products/${p.id}`)} className="product-btn">View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
